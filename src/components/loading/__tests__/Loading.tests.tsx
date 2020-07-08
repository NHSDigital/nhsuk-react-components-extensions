import Loading from '..';
import React from 'react';
import { shallow } from 'enzyme';

describe('loading', () => {
  it('renders correctly given text', () => {
    const component = shallow(
      <Loading text="I am testing the loading component" />
    );
    expect(component).toMatchSnapshot();
  });

  it('renders with default text if none supplied', () => {
    const component = shallow(<Loading />);
    expect(component).toMatchSnapshot();
  });
});
