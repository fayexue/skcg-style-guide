import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from './Card';
import { Content } from '../demo/Content';
import { action } from '@storybook/addon-actions';

storiesOf('ui/Card', module)
  .add('Card', () =>
    <>
      <Card
        title="How do Taxation Accountants rate their role?"
        subtitle="Latest reviews from 22 Taxation Accountants surveyed on SEEK"
      >
        <Content>Card content area</Content>
      </Card>
    </>
  )
  .add('Dismissable card', () =>
    <>
      <Card
        title="How do Taxation Accountants rate their role?"
        subtitle="Latest reviews from 22 Taxation Accountants surveyed on SEEK"
        dismissible
        onClose={action('Close card')}
      >
        <Content>Card content area</Content>
      </Card>
    </>
  )
  .add('Full width card', () =>
    <>
      <Card
        title="How do Taxation Accountants rate their role?"
        subtitle="Latest reviews from 22 Taxation Accountants surveyed on SEEK"
        fullWidth
      >
        <Content>Card content area</Content>
      </Card>
    </>
  )
  .add('Full height card', () =>
    <>
      <Card
        title="How do Taxation Accountants rate their role?"
        subtitle="Latest reviews from 22 Taxation Accountants surveyed on SEEK"
        fullHeight
      >
        <Content>Card content area</Content>
      </Card>
    </>
  )
  .add('No padding bottom card', () =>
    <>
      <Card
        title="How do Taxation Accountants rate their role?"
        subtitle="Latest reviews from 22 Taxation Accountants surveyed on SEEK"
        noPaddingBottom
      >
        <Content>Card content area</Content>
      </Card>
    </>
  )
  .add('No margin top card', () =>
    <>
      <Card
        title="How do Taxation Accountants rate their role?"
        subtitle="Latest reviews from 22 Taxation Accountants surveyed on SEEK"
        noMarginTop
      >
        <Content>Card content area</Content>
      </Card>
    </>
  )
  .add('Card with footer', () =>
    <>
      <Card
        title="How do Taxation Accountants rate their role?"
        subtitle="Latest reviews from 22 Taxation Accountants surveyed on SEEK"
        footer="footer information"
      >
        <Content>Card content area</Content>
      </Card>
    </>
  )