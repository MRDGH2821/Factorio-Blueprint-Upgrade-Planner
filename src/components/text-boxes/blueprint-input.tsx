import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { inflate } from 'pako';
import { BlueprintInputStore } from '../ts-interfaces/blueprint';
import textBoxStyles from './text_box.css?inline';

export function BlueprintDecrypt(bpCtx: BlueprintInputStore) {
  const bpBase64Str = bpCtx.encodedInput.slice(1);
  try {
    const bpZlibDeflateStr = atob(bpBase64Str);
    bpCtx.decodedInput = inflate(
      Uint8Array.from(bpZlibDeflateStr, (c) => c.charCodeAt(0)),
      { to: 'string' },
    );
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
  return (
    <>
      <span>Input factorio Blueprint</span>
      <br></br>
      <textarea
        cols={50}
        rows={10}
        preventdefault:input
        onInput$={(input) => {
          bpStrStore.encodedInput = (input.target as HTMLTextAreaElement).value;
          BlueprintDecrypt(bpStrStore);
        }}
      />
    </>
  );
});
