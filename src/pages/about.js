import React from "react";
import "./aboutStyle.css";
import Logo from "../images/RHA_Logo_Vector.png";
import PlanIcon from "../icons/plan.svg";
import GrillIcon from "../icons/fastfood-black-24dp.svg";
import BothIcon from "../icons/emoji_events-black-24dp.svg";

function About() {
  return (
    <div>
      <header>
        <img src={Logo} alt="RHA Logo" width="300" height="300"/>
        <h1>Residence Hall Association</h1>
      </header>
      <h2>Card Componenets</h2>
     <main>
        <div className="container">
          <div className="card">
            <div className="imgBx" data-text="events">
              <img src={PlanIcon} alt="icon" />
            </div>
            <div className="content">
              <h3>Upcoming Events</h3>
              <p>Check out RHA upcoming events.</p>
              <a href="/"> Learn More</a>
            </div>
          </div>

          <div className="card">
            <div className="imgBx" data-text="both">
              <img src={BothIcon} alt="icon" />
            </div>
            <div className="content">
              <h3>Battle Of Halls</h3>
              <p>Check out RHA upcoming events.</p>
              <a href="/"> Learn More</a>
            </div>
          </div>

          <div className="card">
            <div className="imgBx" data-text="team">
              <img src={GrillIcon} alt="icon" />
            </div>
            <div className="content">
              <h3>Team Building</h3>
              <p>Check out RHA upcoming events.</p>
              <a href="/"> Learn More</a>
            </div>
          </div>

          <div className="card">
            <div className="imgBx" data-text="grilled">
              <img src={GrillIcon} alt="icon" />
            </div>
            <div className="content">
              <h3>Grilled Cheese</h3>
              <p>Check out RHA upcoming events.</p>
              <a href="/"> Learn More</a>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <h3>Discord</h3>
      </footer>
    </div>
  );
}
export default About;
