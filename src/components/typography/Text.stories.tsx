import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from "@storybook/addon-info";
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import Text from './Text';
import Heading from './Heading';
import Subheading from './Subheading';

storiesOf('typography', module)
  .addDecorator(withKnobs)
  .add('Heading', withInfo()(() =>
    <Heading>This is a heading</Heading>
  ))
  .add('Subheading', withInfo()(() =>
    <Subheading>This is a subheading</Subheading>
  ))
  .add('Text', withInfo()(() =>
    <Text
      hero={boolean('hero', false)}
      heading={boolean('heading', false)}
      subheading={boolean('subheading', false)}
      small={boolean('small', false)}
      strong={boolean('strong', false)}
      info={boolean('info', false)}
      critical={boolean('critical', false)}
      isLast={boolean('isLast (optional)', false)}
    >
      Taxation Accountants (also known as Tax Accountants) are responsible for analysing,
      reporting and providing advice on fiscal and taxation issues to individuals or organisations.
    </Text>
  ))
