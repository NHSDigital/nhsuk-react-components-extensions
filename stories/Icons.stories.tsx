import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import { WarningIcon } from '../src';

const stories = storiesOf('Icons', module);

stories.add('WarningIcon solid', () => <WarningIcon />);
stories.add('WarningIcon transparent', () => <WarningIcon inColour={false} />);
