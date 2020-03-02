import React from 'react';
import { storiesOf } from '@storybook/react';
import { DateInput } from '../src';

const stories = storiesOf('Date Input Field', module);

stories.add('Standard', () => (
  <DateInput id="date_test" labelHtmlFor="date_test" label="Date Test" hint="For example, 31 3 1980" ></DateInput>
));

stories.add('With Error', () => (
    <DateInput id="date_test" labelHtmlFor="date_test" label="Date Test" hint="For example, 31 3 1980" error="Test Error" ></DateInput>
  ));

  stories.add('With Specific Field Error', () => (
    <DateInput id="date_test" labelHtmlFor="date_test" label="Date Test" hint="For example, 31 3 1980" error="Test Error" >
        <DateInput.Day error={true}/>
        <DateInput.Month/>
        <DateInput.Year error={true}/>
    </DateInput>
  ));