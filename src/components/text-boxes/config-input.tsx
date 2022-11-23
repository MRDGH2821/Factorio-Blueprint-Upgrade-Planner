import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { default as defaultConfig } from '../../../public/default-config.json';
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
        placeholder={JSON.stringify(defaultConfig, null, 2)}
        onInput$={(input) => {
          cfgStore.config = (input.target as HTMLTextAreaElement).value;
        }}
      />
      <br />
    </>
  );
});
