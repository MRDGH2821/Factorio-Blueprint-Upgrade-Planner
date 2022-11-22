import { deflate } from 'pako';
import { BluePrintConfig, ConfigInputStore } from '../ts-interfaces/config';

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
  
  export function BlueprintConverter(cfgCtx: ConfigInputStore) {
    console.log(cfgCtx);
    const cfgObj = JSON.parse(cfgCtx.config as string) as BluePrintConfig;
  
    try {
      cfgCtx.transformedBlueprint = replaceEntities(cfgObj, cfgCtx.ogBP!.decodedInput);
      cfgCtx.importableBlueprint = bpCompress(cfgCtx.transformedBlueprint);
    } catch (error) {
      cfgCtx.errors = `${
        error || 'An error ocurred while converting. Please check the configuration provided.'
      }`;
    }
  }