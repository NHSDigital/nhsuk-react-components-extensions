import React, { HTMLProps } from 'react';
import classNames from 'classnames';

export interface TabProps extends HTMLProps<HTMLButtonElement> {
  active?: boolean;
  empty?: boolean;
}

const Tab: React.FC<TabProps> = ({
  className,
  active,
  disabled,
  empty,
  type,
  tabIndex,
  ...rest
}) => (
  <button
    className={classNames(
      'nhsuk-tab-set__tab',
      { 'nhsuk-tab-set__tab--active': active },
      { 'nhsuk-tab-set__tab--disabled': disabled },
      { 'nhsuk-tab-set__tab--empty': empty },
      className,
    )}
    type="submit"
    tabIndex={disabled === true && tabIndex === undefined ? -1 : tabIndex}
    {...rest}
  />
);

export default Tab;
