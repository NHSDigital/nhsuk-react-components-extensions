// this was copied and edited from nhsuk-react-components
// the original did not work 

'use client';
import React, { FC, HTMLProps, useContext, useState, useEffect, useMemo } from 'react';
import classNames from 'classnames';
import NHSLogo, {NHSLogoNavProps}from './LocalNHSLogo';
import OrganisationalLogo, { OrganisationalLogoProps }  from './LocalOrganisationalLogo'; 
import HeaderContext, { IHeaderContext } from './LocalHeaderContext'
import Search from 'nhsuk-react-components';
import Nav from 'nhsuk-react-components';
import NavItem from 'nhsuk-react-components';
import NavDropdownMenu from 'nhsuk-react-components';
import { Container } from 'nhsuk-react-components';
import Content from 'nhsuk-react-components';
import TransactionalServiceName from 'nhsuk-react-components';
import HeaderJs from './header';

const BaseHeaderLogo: FC<OrganisationalLogoProps & NHSLogoNavProps> = (props) => {
  const { orgName } = useContext<IHeaderContext>(HeaderContext);
  if (orgName) {
    return <OrganisationalLogo {...props} />;
  }
  return <NHSLogo {...props} />;
};

export const HeaderContainer: FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <Container className={classNames('nhsuk-header__container', className)} {...rest} />
);

interface HeaderProps extends HTMLProps<HTMLDivElement> {
  transactional?: boolean;
  orgName?: string;
  orgSplit?: string;
  orgDescriptor?: string;
  serviceName?: string;
  white?: boolean;
}

export const HeaderWithLogo = ({
  className,
  children,
  transactional,
  orgName,
  orgSplit,
  orgDescriptor,
  role = 'banner',
  serviceName,
  white,
  ...rest
}: HeaderProps) => {
  const [hasMenuToggle, setHasMenuToggle] = useState(false);
  const [hasSearch, setHasSearch] = useState(false);
  const [hasServiceName, setHasServiceName] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  console.log(`I am coming from nhusk-react-components-extensions`)

  useEffect(() => {
    HeaderJs();
  }, []);

  const setMenuToggle = (toggle: boolean): void => {
    setHasMenuToggle(toggle);
  };

  const setSearch = (toggle: boolean): void => {
    setHasSearch(toggle);
  };

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  const setServiceName = (toggle: boolean): void => {
    setHasServiceName(toggle);
  };

  const contextValue: IHeaderContext = useMemo(() => {
    return {
      orgName,
      orgSplit,
      orgDescriptor,
      serviceName,
      hasSearch,
      hasMenuToggle,
      hasServiceName,
      setMenuToggle,
      setSearch,
      setServiceName,
      toggleMenu,
      menuOpen,
      transactional: transactional ?? false,
    };
  }, [
    orgName,
    orgSplit,
    orgDescriptor,
    serviceName,
    hasSearch,
    hasMenuToggle,
    hasServiceName,
    setMenuToggle,
    setSearch,
    setServiceName,
    toggleMenu,
    menuOpen,
    transactional,
  ]);

  return (
    <header
      className={classNames(
        'nhsuk-header',
        { 'nhsuk-header__transactional': transactional },
        { 'nhsuk-header--organisation': orgName },
        { 'nhsuk-header--white': white },
        className,
      )}
      role={role}
      {...rest}
    >
      <HeaderContext.Provider value={contextValue}>{children}</HeaderContext.Provider>
    </header>
  );
};

HeaderWithLogo.Logo = BaseHeaderLogo;
HeaderWithLogo.Search = Search;
HeaderWithLogo.Nav = Nav;
HeaderWithLogo.NavItem = NavItem;
HeaderWithLogo.NavDropdownMenu = NavDropdownMenu;
HeaderWithLogo.Container = HeaderContainer;
HeaderWithLogo.Content = Content;
HeaderWithLogo.ServiceName = TransactionalServiceName;

export default HeaderWithLogo;
