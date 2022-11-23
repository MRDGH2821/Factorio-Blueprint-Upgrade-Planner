import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { base64ToBytes } from 'byte-base64';
import { inflate } from 'pako';
import { BlueprintInputStore } from '../ts-interfaces/blueprint';
import textBoxStyles from './text_box.css?inline';

export function BlueprintDecrypt(bpCtx: BlueprintInputStore) {
  const bpBase64Str = bpCtx.encodedInput.slice(1);
  try {
    const bpZlibDeflateStr = base64ToBytes(bpBase64Str);
    bpCtx.decodedInput = inflate(bpZlibDeflateStr, { to: 'string' });
  } catch (error) {
    bpCtx.decodedInput = `${
      error || 'An error ocurred while decrypting. Most likely it is not a base64 encoded string.'
    }`;
  }
}

interface BPprops {
  bpStrStore: BlueprintInputStore;
}

export default component$((props: BPprops) => {
  useStylesScoped$(textBoxStyles);

  const { bpStrStore } = props;

  let validity = '✅ Blueprint input received';

  if (!bpStrStore.encodedInput) {
    validity = '❌ No Blueprint found';
  } else if (!bpStrStore.decodedInput) {
    validity = '⚠️ Blueprint cannot be decoded, click download to see errors';
  } else {
    validity = '✅ Blueprint decoded, enter a config & download!';
  }

  return (
    <>
      <span>Input factorio Blueprint</span>
      <br></br>
      <textarea
        cols={50}
        rows={10}
        preventdefault:input
        required={true}
        onInput$={(input) => {
          bpStrStore.encodedInput = (input.target as HTMLTextAreaElement).value;
          BlueprintDecrypt(bpStrStore);
        }}
      />
      <p>{validity}</p>
    </>
  );
});
