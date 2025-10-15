import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import InputMask from '../src/components/InputMask/InputMask';
// import { InputMask } from '../src';

const meta: Meta<typeof InputMask> = {
  title: 'InputMask',
  component: InputMask,
};
export default meta;

type Story = StoryObj<typeof InputMask>;

export const NationalInsuranceNumber: Story = {
  render: () => (
    <div className="input-mask-demo">
      <label htmlFor="ni-number">National Insurance Number</label>
      <InputMask
        id="ni-number"
        name="ni-number"
        mask="** ## ## ## *"
        formatChars={{
          '#': '[0-9]',
          '*': '[A-Za-z]',
        }}
        maskChar=""
        placeholder="QQ 12 34 56 C"
        alwaysShowMask={false}
      />
    </div>
  ),
};

export const NHSNumber: Story = {
  render: () => (
    <div className="input-mask-demo">
      <label htmlFor="nhs-number">NHS Number</label>
      <InputMask
        id="nhs-number"
        name="nhs-number"
        mask="### ### ####"
        formatChars={{
          '#': '[0-9]',
        }}
        maskChar=""
        placeholder="123 456 7890"
        alwaysShowMask={false}
      />
    </div>
  ),
};

export const PhoneNumber: Story = {
  render: () => (
    <div className="input-mask-demo">
      <label htmlFor="phone">Phone Number</label>
      <InputMask
        id="phone"
        name="phone"
        mask="+44 #### ### ###"
        formatChars={{
          '#': '[0-9]',
        }}
        maskChar=""
        placeholder="+44 1234 567 890"
        alwaysShowMask={false}
      />
    </div>
  ),
};

export const DateOfBirth: Story = {
  render: () => (
    <div className="input-mask-demo">
      <label htmlFor="dob">Date of Birth</label>
      <InputMask
        id="dob"
        name="dob"
        mask="##/##/####"
        formatChars={{
          '#': '[0-9]',
        }}
        maskChar=""
        placeholder="DD/MM/YYYY"
        alwaysShowMask={false}
        disabled={false}
      />
    </div>
  ),
};

export const Postcode: Story = {
  render: () => (
    <div className="input-mask-demo">
      <label htmlFor="postcode">Postcode</label>
      <InputMask
        id="postcode"
        name="postcode"
        mask="*** ***"
        formatChars={{
          '*': '[A-Za-z0-9]',
        }}
        maskChar=""
        placeholder="SW1A 1AA"
        alwaysShowMask={false}
      />
    </div>
  ),
};

export const AlwaysShowMask: Story = {
  render: () => (
    <div className="input-mask-demo">
      <label htmlFor="always-mask">Always Show Mask</label>
      <InputMask
        id="always-mask"
        name="always-mask"
        mask="##/##/####"
        formatChars={{
          '#': '[0-9]',
        }}
        maskChar="_"
        placeholder="DD/MM/YYYY"
        alwaysShowMask={true}
      />
    </div>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <div className="input-mask-demo">
      <label htmlFor="default-value">With Default Value</label>
      <InputMask
        id="default-value"
        name="default-value"
        mask="### ### ####"
        formatChars={{
          '#': '[0-9]',
        }}
        maskChar=""
        defaultValue="1234567890"
        placeholder="123 456 7890"
        alwaysShowMask={false}
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="input-mask-demo">
      <label htmlFor="disabled">Disabled Input</label>
      <InputMask
        id="disabled"
        name="disabled"
        mask="### ### ####"
        formatChars={{
          '#': '[0-9]',
        }}
        maskChar=""
        defaultValue="1234567890"
        placeholder="123 456 7890"
        disabled={true}
        alwaysShowMask={false}
      />
    </div>
  ),
};

export const ReadOnly: Story = {
  render: () => (
    <div className="input-mask-demo">
      <label htmlFor="readonly">Read Only Input</label>
      <InputMask
        id="readonly"
        name="readonly"
        mask="### ### ####"
        formatChars={{
          '#': '[0-9]',
        }}
        maskChar=""
        defaultValue="1234567890"
        placeholder="123 456 7890"
        readOnly={true}
        alwaysShowMask={false}
      />
    </div>
  ),
};