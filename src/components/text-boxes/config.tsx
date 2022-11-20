import {
  component$,
  createContext,
  useContext,
  useContextProvider,
  useStore,
  useStylesScoped$,
} from '@builder.io/qwik';
import { BluePrintConfig } from '../ts-interfaces/config';
import { BlueprintInputStore, BPContext } from './blueprint';
import textBoxStyles from './text_box.css?inline';
export interface ConfigInputStore {
  config: string | BluePrintConfig;
  transformedBlueprint: string;
  importableBlueprint: string;
  errors?: string;
  ogBP?: BlueprintInputStore;
}
import { deflate } from 'pako';
import defaultCfg from './default-config.json';
export const configContext = createContext<ConfigInputStore>('config-input-context');

export const ConfigInput = component$(() => {
  useStylesScoped$(textBoxStyles);
  const cfgStore = useStore<ConfigInputStore>({
    config: '',
    transformedBlueprint: '',
    importableBlueprint: '',
  });

  useContextProvider(configContext, cfgStore);

  return (
    <>
      <span>Input Upgrade Configuration</span>
      <br></br>
      <textarea
        cols={50}
        rows={10}
        preventdefault:input
        value={JSON.stringify(defaultCfg)}
        onInput$={(input) => {
          cfgStore.config = (input.target as HTMLTextAreaElement).value;
          cfgStore.ogBP = useContext(BPContext);
        }}
      />
      <br />

      <br></br>
      <span>Converted Blueprint</span>
      <textarea preventdefault:input id="converted-bp" cols={50} rows={10} />
      <button
        onClick$={() => {
          BlueprintConverted(cfgStore);
        }}>
        Convert!
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

export function BlueprintConverted(cfgCtx: ConfigInputStore) {
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
