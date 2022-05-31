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
            {token != null ? (
              <Nav className="me-auto">
                {token.type == "Admin" ? (
                  <Nav.Link href="/Adminstudentview">Dashboard</Nav.Link>
                ) : token.type == "Student" ? (
                  <>
                    <Nav.Link href="/viewgroupsstd">Dashboard</Nav.Link>
                    <Nav.Link href="/sublinks">Submission</Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link href="/supstaff">
                      Supervisor/ Co-Supervisor Dashboard
                    </Nav.Link>
                    <Nav.Link href="/viewtopics">Panel Dashboard</Nav.Link>
                  </>
                )}
                <Nav.Link href="/about">About</Nav.Link>
              </Nav>
            ) : (
              <Nav className="me-auto">
                <Nav.Link href="/about">About</Nav.Link>
              </Nav>
            )}
            <Nav>
              <Nav.Link eventKey={2}>
                {token != null ? (
                  <Link
                    to="/Userprofile"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {token.email}
                  </Link>
                ) : (
                  <Link
                    to="/Userlogin"
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
