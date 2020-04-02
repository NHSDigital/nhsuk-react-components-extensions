import React, { HTMLProps, useState, useEffect, RefObject } from 'react';
import { useFormContext, Label, ErrorMessage, Hint } from 'nhsuk-react-components';
import InputMask, { ReactInputMask } from 'react-input-mask';
import classNames from 'classnames';

type MaskedInputProps = HTMLProps<HTMLInputElement> & {
  labelProps?: HTMLProps<HTMLLabelElement>;
  hint?: string;
  error?: boolean | string;
  width?: '2' | '3' | '4' | '5' | '10';
  mask: string;
  maskChar?: string;
  formatChars?: { [character: string]: string };
  alwaysShowMask?: boolean;
  inputRef?: (instance: HTMLInputElement | null) => any;
  ref?: string | ((instance: ReactInputMask | null) => void) | RefObject<ReactInputMask> | null;
};

const MaskedInput: React.FC<MaskedInputProps> = ({
  className,
  children,
  id,
  labelProps,
  hint,
  width,
  error,
  ...rest
}) => {
  const { isForm, setError } = useFormContext();
  const [name] = useState<string>(
    rest.name || `masked-input_${(Math.random() + 1).toString(36).substring(2, 7)}`,
  );

  useEffect(() => {
    if (isForm) {
      setError(name, Boolean(error));
    }
  }, [error, name, isForm]);

  return (
    <>
      {children ? (
        <Label
          className={labelProps ? labelProps.className : undefined}
          htmlFor={id}
          id={id ? `${id}-label` : undefined}
        >
          {children}
        </Label>
      ) : null}
      {hint ? <Hint id={id ? `${id}-hint` : undefined}>{hint}</Hint> : null}
      {error && typeof error === 'string' ? (
        <ErrorMessage id={id ? `${id}-error` : undefined}>{error}</ErrorMessage>
      ) : null}
      <InputMask
        className={classNames(
          'nhsuk-input',
          { [`nhsuk-input--width-${width}`]: width },
          { 'nhsuk-input--error': error },
          className,
        )}
        aria-describedby={children && id ? `${id}-label` : undefined}
        {...rest}
      />
    </>
  );
};

MaskedInput.defaultProps = {
  type: 'text',
};

export default MaskedInput;
