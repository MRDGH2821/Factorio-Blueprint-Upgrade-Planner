import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import manifest from '../../public/manifest.json';
import { BlueprintInput } from '../components/text-boxes/blueprint';

export default component$(() => {
  return (
    <div>
      <h1>Welcome to Factorio Blueprint Upgrade Planner!</h1>
      <BlueprintInput />
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
