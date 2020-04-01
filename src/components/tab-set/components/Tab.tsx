import React, { HTMLProps } from 'react';
import classNames from 'classnames';

export interface TabProps extends HTMLProps<HTMLDivElement> {
  active?: boolean;
  empty?: boolean;
}

const Tab: React.FC<TabProps> = ({ className, active, disabled, empty, ...rest }) => (
  <div
    className={classNames(
      'nhsuk-tab-set__tab',
      { 'nhsuk-tab-set__tab--active': active },
      { 'nhsuk-tab-set__tab--disabled': disabled },
      { 'nhsuk-tab-set__tab--empty': empty },
    )}
    {...rest}
  />
);

export default Tab;
