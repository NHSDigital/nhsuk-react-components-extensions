import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import MaskedInput from '../src/components/masked-input/MaskedInput'
const meta: Meta<typeof MaskedInput> = {
  title: 'MaskedInput',
  component: MaskedInput,
};
export default meta;

type Story = StoryObj<typeof MaskedInput>;

export const NationalInsuranceMask: Story = {
  render: () => (
    <div className="masked-input-demo">
      <MaskedInput
        name="ni-number"
        hint="It's on your National Insurance card, benefit letter, payslip or P60. For example, QQ 12 34 56 C"
        label="National Insurance Number"
        width="10"
        mask="** ## ## ## *"
        formatChars={{
          '#': '[0-9]',
          '*': '[A-Za-z]',
        }}
        maskChar=""
        alwaysShowMask={false}
      />
    </div>
  ),
};

export const NHSNumberMask: Story = {
  render: () => (
    <div className="masked-input-demo">
      <MaskedInput
        name="ni-number"
        hint="Your 10 Digit NHS Number"
        label="NHS Number"
        width="10"
        mask="### ### ####"
        formatChars={{
          '#': '[0-9]',
        }}
        maskChar=""
        autoComplete="off"
        alwaysShowMask={false}
      />
    </div>
  ),
};
