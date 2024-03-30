'use client';

import React, { useState } from 'react';
import 'app/styles/headerBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import AxoneLogo from 'app/components/axoneLogo';
import SocialIcons from 'app/components/socialIcons';
import { externalUrls, internalUrls } from 'app/lib/navigation/constants';
import DropdownTitle from './dropdownTitle';

export default function HeaderBar () {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      fixed='top'
      collapseOnSelect
      expand='xl'
      bg='white'
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href={internalUrls.home}>
          <AxoneLogo width='200' />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='responsive-navbar-nav'
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              viewBox='0 0 52.08 52.08'
            >
              <path
                d='M30.05,26.04L50.77,5.32c.54-.54.83-1.25.83-2.01s-.3-1.47-.83-2.01h0c-1.07-1.07-2.94-1.07-4.01,0l-20.72,20.72L5.32,1.31C4.21.2,2.42.2,1.31,1.31.2,2.42.2,4.22,1.31,5.32l20.72,20.72L1.31,46.76c-1.1,1.11-1.1,2.91,0,4.01,1.1,1.1,2.9,1.1,4.01,0l20.72-20.72,20.72,20.72c.55.55,1.28.83,2.01.83s1.45-.28,2.01-.83c1.11-1.11,1.11-2.91,0-4.01l-20.72-20.72Z'
                style={{ fill: '#002131', strokeWidth: '0px' }}
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              viewBox='0 0 59 48.47'
            >
              <path
                d='M3.16,6.32c-1.75,0-3.16-1.42-3.16-3.16h0C0,1.41,1.42,0,3.16,0h52.68c1.74,0,3.16,1.41,3.16,3.16h0c0,1.75-1.42,3.16-3.16,3.16H3.16Z'
                style={{ fill: '#002131', strokeWidth: '0px' }}
              />
              <path
                d='M3.16,27.39c-1.75,0-3.16-1.41-3.16-3.16h0c0-1.75,1.41-3.16,3.16-3.16h52.68c1.74,0,3.16,1.42,3.16,3.16h0c0,1.75-1.42,3.16-3.16,3.16H3.16Z'
                style={{ fill: '#002131', strokeWidth: '0px' }}
              />
              <path
                d='M3.16,48.47c-1.75,0-3.16-1.42-3.16-3.16h0c0-1.74,1.41-3.16,3.16-3.16h52.68c1.75,0,3.16,1.42,3.16,3.16h0c0,1.75-1.42,3.16-3.16,3.16H3.16Z'
                style={{ fill: '#002131', strokeWidth: '0px' }}
              />
            </svg>
          )}
        </Navbar.Toggle>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto' />
          <Nav className='xl:space-x-10'>
            <NavDropdown
              title={<DropdownTitle title='LEARN' />}
              className='text-xl font-bold'
            >
              <NavDropdown.Item href={internalUrls.about}>
                About Axone
              </NavDropdown.Item>
              <NavDropdown.Item href={internalUrls.roadmap}>
                Roadmap
              </NavDropdown.Item>
              <NavDropdown.Item href={externalUrls.academy} target='_blank'>
                Academy
              </NavDropdown.Item>
              <NavDropdown.Item href={externalUrls.whitepaper} target='_blank'>
                Whitepaper
              </NavDropdown.Item>
              <NavDropdown.Item href={externalUrls.blog} target='_blank'>
                Blog
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={<DropdownTitle title='BUILD' />}
              className='text-xl font-bold'
            >
              <NavDropdown.Item href={externalUrls.doc} target='_blank'>
                Docs
              </NavDropdown.Item>
              <NavDropdown.Item href={externalUrls.github} target='_blank'>
                Github
              </NavDropdown.Item>
              <NavDropdown.Item href={externalUrls.testnet} target='_blank'>
                Testnet
              </NavDropdown.Item>
            </NavDropdown>
            <div className='socialIcons flex justify-center'>
              <SocialIcons />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
