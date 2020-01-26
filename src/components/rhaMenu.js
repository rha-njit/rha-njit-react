import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Switch, Route, Link } from "react-router-dom";
import About from "./aboutUs";
import Home from "./home";
import Eboard from "./eboard";
import Committees from "./committees";
import HallCouncils from "./hallCouncils";
import Docs from './doc';

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
                <NavDropdown.Item as={Link} to="/committees">
                  Committees
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/hallCouncils">
                  Hall Councils
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/docs">
                  Documents/Forms
                </NavDropdown.Item>
                <NavDropdown.Item href="https://njit.campuslabs.com/engage/organization/rha">
                  Regional Business Conference
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/eboard">E-Board</Nav.Link>
              <Nav.Link as={Link} to="/home">
                Spoons
              </Nav.Link>
              <Nav.Link href="https://njit.campuslabs.com/engage/organization/rha">Events</Nav.Link>
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
          <Route path="/committees">
            <Committees />
          </Route>
          <Route path="/hallCouncils">
            <HallCouncils />
          </Route>
          <Route path="/docs">
            <Docs />
          </Route>
          <Route path="/eboard">
            <Eboard />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
export default Menu;
