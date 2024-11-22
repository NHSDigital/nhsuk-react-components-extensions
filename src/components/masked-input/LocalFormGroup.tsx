'use client';
import React, { ReactNode, useState, useEffect, HTMLProps, useContext } from 'react';
import classNames from 'classnames';
import { HintText } from 'nhsuk-react-components';
import { ErrorMessage } from 'nhsuk-react-components';
// note - this gives SyntaxError: Unexpected token 'export' on yarn build
// clearly isn't being compiled correctly either
// import { generateRandomID } from 'nhsuk-react-components/dist/esm/util/RandomID'
import { generateRandomID } from './LocalRandomID';
import Label from './LocalLabel';
// import { FormElementProps } from '../types/FormTypes/FormTypes';
// this gives 3 errors like Cannot find module '@components/form-elements/error-message/ErrorMessage' or its corresponding type declarations on yarn build
// import { FormElementProps } from 'nhsuk-react-components/dist/esm/util/types/FormTypes';
import { FormElementProps } from './LocalFormTypes';
// this gives SyntaxError: Cannot use import statement outside a module on yarn test// import FieldsetContext from 'nhsuk-react-components/dist/esm/components/form-elements/fieldset/FieldsetContext'
import FieldsetContext, {IFieldsetContext} from './LocalFieldsetContext';
// import { IFieldsetContext } from 'nhsuk-react-components/dist/esm/components/form-elements/fieldset/FieldsetContext';
import { useFormContext } from 'nhsuk-react-components';

type ExcludedProps =
  | 'hint'
  | 'label'
  | 'labelProps'
  | 'hintProps'
  | 'errorProps'
  | 'inputType'
  | 'disableErrorLine';

type BaseFormElementRenderProps = HTMLProps<
  HTMLInputElement | HTMLDivElement | HTMLSelectElement | HTMLTextAreaElement
> & {
  error?: string | boolean;
};

type FormElementRenderProps<T> = Omit<T, ExcludedProps> & {
  id: string;
  name: string;
};

export type FormGroupProps<T> = FormElementProps & {
  children: (props: FormElementRenderProps<T>) => ReactNode;
  inputType: 'input' | 'radios' | 'select' | 'checkboxes' | 'dateinput' | 'textarea';
};

const FormGroup = <T extends BaseFormElementRenderProps>(props: FormGroupProps<T>): JSX.Element => {
  const {
    children,
    hint,
    label,
    id,
    labelProps,
    error,
    hintProps,
    errorProps,
    formGroupProps,
    inputType,
    disableErrorLine,
    name,
    ...rest
  } = props;
  const [generatedID] = useState<string>(generateRandomID(inputType));
  const { isFieldset, registerComponent, passError } =
    useContext<IFieldsetContext>(FieldsetContext);
  const { disableErrorFromComponents } = useFormContext();

  const elementID = id || generatedID;
  const labelID = `${elementID}--label`;
  const errorID = `${elementID}--error-message`;
  const hintID = `${elementID}--hint`;

  const ariaDescribedBy = [
    hint ? hintID : undefined,
    error ? errorID : undefined,
  ].filter(Boolean);

  const childProps = {
    'aria-describedby': ariaDescribedBy.join(' ') || undefined,
    error,
    name: name || elementID,
    id: elementID,
    ...rest,
  } as FormElementRenderProps<T>;

  useEffect(() => {
    if (!isFieldset) return;
    passError(elementID, disableErrorFromComponents ? false : Boolean(error));
    return () => passError(elementID, false);
  }, [elementID, error, isFieldset]);

  useEffect(() => {
    registerComponent(elementID);
    return () => registerComponent(elementID, true);
  }, []);

  const { className: formGroupClassName, ...formGroupRestProps } = formGroupProps || {};

  return (
    <div
      className={classNames(
        'nhsuk-form-group',
        {
          'nhsuk-form-group--error': !disableErrorFromComponents && !disableErrorLine && error,
        },
        formGroupClassName,
      )}
      {...formGroupRestProps}
    >
      {label ? (
        <Label id={labelID} htmlFor={elementID} {...labelProps}>
          {label}
        </Label>
      ) : null}
      {hint ? (
        <HintText id={hintID} {...hintProps}>
          {hint}
        </HintText>
      ) : null}
      {error && typeof error === 'string' ? (
        <ErrorMessage id={errorID} {...errorProps}>
          {error}
        </ErrorMessage>
      ) : null}
      {children(childProps)}
    </div>
  );
};

export default FormGroup;
