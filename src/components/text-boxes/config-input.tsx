import { component$, useStylesScoped$ } from '@builder.io/qwik';
import defaultCfg from '../../../public/default-config.json';
import { ConfigInputStore } from '../ts-interfaces/config';
import textBoxStyles from './text_box.css?inline';

interface CFGprop {
  cfgStore: ConfigInputStore;
}

export default component$((props: CFGprop) => {
  useStylesScoped$(textBoxStyles);

  const { cfgStore } = props;

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
