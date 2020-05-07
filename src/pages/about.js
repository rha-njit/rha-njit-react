import React from "react";
import "./aboutStyle.css";
import Logo from "../images/RHA_Logo_Vector.png";
import PlanIcon from "../icons/plan.svg";
import CheeseIcon from "../icons/cheese.svg";
import NatureIcon from "../icons/nature.svg";
import BothIcon from "../icons/sports-and-competition.svg";

function About() {
  return (
    <div>
      <header>
        <img src={Logo} alt="RHA Logo" width="300" height="300"/>
        <h1>Residence Hall Association</h1>
      </header>
     <main>
        <div className="container">
          <div className="card">
            <div className="imgBx" data-text="Events">
              <img src={PlanIcon} alt="icon" />
            </div>
            <div className="content">
              <h3>Upcoming Events</h3>
              <p>Check out RHA upcoming events.</p>
              <a href="/"> Learn More</a>
            </div>
          </div>

          <div className="card">
            <div className="imgBx" data-text="Both">
              <img src={BothIcon} alt="icon" />
            </div>
            <div className="content">
              <h3>Battle Of Halls</h3>
              <p>Check out RHA upcoming events.</p>
              <a href="/"> Learn More</a>
            </div>
          </div>

          <div className="card">
            <div className="imgBx" data-text="Roots">
              <img src={NatureIcon} alt="icon" />
            </div>
            <div className="content">
              <h3>About Us</h3>
              <p>Check out RHA upcoming events.</p>
              <a href="/"> Learn More</a>
            </div>
          </div>

          <div className="card">
            <div className="imgBx" data-text="Grilled">
              <img src={CheeseIcon} alt="icon" />
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
        <h1>Discord Chat</h1>
      </footer>
    </div>
  );
}
export default About;