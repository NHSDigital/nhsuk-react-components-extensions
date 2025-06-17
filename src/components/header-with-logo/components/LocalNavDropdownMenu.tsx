import React, { FC, HTMLProps } from 'react';
import { ChevronDownIcon } from './LocalChevronDown';
export interface NavDropdownMenuProps extends HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  dropdownText?: string;
}

const NavMenuDropdown: FC<NavDropdownMenuProps> = ({ onClick, dropdownText = 'More', ...rest }) => {

  return (
    <li className="nhsuk-mobile-menu-container">
      <button
        className="nhsuk-header__menu-toggle nhsuk-header__navigation-link "
        {...rest}
      >
        <span className="nhsuk-u-visually-hidden">Browse</span>
        {dropdownText}
        <ChevronDownIcon />
      </button>
    </li>
  );
};

export default NavMenuDropdown;
