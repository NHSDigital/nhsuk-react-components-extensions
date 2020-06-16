import React from 'react';
import { shallow, mount } from 'enzyme';
import TabSet from '..';

describe('TabSet', () => {
  it('matches snapshot', () => {
    const component = shallow(<TabSet />);
    expect(component).toMatchSnapshot();
    component.unmount();
  });

  describe('Tab', () => {
    it('matches snapshot', () => {
      const component = shallow(<TabSet.Tab />);
      expect(component).toMatchSnapshot();
      component.unmount();
    });

    it('applies correct classes', () => {
      const component = mount(
        <TabSet>
          <TabSet.Tab id="normal">Text</TabSet.Tab>
          <TabSet.Tab id="disabled" disabled>
            Disabled
          </TabSet.Tab>
          <TabSet.Tab id="active" active>
            Active
          </TabSet.Tab>
          <TabSet.Tab id="empty" empty>
            Empty
          </TabSet.Tab>
        </TabSet>,
      );

      const renderedComponent = component.render();
      expect(renderedComponent.find('#normal').prop('class')).toBe('nhsuk-tab-set__tab');
      expect(renderedComponent.find('#disabled').prop('class')).toBe(
        'nhsuk-tab-set__tab nhsuk-tab-set__tab--disabled',
      );
      expect(renderedComponent.find('#active').prop('class')).toBe(
        'nhsuk-tab-set__tab nhsuk-tab-set__tab--active',
      );
      expect(renderedComponent.find('#empty').prop('class')).toBe(
        'nhsuk-tab-set__tab nhsuk-tab-set__tab--empty',
      );

      component.unmount();
    });
  });
});
