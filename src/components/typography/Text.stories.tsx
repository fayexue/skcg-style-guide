import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, color } from '@storybook/addon-knobs/react';
import Text from './Text';
import { Heading } from './Heading';
import { Subheading } from './Subheading';

storiesOf('typography', module)
  .addDecorator(withKnobs)
  .add('Heading',  withInfo()(() =>
    <Heading>This is a heading</Heading>
  ))
  .add('Subheading',  withInfo()(() =>
    <Subheading>This is a subheading</Subheading>
  ))
  .add('Text', withInfo()(() =>
    <Text
      fontSize={text('fontSize (optional)')}
      fontWeight={text('fontWeight (optional)')}
      lineHeight={text('lineHeight (optional)')}
      fontSizeDesktop={text('fontSizeDesktop (optional)')}
      fontWeightDesktop={text('fontWeightDesktop (optional)')}
      lineHeightDesktop={text('lineHeightDesktop (optional)')}
      color={color('color (optional)')}
      colorDesktop={color('colorDesktop (optional)')}
      isLast={boolean('isLast (optional)')}
    >
      Taxation Accountants (also known as Tax Accountants) are responsible for analysing, 
      reporting and providing advice on fiscal and taxation issues to individuals or organisations.
    </Text>
  ))
