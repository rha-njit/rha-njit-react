import Menu from "./components/rhaMenu";
import { Router, Link } from "@reach/router";
import Logo from "./images/RHA_Logo_Vector.png";
import Home from "./pages/home";
import About from "./pages/about";
import Eboard from "./pages/eboard";
import Committees from "./pages/committees";
import HallCouncils from "./pages/hallCouncils";
import "./index.css";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as BoltIcon } from "./icons/bolt.svg";
import { ReactComponent as InstagramIcon } from "./icons/instagram.svg";
import { ReactComponent as HomeIcon } from "./icons/house-black-24dp.svg";
import { ReactComponent as PeopleIcon } from "./icons/people-black-24dp.svg";
import { ReactComponent as OfficeIcon } from "./icons/date_range-black-24dp.svg";
import { ReactComponent as HallIcon } from "./icons/location_city-black-24dp.svg";
import { ReactComponent as PlaneIcon } from "./icons/flight_takeoff-black-24dp.svg";

import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon={<HomeIcon />} />
        <NavItem icon={<InstagramIcon />} />
        <NavItem icon={<OfficeIcon />} />

        <NavItem icon={<CaretIcon />}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>
      
      <Router>
        <About default />
        <Eboard path="/eboard" />
        <Committees path="/committees" />
        <HallCouncils path="/hallCouncils" />
      </Router>
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem leftIcon={<PeopleIcon />}><Link to="/eboard">Executive Board</Link></DropdownItem>
          <DropdownItem
            leftIcon={<HallIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="hallCouncils">
            Hall Councils
          </DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="committees">
            Committees
          </DropdownItem>
          <DropdownItem leftIcon={<PeopleIcon />}><Link to="/eboard">Documents/Forms</Link></DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'committees'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Committees</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Programming Committee</DropdownItem>
          <DropdownItem leftIcon={<PlaneIcon />}>Delegation Committee</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'hallCouncils'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Hall Councils</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Cypress</DropdownItem>
        </div>
      </CSSTransition>
      
    </div>
  );
}

export default App;
