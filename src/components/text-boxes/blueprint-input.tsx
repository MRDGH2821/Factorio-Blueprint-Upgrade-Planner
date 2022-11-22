import {
  component$,
  createContext,
  useContextProvider,
  useStore,
  useStylesScoped$,
} from '@builder.io/qwik';
import { inflate } from 'pako';
import { BlueprintInputStore } from '../ts-interfaces/blueprint';
import textBoxStyles from './text_box.css?inline';

export const BPContext = createContext<BlueprintInputStore>('bp-input-context');

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

export default component$(() => {
  useStylesScoped$(textBoxStyles);

  const bpStrStore = useStore<BlueprintInputStore>({
    encodedInput: '',
    decodedInput: '',
  });

  useContextProvider(BPContext, bpStrStore);

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
