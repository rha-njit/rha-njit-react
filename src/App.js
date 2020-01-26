import React from "react";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/rhaMenu";
import Home from "./components/home";
import { BrowserRouter } from 'react-router-dom';
import "./App.css";

function App() {
  const Bounce = styled.div`
    animation: 2s ${keyframes`${bounce}`} infinite;
  `;
  return (
    <div className="App">
      <BrowserRouter>
      <Menu />
      </BrowserRouter>
    </div>
  );
}

export default App;
