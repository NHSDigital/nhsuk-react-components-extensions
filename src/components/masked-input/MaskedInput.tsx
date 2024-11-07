import React, { HTMLProps } from 'react';
// note to self - removing this and just having 'nhsuk-react-components' leads to error
// "JSX element type 'FormGroup' does not have any construct or call signatures"
// import FormGroup from 'nhsuk-react-components/dist/esm/util/FormGroup';
// import { FormElementProps } from 'nhsuk-react-components/dist/esm/util/types/FormTypes';
// import { InputWidth } from 'nhsuk-react-components/dist/esm/util/types/NHSUKTypes';
import FormGroup from 'nhsuk-react-components/dist/lib/util/FormGroup';
import { FormElementProps } from 'nhsuk-react-components/dist/lib/util/types/FormTypes';
import { InputWidth } from 'nhsuk-react-components/dist/lib/util/types/NHSUKTypes';
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

// const myFormGroup = ()=>{
//   return(
//     <FormGroup/>
//   )
// }

// const MaskedInput: React.FC<MaskedInputProps> = (props) => (
//   <FormGroup<MaskedInputProps> inputType="input" {...props}>
//     {({ className, width, error, ref, ...rest }:any) => {
//       return(
//       <InputMask
//         className={classNames(
//           'nhsuk-input',
//           { [`nhsuk-input--width-${width}`]: width },
//           { 'nhsuk-input--error': error },
//           className,
//         )}
//         {...rest}
//       />
//     )}}
//   </FormGroup>
// );

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
