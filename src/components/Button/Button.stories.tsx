import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';

import Button from './Button';

storiesOf('ui', module)
  .addDecorator(withKnobs)
  .add('Button', withInfo()(() =>
    <Button
      secondary={boolean('Secondary', false)}
      ghost={boolean('Ghost', false)}
      onClick={action('clicked')}
    >
      {text('Button', 'Button text')}
    </Button>
  ));
