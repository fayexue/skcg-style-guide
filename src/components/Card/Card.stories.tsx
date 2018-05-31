import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';
import { DummyContent } from '../demo/DummyContent';
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';

storiesOf('ui', module)
  .addDecorator(withKnobs)
  .add('Card', withInfo()(() =>
    <Card
      title={text('Title (optional)', 'How do Taxation Accountants rate their role?')}
      subtitle={text('Subtitle (optional)', 'Latest reviews from 22 Taxation Accountants surveyed on SEEK')}
      mobileTitleHidden={boolean('Hide mobile title (optional)', false)}
      footer={text('Footer text (optional)', undefined)}
      fullWidth={boolean('Full width (optional)', false)}
      fullHeight={boolean('Full height (optional)', false)}
      noPaddingBottom={boolean('No Padding Bottom (optional)', false)}
      noMarginTop={boolean('No Margin Top (optional)', false)}
      isBottom={boolean('Is bottom card (optional)', false)}
      dismissible={boolean('Dissmissible card? (optional)', false)}
    >
      <DummyContent>Card content area</DummyContent>
    </Card>
  ))