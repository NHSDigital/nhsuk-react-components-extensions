/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { HeaderWithLogo } from '../src';

const stories = storiesOf('Header with logo next to nav links', module);

stories
    .add('Standard', () =>(
        <>
        {/* <HeaderWithLogo.Container> */}
        <HeaderWithLogo>
        
        
          <HeaderWithLogo.Logo href="/" />
          <HeaderWithLogo.ServiceName>Your information page</HeaderWithLogo.ServiceName>
          {/* <HeaderWithLogo.Content> */}
            {/* <HeaderWithLogo.Search /> */}
          {/* </HeaderWithLogo.Content> */}
        <HeaderWithLogo.Nav>
        <HeaderWithLogo.NavItem href="/conditions">Health A-Z</HeaderWithLogo.NavItem>
          <HeaderWithLogo.NavItem href="/live-well">Live Well</HeaderWithLogo.NavItem>
          <HeaderWithLogo.NavItem href="/social-care-and-support">Care and support</HeaderWithLogo.NavItem>
          <HeaderWithLogo.NavItem href="/news">Health news</HeaderWithLogo.NavItem>
          <HeaderWithLogo.NavItem href="/service-search">Services near you</HeaderWithLogo.NavItem>
          <HeaderWithLogo.NavItem href="/" home>
            Home
          </HeaderWithLogo.NavItem>
          <HeaderWithLogo.NavDropdownMenu />
        </HeaderWithLogo.Nav>
        
        </HeaderWithLogo>
        {/* </HeaderWithLogo.Container> */}
        </>
    ))