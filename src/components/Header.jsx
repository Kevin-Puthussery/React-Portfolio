import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'


function Header() {
  return (
    <>
     <Navbar
      expand="lg"
      bg="light"
      variant="light"
      fixed="top"
      className="shadow-sm py-3"
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand
          href="#home"
          className="fw-bold text-primary fs-4"
          style={{ letterSpacing: "1px" }}
        >
          Kevin Puthussery
        </Navbar.Brand>

        {/* Toggler for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigation links */}
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="mx-2 fw-medium nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="mx-2 fw-medium nav-link-custom">
              About
            </Nav.Link>
            <Nav.Link href="#skills" className="mx-2 fw-medium nav-link-custom">
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" className="mx-2 fw-medium nav-link-custom">
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" className="mx-2 fw-medium nav-link-custom">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Custom styles */}
      <style>
        {`
          .nav-link-custom {
            position: relative;
            transition: color 0.3s ease-in-out;
          }
          .nav-link-custom:hover {
            color: #0d6efd; /* Bootstrap primary */
          }
          .nav-link-custom::after {
            content: '';
            position: absolute;
            width: 0%;
            height: 2px;
            bottom: -4px;
            left: 0;
            background-color: #0d6efd;
            transition: width 0.3s;
          }
          .nav-link-custom:hover::after {
            width: 100%;
          }
        `}
      </style>
    </Navbar>
    </>
  )
}

export default Header
