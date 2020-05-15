import React from "react";
import "./eboard.css";

import Mark from "../images/eboard/mark2.jpg";
import Matt from "../images/eboard/matt2.jpg";
import Sam from "../images/eboard/sam2.jpg";
import Sidehoe from "../images/sideHoe2.png";
import Austin from "../images/eboard/Austin2.jpg";
import Chanales from "../images/eboard/chanales2.png";
import Portia from "../images/eboard/portia2.jpg";
import Reesha from "../images/eboard/reesha2.jpg";
import Shruti from "../images/eboard/shruti2.jpg";
import Saili from "../images/eboard/saili2.jpg";
import Trevor from "../images/eboard/trevor22.png";

function EboardV2() {
  return (
    <div className="eboard-body">
      <div className="eboard-header">
        <img className="leftHouse" src={Sidehoe} width="25%" alt="redHouse" />
        <div>
          <h1>The Big Ten</h1>
          <h1>The Executive Board of RHA</h1>
          <h1> Improving the lives of resident on campus.</h1>
        </div>
        <img className="rightHouse" src={Sidehoe} width="25%" alt="redHouse" />
      </div>
      <main className="eboard-main">
        <div className="container-box">
          <div className="box">
            <div className="imgBox">
              <img src={Sam} alt="Eboard_Pic"/>
            </div>
            <div className="content-box">
              <h2>President</h2>
              <p>
                Samuel Rumberger<br />
                Major: <br />
                Information Technology
              </p>
            </div>
          </div>
        </div>

        <div className="container-box">
          <div className="box">
            <div className="imgBox">
              <img src={Reesha} alt="Eboard_Pic"/>
            </div>
            <div className="content-box">
              <h2>Vice President of Programming</h2>
              <p>
                Reesha Gandhi<br />
                Major: <br/>
                Human-Computer Interaction Major with a double degree in Business Information Systems
              </p>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img src={Austin} alt="Eboard_Pic"/>
            </div>
            <div className="content-box">
              <h2>Vice President of Administration</h2>
              <p>
                Austin Law<br />
                Major: <br />
                Information Technology
              </p>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img src={Portia} alt="Eboard_Pic"/>
            </div>
            <div className="content-box">
              <h2>National Communications Coordinator</h2>
              <p>
                 Portia Shaheed<br />
                 Major: <br />
                 Biochemistry
              </p>
            </div>
          </div>
        </div>

        <div className="container-box">
          <div className="box">
            <div className="imgBox">
              <img src={Shruti} alt="Eboard_Pic"/>
            </div>
            <div className="content-box">
              <h2>National Communications Coordinator in training</h2>
              <p>
                Shruti Varshney<br />
                Major: <br />
                Biomedical Engineering
              </p>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img src={Matt} alt="Eboard_Pic"/>
            </div>
            <div className="content-box">
              <h2>Treasurer</h2>
              <p>
                Matt Amato<br />
                Major: <br />
                Computer Science
              </p>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img src={Trevor} alt="Eboard_Pic"/>
            </div>
            <div className="content-box">
              <h2>Secretary</h2>
              <p>
                Trevor Stone Jr.<br />
                Major: <br />
                Chemical Engineering
              </p>
            </div>
          </div>
        </div>

        <div className="container-box">
          <div className="box">
            <div className="imgBox">
              <img src={Saili} alt="Eboard_Pic"/>
            </div>
            <div className="content-box">
              <h2>Public Realtions Officer</h2>
              <p>
                Saili Anil Sonawane<br />
                Major: <br />
                Business and Information systems
              </p>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img src={Chanales} alt="Eboard_Pic"/>
            </div>
            <div className="content-box">
              <h2>Technology Officer</h2>
              <p>
                Chanales Flores<br />
                Major: <br />
                Information Technology
              </p>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img src={Mark} alt="Eboard_Pic"/>
            </div>
            <div className="content-box">
              <h2>Membership Officer</h2>
              <p>
                Mark Formichelli<br />
                Major: <br />
                Civil Engineering
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer> <h4>NJIT RHA &copy; 2020. Made by RHA Technology Officer</h4></footer>
    </div>
  );
}
export default EboardV2;
