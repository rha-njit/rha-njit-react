import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/rhaMenu";
import { BrowserRouter } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu />
      </BrowserRouter>
    </div>
  );
}

export default App;
