import { component$, useStyles$ } from '@builder.io/qwik';
import textBoxStyles from './text_box.css?inline';

export default component$((props: { code: string }) => {
  useStyles$(textBoxStyles);
  return (
    <>
      <textarea readOnly={true} cols={50} rows={10}>
        {props.code}
      </textarea>
    </>
  );
});
