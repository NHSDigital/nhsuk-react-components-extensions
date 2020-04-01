import React from 'react';
import { mount } from 'enzyme';
import MaskedInput from '../MaskedInput';

describe('MaskedInput', () => {
  it('matches snapshot', () => {
    const component = mount(<MaskedInput mask="999 999 9999">NHS Number</MaskedInput>);
    expect(component).toMatchSnapshot();
    expect(component.text()).toBe('NHS Number');
    component.unmount();
  });
});
