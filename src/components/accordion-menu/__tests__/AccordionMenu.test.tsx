import React from 'react';
import {render} from '@testing-library/react'
import AccordionMenu from '..';

describe('AccordionMenu', () => {
  it('matches snapshot', () => {
    const component = render(<AccordionMenu />);
    expect(component).toMatchSnapshot();
  });

  describe('Section', () => {
    it('matches snapshot', () => {
      const component = render(<AccordionMenu.Section heading="TestHeading" />);
      expect(component).toMatchSnapshot();
    });

    it('passes through text', () => {
      const component = render(<AccordionMenu.Section heading="TestHeading" />);
      expect(component.container.textContent).toBe(
        'TestHeading',
      );
    });

    // 3363 - fix this one!
    // it('handles defaultOpen', () => {
    //   const component = render(
    //     <AccordionMenu.Section id="accordion" heading="Heading" defaultOpen />,
    //   );
    //   // const event = {
    //   //   preventDefault: jest.fn(),
    //   // };

    //   console.log(`I am component: ${component.container.querySelector('#accordion')?.textContent}`)
    //   console.log(`I am component 2: ${component.getByText('Heading')}`)
    //   console.log(`I am component 2: ${component.container.querySelector('.nhsuk-accordion-menu__section')?.textContent}`)

    //   expect(component.container.querySelector('#accordion')).toBe(4)

      // component.getByText('Heading').click();
      // component.container.querySelector('.nhsuk-accordion-menu__icon')?.click()
      // expect(event.preventDefault).toHaveBeenCalledTimes(1);

      // expect(component.find('#accordion').getElement().props.open).toBe(true);
      // component.find('summary').simulate('click', event);
      // expect(event.preventDefault).toHaveBeenCalledTimes(1);
      // expect(component.find('#accordion').getElement().props.open).toBe(false);
      // component.find('summary').simulate('click', event);
      // expect(event.preventDefault).toHaveBeenCalledTimes(2);
      // expect(component.find('#accordion').getElement().props.open).toBe(true);
      // component.unmount();
    });

    // it('handles open={true}', () => {
    //   const component = shallow(<AccordionMenu.Section id="accordion" heading="Heading" open />);
    //   const event = {
    //     preventDefault: jest.fn(),
    //   };
    //   expect(component.find('#accordion').getElement().props.open).toBe(true);
    //   component.find('summary').simulate('click', event);
    //   expect(event.preventDefault).toHaveBeenCalledTimes(1);
    //   expect(component.find('#accordion').getElement().props.open).toBe(true);
    //   component.find('summary').simulate('click', event);
    //   expect(event.preventDefault).toHaveBeenCalledTimes(2);
    //   expect(component.find('#accordion').getElement().props.open).toBe(true);
    //   component.unmount();
    // });

    // it('handles open={false}', () => {
    //   const component = shallow(
    //     <AccordionMenu.Section id="accordion" heading="Heading" open={false} />,
    //   );
    //   const event = {
    //     preventDefault: jest.fn(),
    //   };
    //   expect(component.find('#accordion').getElement().props.open).toBe(false);
    //   component.find('summary').simulate('click', event);
    //   expect(event.preventDefault).toHaveBeenCalledTimes(1);
    //   expect(component.find('#accordion').getElement().props.open).toBe(false);
    //   component.find('summary').simulate('click', event);
    //   expect(event.preventDefault).toHaveBeenCalledTimes(2);
    //   expect(component.find('#accordion').getElement().props.open).toBe(false);
    //   component.unmount();
    // });
  });
  describe('Link', () => {
    it('matches snapshot', () => {
      const component = render(<AccordionMenu.Link>Test</AccordionMenu.Link>);
      expect(component).toMatchSnapshot();
      expect(component.container.textContent).toBe('Test');
    });
  });
// });
