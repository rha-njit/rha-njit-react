import React from "react";
import Logo from "../images/RHA_Logo_Vector.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Switch, Route, Link } from "react-router-dom";
import About from "./aboutUs";
import Home from "./home";
import Eboard from "./eboard";
import Elections from "./elections";
import Committees from "./committees";
import HallCouncils from "./hallCouncils";
import Docs from "./doc";
import Both from "./both";

function Menu() {
  return (
    <div>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/home">
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Residence Hall Association
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <NavDropdown title="About" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/about">
                  About Us
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/eboard">
                  Meet the Exective Board
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/docs">
                  Documents and Forms
                </NavDropdown.Item>
                <NavDropdown.Item href="https://njit.campuslabs.com/engage/organization/rha">
                  Regional Business Conference
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Get Involved" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/committees">
                  Committees
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/hallCouncils">
                  Hall Councils
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/elections">
                  RHA Elections
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/both">
                BOTH
              </Nav.Link>
              <Nav.Link href="https://njit.campuslabs.com/engage/organization/rha">
                Events
              </Nav.Link>
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
          <Route path="/both">
            <Both />
          </Route>
          <Route path="/eboard">
            <Eboard />
          </Route>
          <Route path="/elections">
            <Elections />
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
