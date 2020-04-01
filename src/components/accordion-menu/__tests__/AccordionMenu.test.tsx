import React from 'react';
import { shallow } from 'enzyme';
import AccordionMenu from '..';

describe('AccordionMenu', () => {
  it('matches snapshot', () => {
    const component = shallow(<AccordionMenu />);
    expect(component).toMatchSnapshot();
    component.unmount();
  });
});
