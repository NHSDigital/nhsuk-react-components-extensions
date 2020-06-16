import React from 'react';
import { shallow } from 'enzyme';
import RibbonLink from '..';

describe('RibbonLink', () => {
  it('matches snapshot', () => {
    const coolRibbon = shallow(<RibbonLink flavour="cool">Cool</RibbonLink>);
    const mildRibbon = shallow(<RibbonLink flavour="mild">Mild</RibbonLink>);
    const hotRibbon = shallow(<RibbonLink flavour="hot">Hot</RibbonLink>);

    expect(coolRibbon.prop('className')).toBe('nhsuk-ribbon-link nhsuk-ribbon-link--cool');
    expect(mildRibbon.prop('className')).toBe('nhsuk-ribbon-link nhsuk-ribbon-link--mild');
    expect(hotRibbon.prop('className')).toBe('nhsuk-ribbon-link nhsuk-ribbon-link--hot');

    expect(coolRibbon).toMatchSnapshot();
    expect(mildRibbon).toMatchSnapshot();
    expect(hotRibbon).toMatchSnapshot();

    coolRibbon.unmount();
    mildRibbon.unmount();
    hotRibbon.unmount();
  });

  describe('RibbonLink.Bar', () => {
    it('matches snapshot', () => {
      const bar = shallow(<RibbonLink.Bar />);
      expect(bar).toMatchSnapshot();
      bar.unmount();
    });
  });
});
