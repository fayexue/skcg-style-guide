import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';
import { DummyContent } from '../demo/DummyContent';
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';

storiesOf('ui/Card', module)
  .addDecorator(withKnobs)
  .add('Card', withInfo()(() =>
    <Card
      title={text('Title', 'How do Taxation Accountants rate their role?')}
      subtitle={text('Subtitle', 'Latest reviews from 22 Taxation Accountants surveyed on SEEK')}
      mobileTitleHidden={boolean('Hide mobile title', false)}
      footer={text('Footer text', undefined)}
      fullWidth={boolean('Full width', false)}
      fullHeight={boolean('Full height', false)}
      noPaddingBottom={boolean('No Padding Bottom', false)}
      noMarginTop={boolean('No Margin Top', false)}
      isBottom={boolean('Is bottom card', false)}
      dismissible={boolean('Dissmissible card?', false)}
    >
      <DummyContent>Card content area</DummyContent>
    </Card>
  ))