import { Hint } from 'nhsuk-react-components';
import React, { HTMLProps } from 'react';

interface FileUploadProps extends HTMLProps<HTMLDivElement> {
  error?: string;
  hint?: string;
  children: React.ReactNode;
}

const FileUpload: React.FC<FileUploadProps> = ({
  error,
  hint,
  children,
  ...rest
}: FileUploadProps) => {
  return (
    <div className={`nhsuk-form-group ${error ? 'nhsuk-form-group--error' : ''}`} {...rest}>
      <label htmlFor="file-upload-label" className="nhsuk-label">
        {children}
      </label>
      {error && (
        <span
          id="file-select-error-id"
          data-test-id="file-select-error"
          className="nhsuk-error-message"
        >
          <span className="nhsuk-visually-hidden">Error: </span>
          {error}
        </span>
      )}
      {hint && <Hint data-test-id="file-hint">{hint}</Hint>}
      <input
        aria-describedby="file-upload-label"
        id="file-upload"
        className="nhsuk-file-upload"
        type="file"
      />
    </div>
  );
};

export default FileUpload;
