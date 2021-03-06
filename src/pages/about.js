import React from "react";
import { Link } from "@reach/router";
import WidgetBot from "@widgetbot/react-embed";

import "./aboutStyle.css";
import Logo from "../images/RHA_Logo_Vector.png";

import PlanIcon from "../icons/plan.svg";
import MineCraftIcon from "../icons/mcraft.svg";
import NatureIcon from "../icons/nature.svg";
import MeetingIcon from "../icons/video-conference.svg";

function About() {
  return (
    <div>
      <header>
        <img src={Logo} alt="RHA Logo" width="300" height="300" />
        <h1 >Residence Hall Association</h1>
      </header>
      <main>
        <div className="container">
          <div className="card">
            <div className="imgBx" data-text="Events">
              <img src={PlanIcon} alt="icon" />
            </div>
            <div className="content">
              <h3>Upcoming Events</h3>
              <p>
                {" "}
                Check out RHA upcoming events
                <br />
                on highlander hub.
              </p>
              <a href="https://njit.campuslabs.com/engage/organization/rha"> Learn More</a>
            </div>
          </div>

          <div className="card">
            <div className="imgBx" data-text="GBM">
              <img src={MeetingIcon} alt="icon" />
            </div>
            <div className="content">
              <h3>General Board Meetings</h3>
              <p>
                {" "}
                Join us in our weekly General Board Meetings
                <br />
                Every Friday at 11:30 am
              </p>
              <a href="https://njit.webex.com/njit/j.php?MTID=mb4dc150da9cd24f3dabe290beca23aa6"> Webex Link </a>
            </div>
          </div>

          <div className="card">
            <div className="imgBx" data-text="Roots">
              <img src={NatureIcon} alt="icon" />
            </div>
            <div className="content">
              <h3>About Us</h3>
              <p>
                Learn more about the roots of RHA.
                <br />
                Learn more about RHA mission.
              </p>
              <Link to="/aboutRoots">Learn More</Link>
            </div>
          </div>

          <div className="card">
            <div className="imgBx" data-text="MineCraft">
              <img src={MineCraftIcon} alt="icon" />
            </div>
            <div className="content">
              <h3>RHA-MineCraft Xerver</h3>
              <p>
                Play MineCraft on our NJIT's MineCraft Server.
                <br />
              </p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1YEy7jbTBlVT_ew8v0d2tY7OYxudGd-gIRQaUm390kPf0zg/viewform?usp=sf_link">Join Now</a>
            </div>
          </div>
        </div>
      </main>

      <h1>RHA Discord Chat</h1>
        <div className="div-center">
        <WidgetBot
          server="309514846678810624"
          channel="711375934913118307"
          width="80%"
          height="600"
          shard="https://e.widgetbot.io"
        />
        </div>
      <footer>
        <h4>NJIT RHA &copy; 2021. Made by RHA Technology Officer</h4>
      </footer>
    </div>
    
  );
}
export default About;
