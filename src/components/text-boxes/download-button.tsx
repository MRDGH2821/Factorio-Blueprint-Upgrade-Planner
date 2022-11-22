import { component$, useContext } from '@builder.io/qwik';
import { saveAs } from 'file-saver';
import { deflate } from 'pako';
import { BlueprintInputStore } from '../ts-interfaces/blueprint';
import { BluePrintConfig, ConfigInputStore } from '../ts-interfaces/config';
import { BPContext } from './blueprint-input';
import { configContext } from './config-input';

export default component$(() => {
  const bpCtx = useContext(BPContext);
  const cfgCtx = useContext(configContext);
  return (
    <>
      <button
        preventdefault:click
        onClick$={() => {
          const bp = generateFile(cfgCtx, bpCtx);
          saveAs(bp, `Converted blueprint ${new Date().toUTCString}.txt`);
        }}>
        Download!
      </button>
    </>
  );
});

export function replaceEntities(config: BluePrintConfig, blueprint: string) {
  const copy = blueprint.slice();
  for (const entity of config.entities) {
    copy.replace(new RegExp(entity.old), entity.new);
  }
  return copy;
}

export function bpCompress(blueprint: string) {
  const bpDeflateStr = deflate(blueprint);
  const bpBase64Str = btoa(bpDeflateStr.toString());
  return bpBase64Str;
}

export function BlueprintConverter(cfgCtx: ConfigInputStore, bpCtx: BlueprintInputStore) {
  console.log(cfgCtx);
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
  const results = BlueprintConverter(cfgCtx, bpCtx);

  return new Blob(results.split(''));
}
