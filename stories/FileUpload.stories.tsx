/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { FileUpload } from '../src';
const stories = storiesOf('File Upload', module);

stories
  .add('Standard', () => <FileUpload>Upload a file</FileUpload>)
  .add('With Error', () => <FileUpload error="Invalid file type">Upload a file</FileUpload>);
