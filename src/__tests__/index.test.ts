import * as index from '../index';

describe('Index', () => {
  it('contains all expected elements', () => {
    expect(Object.keys(index)).toEqual([
      'AccordionMenu',
      'HeaderWithLogo',
      'InputMask',
      'RibbonLink',
      'SubNavigation',
      'TabSet',
      'Tag',
      'Timeline',
      'Tooltip',
      'WarningIcon',
    ]);
  });
});
