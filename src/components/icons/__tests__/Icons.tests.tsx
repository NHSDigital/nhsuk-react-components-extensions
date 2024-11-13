import React from 'react';
import { render } from '@testing-library/react'

import { WarningIcon } from '..';

describe('WarningIcon', () => {
  // 3363 - check snapshots
  it('matches snapshot', () => {
    const component = render(<WarningIcon />);
    expect(component).toMatchSnapshot();
  });
});
