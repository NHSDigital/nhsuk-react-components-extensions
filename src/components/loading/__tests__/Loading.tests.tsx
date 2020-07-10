import Loading from '..';
import React from 'react';
import { shallow } from 'enzyme';

describe('loading', () => {
  it('renders correctly given text', () => {
    const component = shallow(
      <Loading text="I am testing the loading component" />
    );
    expect(component).toMatchSnapshot();
    expect(component.text()).toBe("I am testing the loading component");
    component.unmount();
  });

  it('renders with default text if none supplied', () => {
    const component = shallow(<Loading />);
    expect(component).toMatchSnapshot();
    expect(component.text()).toBe("Loading...");
    component.unmount();
  });

  it('renders without text if false value supplied', () => {
    const component = shallow(<Loading text=""/>);
    expect(component).toMatchSnapshot();
    expect(component.children('p')).toHaveLength(0);
    component.unmount();
  });
});
