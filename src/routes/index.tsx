import { component$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import defaultConfig from '../../public/default-config.json';
import manifest from '../../public/manifest.json';
import BlueprintInput from '../components/text-boxes/blueprint-input';
import ConfigInput from '../components/text-boxes/config-input';
import DownloadButton from '../components/text-boxes/download-button';
import { BlueprintInputStore } from '../components/ts-interfaces/blueprint';
import { ConfigInputStore } from '../components/ts-interfaces/config';

export default component$(() => {
  const bpStrStore = useStore<BlueprintInputStore>({
    encodedInput: '',
    decodedInput: '',
  });

  const cfgStore = useStore<ConfigInputStore>({
    config: `${JSON.stringify(defaultConfig) || ''}`,
  });

  return (
    <div>
      <h1>Welcome to Factorio Blueprint Upgrade Planner!</h1>
      <BlueprintInput bpStrStore={bpStrStore} />
      <ConfigInput cfgStore={cfgStore} />
      <DownloadButton BPstore={bpStrStore} CFGstore={cfgStore} />
    </div>
  );
});

export const head: DocumentHead = {
  title: manifest.short_name,
  meta: [
    {
      name: manifest.name,
      content: manifest.description,
    },
  ],
};
