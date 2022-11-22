import {
  component$,
  createContext,
  useContextProvider,
  useStore,
  useStylesScoped$,
} from '@builder.io/qwik';
import { ConfigInputStore } from '../ts-interfaces/config';
import defaultCfg from './default-config.json';
import textBoxStyles from './text_box.css?inline';

export const configContext = createContext<ConfigInputStore>('config-input-context');

export default component$(() => {
  useStylesScoped$(textBoxStyles);

  const cfgStore = useStore<ConfigInputStore>({
    config: '',
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
        }}
      />
      <br />
    </>
  );
});
