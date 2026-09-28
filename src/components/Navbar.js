import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap';
import '../styles/Navbar.css';
import { TbBadgeVr } from "react-icons/tb";


function Navbar() {
  return (
    <BsNavbar bg="light" expand="md" fixed="top" className="shadow-sm">
          <div className ="icon"><TbBadgeVr size={40}  /></div>
      <Container className="justify-content-center">
        {/* Accessible mobile toggle button */}
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" className="bg-light ms-auto me-2 my-1" />

        {/* Collapsible menu links */}
        <BsNavbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="text-center">
           
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">Services</Nav.Link>
            <Nav.Link as={Link} to="/projects">Our Work</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;