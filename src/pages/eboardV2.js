import React from "react";
import "./eboard.css";

import Mark from "../images/eboard/mark.jpg";
import Matt from "../images/eboard/matt.jpg";
import Sam from "../images/eboard/sam.jpg";
import Sidehoe from "../images/sideHoe2.png";
import Austin from "../images/eboard/Austin.jpg";
import Chanales from "../images/eboard/chanales2.jpg";
import Portia from "../images/eboard/portia.jpg";
import Reesha from "../images/eboard/reesha.jpg";
import Shruti from "../images/eboard/shruti.jpg";
import Saili from "../images/eboard/saili.jpg";
import Trevor from "../images/eboard/trevor2.jpg";

function EboardV2() {
  return (
    <div>
      <div className="eboard-header">
        <img className="leftHouse" src={Sidehoe} width="25%" alt="redHouse" />
        <div>
          <h1>The Big Ten</h1>
          <h2>The Executive Board of RHA</h2>
          <h3> Improving the lives of resident on campus.</h3>
        </div>
        <img className="rightHouse" src={Sidehoe} width="25%" alt="redHouse" />
      </div>
      <main className="eboard-main">
        <div>
            
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
export default EboardV2;
