import React from "react";
import WidgetBot from "@widgetbot/react-embed";

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
        <img src={Logo} alt="RHA Logo" width="300" height="300" />
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
            <div className="imgBx" data-text="Both">
              <img src={BothIcon} alt="icon" />
            </div>
            <div className="content">
              <h3>Battle Of Halls</h3>
              <p>
                {" "}
                A big event that spawns an entire week.
                <br />
                All Halls at NJIT will battle it out for the <br />
                BoTH Trophy.
                <br />
                Which will be given to the best hall of the year.
              </p>
              <a href="/"> Learn More</a>
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
              <a href="/"> Learn More</a>
            </div>
          </div>

          <div className="card">
            <div className="imgBx" data-text="Grilled">
              <img src={CheeseIcon} alt="icon" />
            </div>
            <div className="content">
              <h3>Grilled Cheese</h3>
              <p>
                Host by our very own delegation committee.
                <br />
                Every week the committee will host a <br />
                grilled cheese.
                <br />
                fundraiser to raise money for going to the <br />
                conference.
              </p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1YEy7jbTBlVT_ew8v0d2tY7OYxudGd-gIRQaUm390kPf0zg/viewform?usp=sf_link"> Learn More</a>
            </div>
          </div>
        </div>
      </main>
      <h1>RHA Discord Chat</h1>
        <h3>Ask Residence Hall Association</h3>
        {/*Fix channels that are avaible to public*/}
        <WidgetBot
          server="309514846678810624"
          channel="309514846678810624"
          width="90%"
          height="600"
          shard="https://e.widgetbot.io"
        />
      <footer>
        <h4>NJIT RHA &copy; 2020. Made by RHA Technology Officer</h4>
      </footer>
    </div>
  );
}
export default About;
