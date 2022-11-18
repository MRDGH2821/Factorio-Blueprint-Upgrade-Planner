import {
  component$,
  createContext,
  useContext,
  useContextProvider,
  useStore,
} from '@builder.io/qwik';
import { inflate } from 'pako';

export interface BlueprintInputStore {
  encodedInput: string;
  decodedInput: string;
}

export const BPContext = createContext<BlueprintInputStore>('bp-input-context');

export const BlueprintInput = component$(() => {
  const bpStrStore = useStore<BlueprintInputStore>({
    encodedInput: '',
    decodedInput: '',
  });

  useContextProvider(BPContext, bpStrStore);

  return (
    <>
      <span>Input Factorio Blueprint</span>
      <br></br>
      <textarea
        cols={50}
        rows={10}
        preventdefault:input
        onInput$={(input) => {
          bpStrStore.encodedInput = (input.target as HTMLTextAreaElement).value;
        }}
      />
      <br />
      <BlueprintDecrypted />
    </>
  );
});

export const BlueprintDecrypted = component$(() => {
  const bpCtx = useContext<BlueprintInputStore>(BPContext);
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

  return (
    <>
      <span>Decrypted Blueprint</span>
      <br></br>
      <textarea cols={50} rows={10} value={bpCtx.decodedInput} />
    </>
  );
});
