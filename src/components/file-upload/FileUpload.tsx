import { Hint } from 'nhsuk-react-components';
import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactChild;
  error?: string;
  hint?: string;
}

function FileUpload({ error, hint, children, ...rest }: Props) {
  return (
    <>
      <div className={`nhsuk-form-group ${error ? 'nhsuk-form-group--error' : ''}`} {...rest}>
        <label htmlFor="file-select-input-id" className="nhsuk-label">
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
          aria-describedby="file-select-label"
          id="file-select-input-id"
          data-test-id="file-select-input"
          className="nhsuk-file-upload"
          name="file-select-input"
          type="file"
          title="file select input"
        />
      </div>
    </>
  );
}

export default FileUpload;
