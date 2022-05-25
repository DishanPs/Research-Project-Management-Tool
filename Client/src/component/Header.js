import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#dashboard">Dashboard</Nav.Link>
              <Nav.Link href="#submission">Submission</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2}>
                {token != null ? (
                  <Link to="#profile">{token.name}</Link>
                ) : (
                  <Link
                    to="#login"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Login
                  </Link>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
