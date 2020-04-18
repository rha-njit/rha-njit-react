import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Background from "../images/backGroundBlack.png";
import "../App.css";
import "./home.css";

function Hours() {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        overflowX: "hidden",
      }}
    >
      <Jumbotron className="backg">
        <h1 className="textColor">Office Hours</h1>
        {/* Add google caldenear here*/}
      </Jumbotron>
    </div>
  );
}
export default Hours;
