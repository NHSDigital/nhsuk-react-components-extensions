import { HTMLProps } from 'react';
import { ErrorMessageProps } from 'nhsuk-react-components/dist/esm/components/form-elements/error-message/ErrorMessage';
import { HintTextProps } from 'nhsuk-react-components/dist/esm/components/form-elements/hint-text/HintText';
import { LabelProps } from './LocalLabel';
export interface FormElementProps {
    label?: string;
    labelProps?: LabelProps;
    error?: string | boolean;
    errorProps?: ErrorMessageProps;
    hint?: string;
    hintProps?: HintTextProps;
    formGroupProps?: HTMLProps<HTMLDivElement>;
    disableErrorLine?: boolean;
    id?: string;
    name?: string;
}