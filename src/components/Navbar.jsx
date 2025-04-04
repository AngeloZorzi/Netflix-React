import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Dropdown, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">Netflix</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            {["Home", "TV Shows", "Movies", "Recently Added", "My List"].map(
              (item, index) => (
                <Nav.Link key={index} href="#" className="text-white">
                  {item}
                </Nav.Link>
              )
            )}
          </Nav>
          <div className="d-flex align-items-center">
            <Nav.Link href="#" className="text-white me-3">
              <i className="bi bi-search"></i>
            </Nav.Link>
            <Nav.Link href="#" className="text-white me-3">
              Kids
            </Nav.Link>
            <Nav.Link href="#" className="text-white me-3">
              <i className="bi bi-bell"></i>
            </Nav.Link>
            <Dropdown align="end">
              <Dropdown.Toggle
                as={Button}
                variant="dark"
                className="p-0 border-0"
              >
                Avatar
              </Dropdown.Toggle>
              <Dropdown.Menu variant="dark">
                {["Profilo", "Impostazioni", "Esci"].map((item, index) => (
                  <Dropdown.Item key={index} href="#">
                    {item}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
