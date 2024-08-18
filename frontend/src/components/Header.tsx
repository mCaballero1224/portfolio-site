/* React */
import React from 'react'
import { Link } from 'react-router-dom'
/* Bootstrap */
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import NaviBrand from './NaviBrand'

export default function Header() {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to={`/`}>
            <NaviBrand />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={`/about`}>About</Nav.Link>
              <Nav.Link as={Link} to={`/projects`}>Projects</Nav.Link>
              <Nav.Link as={Link} to={`/contact`}>Contact</Nav.Link>
              <Nav.Link as={Link} to={`/blog`}>Blog</Nav.Link>
              <Nav.Link as={Link} to={`/todo`}>Todo</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
