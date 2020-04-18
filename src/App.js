import React from "react";
import Menu from "./components/rhaMenu";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Router } from "@reach/router";
import Logo from "./images/RHA_Logo_Vector.png";
import Home from "./pages/home";
import About from "./pages/aboutUs";
import Eboard from "./pages/eboard";
import Committees from "./pages/committees";
import HallCouncils from "./pages/hallCouncils";
import "./App.css";

function App() {
  const navLinks = [
    {
      text: "About",
      path: "/",
    },
    {
      text: "Executive board",
      path: "/eboard",
    },
    {
      text: "Committees",
      path: "/committees",
    },
    {
      text: "Hall Councils",
      path: "/hallCouncils",
    },
    {
      text: "Documents",
      path: "/docs",
    },
    {
      text: "Office Hours",
      path: "/hours",
    },
    {
      text: "Resources",
      path: "/hours",
    },
  ];

  return (
    <div className="App">
      <Menu
        navLinks={navLinks}
        logo={Logo}
        background="#fff"
        hoverBackground="#ddd"
        linkColor="#777"
      />
      <Router>
        <About default />
        <Eboard path="/eboard" />
        <Committees path="/committees" />
        <HallCouncils path="/hallCouncils" />
      </Router>
    </div>
  );
}

export default App;
