import { component$ } from '@builder.io/qwik';
import { bytesToBase64 } from 'byte-base64';
import { saveAs } from 'file-saver';
import { deflate } from 'pako';
import { BlueprintInputStore } from '../ts-interfaces/blueprint';
import { BluePrintConfig, ConfigInputStore } from '../ts-interfaces/config';

interface btnProps {
  BPstore: BlueprintInputStore;
  CFGstore: ConfigInputStore;
}

export default component$((props: btnProps) => {
  const bpCtx = props.BPstore;
  const cfgCtx = props.CFGstore;
  return (
    <>
      <button
        preventdefault:input
        preventdefault:click
        onClick$={() => {
          const bp = generateFile(cfgCtx, bpCtx);
          saveAs(bp, `Converted blueprint ${new Date().toUTCString()}.txt`);
        }}>
        Download!
      </button>
    </>
  );
});

export function replaceEntities(config: BluePrintConfig, blueprint: string) {
  let copy = blueprint.slice();
  for (const entity of config.entities) {
    const regex = new RegExp(entity.old, 'g');
    copy = copy.replace(regex, entity.new);
  }
  return copy;
}

export function bpCompress(blueprint: string) {
  const bpDeflateStrArr = deflate(blueprint, { level: 9 });
  const bpBase64Str = bytesToBase64(bpDeflateStrArr);
  return bpBase64Str;
}

export function BlueprintConverter(cfgCtx: ConfigInputStore, bpCtx: BlueprintInputStore) {
  const cfgObj = JSON.parse(cfgCtx.config as string) as BluePrintConfig;
  try {
    const transformedBlueprint = replaceEntities(cfgObj, bpCtx.decodedInput);
    return bpCompress(transformedBlueprint);
  } catch (error) {
    const errTxt = `${
      error || 'An error ocurred while converting. Please check the configuration provided.'
    }`;
    cfgCtx.errors = errTxt;
    return errTxt;
  }
}

export function generateFile(cfgCtx: ConfigInputStore, bpCtx: BlueprintInputStore) {
  const results = `0${BlueprintConverter(cfgCtx, bpCtx)}`;

  return new Blob(results.split(''));
}
