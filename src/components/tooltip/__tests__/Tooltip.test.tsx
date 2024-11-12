import React from 'react';
// import { mount } from 'enzyme';
import {render} from '@testing-library/react'
import Tooltip from '..';

describe('Tooltip', () => {
  it('Matches Snapshot', () => {
    const component = render(<Tooltip tooltip="Tooltip!">Hover Over Me</Tooltip>);
    expect(component).toMatchSnapshot();
  });

  it('Passes through IDs', () => {
    const componentWithoutId = render(<Tooltip tooltip="Tooltip!">Hover Over Me</Tooltip>);
    const componentWithId = render(
      <Tooltip tooltip="Tooltip!" id="test-id">
        Hover Over Me
      </Tooltip>,
    );

    // 3363 - note - do these need to be more complex???
    expect(componentWithoutId.container.querySelector('#test-id')).toBeNull();
    expect(componentWithoutId.container).toMatchSnapshot();

    expect(componentWithId.container.querySelector('#test-id-tooltip-text')).toBeTruthy();
    expect(componentWithId.container).toMatchSnapshot();

  })

  //   expect(componentWithoutId.find('div').prop('aria-labelledby')).toBe(undefined);
  //   expect(componentWithId.find('div').prop('aria-labelledby')).toBe('test-id-tooltip-text');

  //   expect(componentWithId.find('span').prop('id')).toBe('test-id-tooltip-text');
  //   expect(componentWithoutId.find('span').prop('id')).toBe(undefined);

  //   componentWithId.unmount();
  //   componentWithoutId.unmount();
  // });
});
