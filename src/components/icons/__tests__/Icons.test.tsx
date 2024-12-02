import React from 'react';
import { render } from '@testing-library/react'

import { WarningIcon } from '..';

describe('WarningIcon', () => {
  it('matches snapshot', () => {
    const component = render(<WarningIcon />);
    expect(component).toMatchSnapshot();
  });
});
