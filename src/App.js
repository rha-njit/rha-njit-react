import { Router, Link } from "@reach/router";

import "./index.css";
import About from "./pages/about";
import BOTH from "./pages/both";
import EboardV2 from "./pages/eboardV2";
import Docs from "./pages/docs";
import Hours from "./pages/officeHours";
import AboutRoots from "./pages/aboutRoots";

import HallCouncils from "./pages/hallCouncils";

import NavItemHome from "./components/navItemHome";
import NavItemInstagram from "./components/navItemInstagram";
import NavItemOfficeHours from "./components/navItemOfficeHours";

import { ReactComponent as PlanIcon } from "./icons/plan.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as InstagramIcon } from "./icons/instagram.svg";
import { ReactComponent as HomeIcon } from "./icons/house-black-24dp.svg";
import { ReactComponent as PeopleIcon } from "./icons/people-black-24dp.svg";
import { ReactComponent as EachHallIcon } from "./icons/apartment-black-24dp.svg";
import { ReactComponent as OfficeIcon } from "./icons/date_range-black-24dp.svg";
import { ReactComponent as HallIcon } from "./icons/location_city-black-24dp.svg";
import { ReactComponent as PlaneIcon } from "./icons/flight_takeoff-black-24dp.svg";

import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

function App() {
  return (

    <div className="App">
      <Navbar>
        <NavItemHome icon={<HomeIcon />} />
        <NavItemInstagram icon={<InstagramIcon />} />
        <NavItemOfficeHours icon={<OfficeIcon />} />

        <NavItem icon={<CaretIcon />}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>
      
      <Router>
        <About default />
        <Docs path="/docs"/>
        <BOTH path="/both" />
        <EboardV2 path="/eboardV2" />
        <Hours path="/officeHours" />
        <AboutRoots path="/aboutRoots" />

        
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
      <span className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </span>

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
      <div className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </div>
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
          <DropdownItem leftIcon={<PeopleIcon />}><Link to="/eboardV2">Executive Board</Link></DropdownItem>
          <DropdownItem
            leftIcon={<HallIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="hallCouncils">
            Hall Councils
          </DropdownItem>
          <DropdownItem
            leftIcon={<PeopleIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="committees">
            Committees
          </DropdownItem>
          <DropdownItem leftIcon={<PlanIcon />}><Link to="/docs">Documents/Forms</Link></DropdownItem>

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
          <DropdownItem leftIcon={<PlanIcon />}>Programming Committee</DropdownItem>
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
          <DropdownItem leftIcon={<EachHallIcon />}><Link to="/">Cypress Hall Council</Link></DropdownItem>
          <DropdownItem leftIcon={<EachHallIcon />}>Redwood Hall Council</DropdownItem>
          <DropdownItem leftIcon={<EachHallIcon />}>Laurel Hall Council</DropdownItem>
          <DropdownItem leftIcon={<EachHallIcon />}>Oak Hall Council</DropdownItem>
          <DropdownItem leftIcon={<EachHallIcon />}>Honors Hall Council</DropdownItem>
        </div>
      </CSSTransition>
      
    </div>
  );
}

export default App;
