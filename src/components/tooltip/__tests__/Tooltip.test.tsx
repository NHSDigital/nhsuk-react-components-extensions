import React from 'react';
import { mount } from 'enzyme';
import Tooltip from '..';

describe('Tooltip', () => {
  it('Matches Snapshot', () => {
    const component = mount(<Tooltip tooltip="Tooltip!">Hover Over Me</Tooltip>);
    expect(component).toMatchSnapshot();
    component.unmount();
  });

  it('Passes through IDs', () => {
    const componentWithoutId = mount(<Tooltip tooltip="Tooltip!">Hover Over Me</Tooltip>);
    const componentWithId = mount(
      <Tooltip tooltip="Tooltip!" id="test-id">
        Hover Over Me
      </Tooltip>,
    );

    expect(componentWithoutId.find('div').prop('aria-labelledby')).toBe(undefined);
    expect(componentWithId.find('div').prop('aria-labelledby')).toBe('test-id-tooltip-text');

    expect(componentWithId.find('span').prop('id')).toBe('test-id-tooltip-text');
    expect(componentWithoutId.find('span').prop('id')).toBe(undefined);

    componentWithId.unmount();
    componentWithoutId.unmount();
  });
});
