import React from 'react';
import { mount, shallow } from 'enzyme';
import FileUpload from '../FileUpload';

describe('FileUpload', () => {
  it('Matches snapshot', () => {
    const component = shallow(<FileUpload>Upload</FileUpload>);
    expect(component).toMatchSnapshot();
    component.unmount();
  });
  it('With Error', () => {
    const component = mount(<FileUpload error="something wrong">Upload</FileUpload>);
    expect(component).toMatchSnapshot();

    const renderedComponent = component.render();
    expect(renderedComponent.find('span').prop('class')).toBe('nhsuk-error-message');

    component.unmount();
  });
  it('With Hint', () => {
    const component = mount(<FileUpload hint="Format: JPG">Upload</FileUpload>);
    expect(component).toMatchSnapshot();

    const renderedComponent = component.render();
    expect(renderedComponent.find('span').prop('class')).toBe('nhsuk-hint');
    component.unmount();
  });
});
