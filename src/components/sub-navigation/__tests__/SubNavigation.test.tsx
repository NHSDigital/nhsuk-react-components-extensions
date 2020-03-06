import { shallow } from 'enzyme';
import React from 'react';
import SubNavigation from '../SubNavigation';

describe('SubNavigation', () => {
  it('matches snapshot', () => {
    const component = shallow(<SubNavigation />);
    expect(component).toMatchSnapshot();
    component.unmount();
  });

  it('should have correct classes applied', () => {
    const component = shallow(<SubNavigation />);
    const unorderedList = component.find('.nhsuk-sub-navigation__list');

    expect(component.hasClass('nhsuk-sub-navigation')).toBeTruthy();
    expect(unorderedList.exists()).toBeTruthy();

    component.unmount();
  });

  describe('SubNavigationItem', () => {
    it('matches snapshot', () => {
      const component = shallow(<SubNavigation.Item href="#">Hello world</SubNavigation.Item>);
      expect(component).toMatchSnapshot();
      component.unmount();
    });

    it('should have the correct classes applied', () => {
      const component = shallow(<SubNavigation.Item href="#">Hello world</SubNavigation.Item>);

      expect(component.hasClass('nhsuk-sub-navigation__item')).toBeTruthy();

      component.unmount();
    });

    it('passes inner text correctly', () => {
      const component = shallow(
        <SubNavigation.Item href="https://nhs.uk">Hello world</SubNavigation.Item>,
      );
      expect(component.text()).toBe('Hello world');
      component.unmount();
    });
  });
});
