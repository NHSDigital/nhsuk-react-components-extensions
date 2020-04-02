import React from 'react';
import { shallow } from 'enzyme';
import { WarningIcon } from '..';

describe('WarningIcon', () => {
  it('matches snapshot', () => {
    const component = shallow(<WarningIcon />);
    expect(component).toMatchSnapshot();
    component.unmount();
  });
});
