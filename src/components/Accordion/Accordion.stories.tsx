import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from "@storybook/addon-info";
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import Accordion from './Accordion';
import { DummyContent } from '../demo/DummyContent';

storiesOf('ui', module)
  .addDecorator(withKnobs)
  .add('Accordion', withInfo()(() =>
    <Accordion
      parentName={text('parentName', 'Accordion')}
      title={text('title', 'Open accordion')}
      openTitle={text('openTitle', 'Hide')}
      initialIsCollapsed={boolean('initialIsCollapsed', true)}
      onClick={action('clicked')}
      closedContent={<DummyContent height={100}>Closed</DummyContent>}
    >
      <DummyContent height={300}>Accordion open</DummyContent>
    </Accordion>
  ))
