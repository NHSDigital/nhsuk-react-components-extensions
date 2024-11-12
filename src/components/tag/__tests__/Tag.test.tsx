import React from 'react';
// import { shallow } from 'enzyme';
import {render} from '@testing-library/react'
import Tag from '..';

describe('Tag', () => {
  it('matches snapshot', () => {
    // 3363 - check snapshot
    const component = render(<Tag>Tag</Tag>);
    expect(component).toMatchSnapshot();
    expect(component.container.textContent).toBe('Tag');
  });

  it('applies classes', () => {
    const unstyledTag = render(<Tag />);
    const colouredTag = render(<Tag color="aqua-green" />);
    const customTag = render(<Tag color="aqua-green" className="customClassName" />);

    console.log(`I am unstyledTag: ${unstyledTag.container.querySelector('span')?.className}`)

    expect(unstyledTag.container.querySelector('span')?.className).toBe('nhsuk-tag')
    expect(colouredTag.container.querySelector('span')?.className).toBe('nhsuk-tag nhsuk-tag--aqua-green')
    expect(customTag.container.querySelector('span')?.className).toBe('nhsuk-tag nhsuk-tag--aqua-green customClassName')
    // expect(unstyledTag.render().prop('class')).toBe('nhsuk-tag');
    // expect(colouredTag.render().prop('class')).toBe('nhsuk-tag nhsuk-tag--aqua-green');
    // expect(customTag.render().prop('class')).toBe(
    //   'nhsuk-tag nhsuk-tag--aqua-green customClassName',
    // );
  });
});
