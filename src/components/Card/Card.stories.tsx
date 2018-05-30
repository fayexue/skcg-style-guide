import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from './Card';
import { Content } from '../demo/Content';

storiesOf('ui/Card', module)
  .add('card', () =>
    <>
      <Card
        title="How do Taxation Accountants rate their role?"
        subtitle="Latest reviews from 22 Taxation Accountants surveyed on SEEK"
        dismissible
      >
        <Content>Card content area</Content>
      </Card>
    </>
  );