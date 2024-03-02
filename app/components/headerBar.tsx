"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import AxoneLogo from "app/components/axoneLogo";
import SocialIcons from "app/components/socialIcons";
import { internalUrls, externalUrls } from "app/lib/navigation/constants";

export default function HeaderBar() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="sm" bg="white">
      <Container>
        <Navbar.Brand href={internalUrls.home}>
          <AxoneLogo width="150" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav className="sm:space-x-5 md:space-x-10">
            <NavDropdown title="LEARN" className="text-xl font-bold">
              <NavDropdown.Item href={internalUrls.about}>
                About Axone
              </NavDropdown.Item>
              <NavDropdown.Item href={internalUrls.roadmap}>
                Roadmap
              </NavDropdown.Item>
              <NavDropdown.Item href={externalUrls.academy}>
                Academy
              </NavDropdown.Item>
              <NavDropdown.Item href={externalUrls.whitepaper}>
                Whitepaper
              </NavDropdown.Item>
              <NavDropdown.Item href={externalUrls.blog}>Blog</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="BUILD" className="text-xl font-bold">
              <NavDropdown.Item href={externalUrls.doc}>Docs</NavDropdown.Item>
              <NavDropdown.Item href={externalUrls.github}>
                Github
              </NavDropdown.Item>
              <NavDropdown.Item href={externalUrls.testnet}>
                Testnet
              </NavDropdown.Item>
            </NavDropdown>
            <SocialIcons />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
