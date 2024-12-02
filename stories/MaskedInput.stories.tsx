import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import { MaskedInput } from '../src/components/masked-input';

const stories = storiesOf('MaskedInput', module);

stories
  .add('National Insurance Mask', () => (
    <div className="masked-input-demo">
      <MaskedInput
        name="ni-number"
        hint="It's on your National Insurance card, benefit letter, payslip or P60. For example, QQ 12 34 56 C"
        label="National Insurance Number"
        width="10"
        mask="AA 99 99 99 A"
        formatChars={{
          9: '[0-9]',
          A: '[A-Za-z]',
        }}
        maskChar=""
        alwaysShowMask={false}
      />
    </div>
  ))
  .add('NHS Number Mask', () => (
    <div className="masked-input-demo">
      <MaskedInput
        name="ni-number"
        hint="Your 10 Digit NHS Number"
        label="NHS Number"
        width="10"
        mask="999 999 9999"
        maskChar=""
        autoComplete="off"
        alwaysShowMask={false}
      />
    </div>
  ));
