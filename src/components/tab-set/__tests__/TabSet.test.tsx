/* eslint-disable jsx-a11y/label-has-associated-control */
import { mount, shallow } from 'enzyme';
import React from 'react';
import TabSet from '../TabSet';

describe('TabSet', () => {
  it('matches snapshot', () => {
    const component = shallow(
      <TabSet>
        <TabSet.Tab>Overview</TabSet.Tab>
        <TabSet.Tab isActive>Demographics</TabSet.Tab>
        <TabSet.Tab>Clinicals</TabSet.Tab>
        <TabSet.Tab>Documents</TabSet.Tab>
      </TabSet>,
    );
    expect(component).toMatchSnapshot();
    component.unmount();
  });

  it('calls onClick function', () => {
    const onClickFun = jest.fn();
    const wrapper = mount(
      <TabSet>
        <TabSet.Tab onClick={onClickFun} id="the-tab">
          Overview
        </TabSet.Tab>
      </TabSet>,
    );
    wrapper.find('span#the-tab').simulate('click');

    expect(onClickFun).toHaveBeenCalled();

    wrapper.unmount();
  });
});
