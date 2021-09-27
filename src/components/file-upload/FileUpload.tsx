import classNames from 'classnames';
import { ErrorMessage, Hint, Label } from 'nhsuk-react-components';
import React, { HTMLProps } from 'react';

interface FileUploadProps extends HTMLProps<HTMLDivElement> {
  error?: string;
  hint?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ error, hint, children, id, ...rest }) => {
  return (
    <div className={classNames('nhsuk-form-group', { 'nhsuk-form-group--error': error })} {...rest}>
      <Label htmlFor={id}>{children}</Label>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {hint && <Hint>{hint}</Hint>}
      <input aria-describedby={id} id="file-upload" className="nhsuk-file-upload" type="file" />
    </div>
  );
};

export default FileUpload;
