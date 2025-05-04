import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from './asset/f9.jpg';

function Header({ openInterestForm }) {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold d-flex align-items-center">
          <img
            src={logo}
            alt="Amopa Furniture Store Logo"
            style={{ height: '40px', marginRight: '10px', borderRadius: '50%' }}
          />
          AMOPA Furniture Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            {/* <Nav.Link as={NavLink} to="/">
              Products
            </Nav.Link> */}
            <Nav.Link as={NavLink} to="/product-gallery">
              Product Gallery
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
