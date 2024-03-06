"use client";

import "app/styles/headerBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import AxoneLogo from "app/components/axoneLogo";
import SocialIcons from "app/components/socialIcons";
import { internalUrls, externalUrls } from "app/lib/navigation/constants";

export default function HeaderBar() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="xl" bg="white">
      <Container>
        <Navbar.Brand href={internalUrls.home}>
          <AxoneLogo width="150" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav className="xl:space-x-10">
            <NavDropdown title="LEARN" className="text-xl font-bold">
              <NavDropdown.Item href={internalUrls.about}>
                About Axone
              </NavDropdown.Item>
              <NavDropdown.Item href={internalUrls.roadmap}>
                Roadmap
              </NavDropdown.Item>
              <NavDropdown.Item href={externalUrls.academy} target="_blank">
                Academy
              </NavDropdown.Item>
              <NavDropdown.Item href={externalUrls.whitepaper} target="_blank">
                Whitepaper
              </NavDropdown.Item>
              <NavDropdown.Item href={externalUrls.blog} target="_blank">
                Blog
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="BUILD" className="text-xl font-bold">
              <NavDropdown.Item href={externalUrls.doc} target="_blank">
                Docs
              </NavDropdown.Item>
              <NavDropdown.Item href={externalUrls.github} target="_blank">
                Github
              </NavDropdown.Item>
              <NavDropdown.Item href={externalUrls.testnet} target="_blank">
                Testnet
              </NavDropdown.Item>
            </NavDropdown>
            <div className="socialIcons flex justify-center">
              <SocialIcons />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
