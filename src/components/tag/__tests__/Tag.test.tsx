import React from 'react';
import { shallow } from 'enzyme';
import Tag from '..';

describe('Tag', () => {
  it('matches snapshot', () => {
    const component = shallow(<Tag>Tag</Tag>);
    expect(component).toMatchSnapshot();
    expect(component.text()).toBe('Tag');
    component.unmount();
  });

  it('applies classes', () => {
    const unstyledTag = shallow(<Tag />);
    const colouredTag = shallow(<Tag color="aqua-green" />);
    const customTag = shallow(<Tag color="aqua-green" className="customClassName" />);

    expect(unstyledTag.render().prop('class')).toBe('nhsuk-tag');
    expect(colouredTag.render().prop('class')).toBe('nhsuk-tag nhsuk-tag--aqua-green');
    expect(customTag.render().prop('class')).toBe(
      'nhsuk-tag nhsuk-tag--aqua-green customClassName',
    );
    unstyledTag.unmount();
    colouredTag.unmount();
    customTag.unmount();
  });
});
