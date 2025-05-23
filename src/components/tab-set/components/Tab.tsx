 
import React, { HTMLProps } from 'react';
import classNames from 'classnames';

export type TabProps = HTMLProps<HTMLButtonElement> & {
  active?: boolean;
  empty?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

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
    type={type}
    tabIndex={disabled === true && tabIndex === undefined ? -1 : tabIndex}
    {...rest}
  />
);

Tab.defaultProps = {
  type: 'button',
};

export default Tab;
