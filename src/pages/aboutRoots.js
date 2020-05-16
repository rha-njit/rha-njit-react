import React from "react";
import "./aboutRootStyle.css";

import Speaker from "../images/speaker.png";
import Event from "../images/tableEvent.png";
import Mind from "../images/mindThinking.png";
import Leadership from "../images/NJIT+RUN.jpg";
import FrankieCutie from "../images/frankieCutie2.jpg";
import ProgrammingPhoto from "../images/RHA_Homecoming.jpg";

function Roots() {
  return (
    <div className="body-roots">
      <h1 className="title">Our Roots</h1>
      <h1>Why should I get involved? What things does RHA focus on?</h1>
      <div className="advocacy">
        <img src={FrankieCutie} width="35%" height="35%" alt="advocacy" />
        <h2>Advocacy</h2>
        <h3>
          Through resident feedback, we recognize a problem and create a
          solution. <br />
          We are here to better your residential experience whether it be free
          laundry or simply maintaining your residence hall.
        </h3>
        <img
          className="no-effect"
          width="30%"
          height="30%"
          src={Speaker}
          alt="speaker"
        />
      </div>

      <div className="programming">
        <img src={ProgrammingPhoto} width="35%" height="35%" alt="advocacy" />
        <h2>Programming</h2>
        <h3>
          {" "}
          Our innovative programs (that include, but are not limited to:
          <br />
          cultural awareness and health/wellness)
          <br /> are also an opportunity for residents to interact
          <br /> with one another and engage everyone in the NJIT community
        </h3>
        <img
          className="no-effect"
          width="30%"
          height="30%"
          src={Event}
          alt="event"
        />
      </div>

      <div className="leadership">
        <img src={Leadership} width="35%" height="35%" alt="advocacy" />
        <h2>Leadership Development</h2>
        <h3>
          As a student run organization,
          <br /> we strive to strengthen our residents abilities to lead through
          involvement on campus
        </h3>
        <img
          className="no-effect"
          width="30%"
          height="30%"
          src={Mind}
          alt="mind"
        />
      </div>
      <footer>
        <h4>NJIT RHA &copy; 2020. Made by RHA Technology Officer</h4>
      </footer>
    </div>
  );
}
export default Roots;
