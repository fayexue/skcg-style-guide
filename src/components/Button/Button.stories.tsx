import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';

storiesOf('ui/Button', module)
  .add('buttons', () =>
    <>
      <Button onClick={action('clicked')}> Hello Button</Button>
      <Button onClick={action('clicked')} secondary> Hello Button</Button>
    </>
  )
  .add('ghost buttons', () =>
    <>
      <Button onClick={action('clicked')} ghost> Hello Button</Button>
      <Button onClick={action('clicked')} secondary ghost> Hello Button</Button>
    </>
  );
