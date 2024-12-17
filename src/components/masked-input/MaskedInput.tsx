// import React, { HTMLProps, ReactInstance } from 'react';
import React, { HTMLProps } from 'react';

import { FormElementProps } from './LocalFormTypes';

import { InputWidth } from 'nhsuk-react-components/dist/esm/util/types/NHSUKTypes';

import FormGroup from './LocalFormGroup';

import InputMask, { ReactInputMask } from 'react-input-mask';
// import InputMask from 'react-input-mask';

import classNames from 'classnames';

type InputMaskRef =
  | string
  | ((instance: ReactInputMask | null) => void)
  | React.RefObject<ReactInputMask>
  | null;

type MaskedInputProps = HTMLProps<HTMLInputElement> &
FormElementProps & {
  width?: InputWidth;
  mask: string;
  maskChar?: string;
  formatChars?: { [character: string]: string };
  alwaysShowMask?: boolean;
  inputRef?: (instance: HTMLInputElement | null) => any;
  ref?: InputMaskRef;
};

const MaskedInput: React.FC<MaskedInputProps> = props => (
  <FormGroup<MaskedInputProps> inputType="input" {...props}>
    {({ className, width, error, ref, ...rest }) => (
    // {({ className, width, error, ...rest }:any) => (
      <InputMask
        className={classNames(
          'nhsuk-input',
          { [`nhsuk-input--width-${width}`]: width },
          { 'nhsuk-input--error': error },
          className,
        )}
        {...rest}
      />
    )}
  </FormGroup>
);

MaskedInput.defaultProps = {
  type: 'text',
};

export default MaskedInput;
