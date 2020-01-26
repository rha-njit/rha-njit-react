import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Switch, Route, Link } from "react-router-dom";
import NavItem from "react-bootstrap/NavItem";
import About from "./aboutUs";
import Home from "./home";

function Menu() {
  return (
    <div>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/home">
            Residence Hall Association
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <NavDropdown title="Foundations" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/about">
                  About Us
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Committees
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  Hall Councils
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Regional Business Conference
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#features">E-Board</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Spoons
              </Nav.Link>
              <Nav.Link href="#deets">Events</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
export default Menu;
