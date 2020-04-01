import React from 'react';
import { shallow } from 'enzyme';
import AccordionMenu from '..';

describe('AccordionMenu', () => {
  it('matches snapshot', () => {
    const component = shallow(<AccordionMenu />);
    expect(component).toMatchSnapshot();
    component.unmount();
  });

  describe('Section', () => {
    it('matches snapshot', () => {
      const component = shallow(<AccordionMenu.Section heading="TestHeading" />);
      expect(component).toMatchSnapshot();
      component.unmount();
    });

    it('passes through text', () => {
      const component = shallow(<AccordionMenu.Section heading="TestHeading" />);
      expect(component.find('.nhsuk-accordion-menu__section-summary-text').text()).toBe(
        'TestHeading',
      );
      component.unmount();
    });

    it('handles defaultOpen', () => {
      const component = shallow(
        <AccordionMenu.Section id="accordion" heading="Heading" defaultOpen />,
      );
      const event = {
        preventDefault: jest.fn(),
      };

      expect(component.find('#accordion').getElement().props.open).toBe(true);
      component.find('summary').simulate('click', event);
      expect(event.preventDefault).toHaveBeenCalledTimes(1);
      expect(component.find('#accordion').getElement().props.open).toBe(false);
      component.find('summary').simulate('click', event);
      expect(event.preventDefault).toHaveBeenCalledTimes(2);
      expect(component.find('#accordion').getElement().props.open).toBe(true);
      component.unmount();
    });
    it('handles open={true}', () => {
      const component = shallow(<AccordionMenu.Section id="accordion" heading="Heading" open />);
      const event = {
        preventDefault: jest.fn(),
      };
      expect(component.find('#accordion').getElement().props.open).toBe(true);
      component.find('summary').simulate('click', event);
      expect(event.preventDefault).toHaveBeenCalledTimes(1);
      expect(component.find('#accordion').getElement().props.open).toBe(true);
      component.find('summary').simulate('click', event);
      expect(event.preventDefault).toHaveBeenCalledTimes(2);
      expect(component.find('#accordion').getElement().props.open).toBe(true);
      component.unmount();
    });

    it('handles open={false}', () => {
      const component = shallow(
        <AccordionMenu.Section id="accordion" heading="Heading" open={false} />,
      );
      const event = {
        preventDefault: jest.fn(),
      };
      expect(component.find('#accordion').getElement().props.open).toBe(false);
      component.find('summary').simulate('click', event);
      expect(event.preventDefault).toHaveBeenCalledTimes(1);
      expect(component.find('#accordion').getElement().props.open).toBe(false);
      component.find('summary').simulate('click', event);
      expect(event.preventDefault).toHaveBeenCalledTimes(2);
      expect(component.find('#accordion').getElement().props.open).toBe(false);
      component.unmount();
    });
  });
  describe('Link', () => {
    it('matches snapshot', () => {
      const component = shallow(<AccordionMenu.Link>Test</AccordionMenu.Link>);
      expect(component).toMatchSnapshot();
      expect(component.text()).toBe('Test');
      component.unmount();
    });
  });
});
