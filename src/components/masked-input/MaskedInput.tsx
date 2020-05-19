import React, { HTMLProps } from 'react';
import FormGroup from 'nhsuk-react-components/lib/util/FormGroup';
import { FormElementProps } from 'nhsuk-react-components/lib/util/types/FormTypes';
import { InputWidth } from 'nhsuk-react-components/lib/util/types/NHSUKTypes';
import InputMask, { ReactInputMask } from 'react-input-mask';
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
