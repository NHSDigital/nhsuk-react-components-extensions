import * as index from '../index';

describe('Index', () => {
  it('contains all expected elements', () => {
    expect(Object.keys(index)).toEqual([
      'AccordionMenu',
      'MaskedInput',
      'FormGroup',
      'Label',
      'getRandomString',
      'generateRandomID',
      'generateRandomName',
      'FieldsetContext',
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
