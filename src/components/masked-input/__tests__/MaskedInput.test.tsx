import React from 'react';
import { render } from '@testing-library/react'
import MaskedInput from '../MaskedInput';

describe('MaskedInput', () => {
  it('matches snapshot', () => {
    const component = render(
      <MaskedInput mask="999 999 9999" name="maskedInput" id="maskedInput" label="NHS Number" />,
    );
    expect(component).toMatchSnapshot();
    expect(component.container.textContent).toBe('NHS Number');
  });
});
