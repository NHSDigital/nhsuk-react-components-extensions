import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { WarningIcon } from '../src';

const meta: Meta<typeof WarningIcon> = {
  title: 'Icons/WarningIcon',
  component: WarningIcon,
};
export default meta;

type Story = StoryObj<typeof WarningIcon>;

export const Solid: Story = {
  render: () => <WarningIcon />,
};

export const Transparent: Story = {
  render: () => <WarningIcon inColour={false} />,
};
