import React from 'react';
import { shallow } from 'enzyme';
import FileUpload from '../FileUpload';

describe('FileUpload', () => {
  it('Matches snapshot', () => {
    const component = shallow(<FileUpload>Upload</FileUpload>);
    expect(component).toMatchSnapshot();
    component.unmount();
  });
  it('With Error', () => {
    const component = shallow(<FileUpload error="something wrong">Upload</FileUpload>);
    expect(component).toMatchSnapshot();
    component.unmount();
  });
  it('With Hint', () => {
    const component = shallow(<FileUpload hint="Format: JPG">Upload</FileUpload>);
    expect(component).toMatchSnapshot();
    component.unmount();
  });
});
