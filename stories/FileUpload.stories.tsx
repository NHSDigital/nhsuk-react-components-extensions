/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { FileUpload } from '../src';

const stories = storiesOf('File Upload', module);

stories
  .add('Standard', () => (
    <div className="fileupload-demo">
      <FileUpload>Upload a file</FileUpload>
    </div>
  ))
  .add('With Error', () => (
    <div className="fileupload-demo">
      <FileUpload error="Invalid file type">Upload a file</FileUpload>
    </div>
  ))
  .add('With Hint', () => (
    <div className="fileupload-demo">
      <FileUpload hint="Maximum file size 2GB">Upload a File</FileUpload>
    </div>
  ));
