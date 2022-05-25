import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/Logo.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Project Managenet Tool Logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="/">Research Project Management Tool</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#submissions">Submissions</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
