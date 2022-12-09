import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <main>
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        Made by MRDGH2821 |{' '}
        <a href="https://github.com/MRDGH2821/Factorio-Blueprint-Upgrade-Planner/">Source Code</a>
      </footer>
    </>
  );
});
