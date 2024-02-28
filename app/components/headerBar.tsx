"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { internalUrls, externalUrls } from "app/lib/navigation/constants";
import AxoneLogo from "public/images/axone-logo.svg";

export default function HeaderBar() {
  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="sm"
      bg="light"
      data-bs-theme="light"
    >
      <Container fluid>
        <Navbar.Brand href={internalUrls.home}>
          <Image src={AxoneLogo} priority width="150" alt="Axone logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            <NavDropdown title="LEARN" className="fw-bold">
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
            <NavDropdown title="BUILD" className="fw-bold">
              <NavDropdown.Item href={externalUrls.doc}>DOCS</NavDropdown.Item>
              <NavDropdown.Item href={externalUrls.github}>
                GITHUB
              </NavDropdown.Item>
              <NavDropdown.Item href={externalUrls.testnet}>
                TESTNET
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href={externalUrls.discord} className="fw-bold">
              D
            </Nav.Link>
            <Nav.Link href={externalUrls.github} className="fw-bold">
              G
            </Nav.Link>
            <Nav.Link href={externalUrls.blog} className="fw-bold">
              M
            </Nav.Link>
            <Nav.Link href={externalUrls.telegram} className="fw-bold">
              T
            </Nav.Link>
            <Nav.Link href={externalUrls.x} className="fw-bold">
              X
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
