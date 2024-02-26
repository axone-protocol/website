"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
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
        <Navbar.Brand>
          <Image src={AxoneLogo} priority width="150" alt="Axone logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            <NavDropdown title="LEARN" className="fw-bold">
              <NavDropdown.Item href="">About Axone</NavDropdown.Item>
              <NavDropdown.Item href="">Roadmap</NavDropdown.Item>
              <NavDropdown.Item href="https://docs.okp4.network/academy/overview">
                Academy
              </NavDropdown.Item>
              <NavDropdown.Item href="https://docs.okp4.network/whitepaper/abstract">
                Whitepaper
              </NavDropdown.Item>
              <NavDropdown.Item href="https://blog.okp4.network/">
                Blog
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="BUILD" className="fw-bold">
              <NavDropdown.Item href="https://docs.okp4.network/technical-documentation/overview">
                DOCS
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/okp4/">
                GITHUB
              </NavDropdown.Item>
              <NavDropdown.Item href="https://explore.okp4.network/OKP4%20Drunemeton%20testnet">
                TESTNET
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              href="https://discord.com/invite/okp4"
              className="fw-bold"
            >
              D
            </Nav.Link>
            <Nav.Link href="https://github.com/okp4/" className="fw-bold">
              G
            </Nav.Link>
            <Nav.Link href="https://blog.okp4.network/" className="fw-bold">
              M
            </Nav.Link>
            <Nav.Link href="https://t.me/okp4network" className="fw-bold">
              T
            </Nav.Link>
            <Nav.Link
              href="https://twitter.com/OKP4_Protocol"
              className="fw-bold"
            >
              X
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
