import { component$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import defaultConfig from '../../public/default-config.json';
import manifest from '../../public/manifest.json';
import BlueprintInput from '../components/text-boxes/blueprint-input';
import ConfigInput from '../components/text-boxes/config-input';
import DisplayCode from '../components/text-boxes/display-code';
import DownloadButton from '../components/text-boxes/download-button';
import { BlueprintInputStore } from '../components/ts-interfaces/blueprint';
import { ConfigInputStore } from '../components/ts-interfaces/config';

export const code1 = {
  version: 1,
  entities: [
    {
      old: 'pipe',
      new: 'se-space-pipe',
    },
  ],
};

export const code2 = {
  version: 1,
  entities: [
    {
      old: '(?:[a-z]+-)?transport-belt',
      new: 'se-space-transport-belt',
    },
    {
      old: '(?:[a-z]+-)?underground-belt',
      new: 'se-space-underground-belt',
    },
    {
      old: '(?:[a-z]+-)?splitter',
      new: 'se-space-splitter',
    },
  ],
};

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
      Use this site to quickly replace entities of one type to another with ease!
      <br></br>
      By default, this site uses <a href="../../public/default-config.json">
        a minimal config
      </a>{' '}
      which converts belts, pipes & assemblers into Space versions from Space Exploration mod{' '}
      <br></br>
      Supports regex as well. Uses global flag, so no need to put any flags in regex string.
      <br></br>
      <br></br>
      <BlueprintInput bpStrStore={bpStrStore} />
      <ConfigInput cfgStore={cfgStore} />
      <DownloadButton BPstore={bpStrStore} CFGstore={cfgStore} />
      <br></br>
      <br></br>
      <h2>How to create your own config?</h2>
      Open Factorio's <a href="https://wiki.factorio.com/Debug_mode">Debug Mode</a> & enable{' '}
      <mark>show-debug-info-in-tooltips</mark> which will enable you to see entity's internal name.
      <br></br>
      Take a note of which entity you want to replace with which one.
      <br></br>
      For example, let's replace pipes. Regular pipes have internal name: <mark>pipe</mark>
      <br></br>
      Now to replace them with Space pipes which have internal name: <mark>se-space-pipe</mark>
      <br></br>
      Your resulting config should be in JSON. So our example config would look like this:
      <br></br>
      <DisplayCode code={code1} />
      <br></br>
      <br></br>
      Replacing belts with Space versions by using regex:
      <DisplayCode code={code2} />
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
