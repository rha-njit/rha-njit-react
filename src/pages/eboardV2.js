import React from "react";
import "./eboard.css";

import Jason from "../images/eboard/JasonA.jpeg";
import Sidehoe from "../images/sideHoe.png";
import Carla from "../images/eboard/CarlaB.jpeg";
import Connor from "../images/eboard/ConnorM.jpeg";
import Darsh from "../images/eboard/DarshS.jpg";
import Eden from "../images/eboard/EdenD.jpeg";
import Karm from "../images/eboard/KarmD.JPG";
import Muhammad from "../images/eboard/MoeW.jpeg";
import Nick from "../images/eboard/Nick_NCCiT.jpeg";
import Shruti from "../images/eboard/ShrutiV.jpg";
import Will from "..//images/eboard/WillB.jpeg";


function EboardV2() {
  return (
  //   <div>
  //     id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel"
  //   </div>
  // <div class="carousel-inner">
  //   <div class="carousel-item active">
  //     <img class="d-block w-100" src="..." alt="First slide">
  //   </div>
  //   <div class="carousel-item">
  //     <img class="d-block w-100" src="..." alt="Second slide">
  //   </div>
  //   <div class="carousel-item">
  //     <img class="d-block w-100" src="..." alt="Third slide">
  //   </div>
  // </div>
// </div>
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
              <img src={Jason} alt="Eboard_Pic"/>
            </div>
            <div className="content-box">
              <h2>President</h2>
              <p>
                Jason Antonik<br />
                Major: <br />
                Mechanical Engineering <br />
                Year: <br />
                Senior 
              </p>
            </div>
          </div>
        </div>

        <div className="container-box">
          <div className="box">
            <div className="imgBox">
              <img src={Connor} alt="Eboard_Pic"/>
            </div>
            <div className="content-box">
              <h2>Vice President of Programming</h2>
              <p>
                Connor Maguire<br />
                Major: <br/>
                Civil Engineering <br />
                Year: <br />
                Sophomore
              </p>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img src={Eden} alt="Eboard_Pic_VPA"/>
            </div>
            <div className="content-box">
              <h2>Vice President of Administration</h2>
              <p>
                Eden Dubrovsky<br />
                Major: <br />
                Computer Science <br />
                Year: <br />
                Sophomore
              </p>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img src={Shruti} alt="Eboard_Pic_NCC"/>
            </div>
            <div className="content-box">
              <h2>National Communications Coordinator</h2>
              <p>
                 Shruti Varshney<br />
                 Major: <br />
                 Biomedical Engineering / Pre Health
                 Year: <br />
                 Junior
              </p>
            </div>
          </div>
        </div>

        <div className="container-box">
          <div className="box">
            <div className="imgBox">
              <img src={Nick} alt="Eboard_Pic"/>
            </div>
            <div className="content-box">
              <h2>National Communications Coordinator in training</h2>
              <p>
                Nick Furth<br />
                Major: <br />
                Computer Engineering BS/MS
                Year:
                Senior
              </p>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img src={Muhammad} alt="Eboard_Pic"/>
            </div>
            <div className="content-box">
              <h2>Treasurer</h2>
              <p>
                Muhammad Waleed Cheema<br />
                Major: <br />
                Financial Technology
                Sophomore
              </p>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img src={Darsh} alt="Eboard_Pic"/>
            </div>
            <div className="content-box">
              <h2>Secretary</h2>
              <p>
                Darsh Saravanan<br />
                Major: <br />
                Information Technology
                Year <br />
                Sophomore
              </p>
            </div>
          </div>
        </div>

        <div className="container-box">
          <div className="box">
            <div className="imgBox">
              <img src={Carla} alt="Eboard_Pic_PR"/>
            </div>
            <div className="content-box">
              <h2>Public Realtions Officer</h2>
              <p>
                Carla Blandura<br />
                Major: <br />
                Biomedical Engineering <br />
                Year <br />
                Sophomore
              </p>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img src={Karm} alt="Eboard_Pic_TO"/>
            </div>
            <div className="content-box">
              <h2>Technology Officer</h2>
              <p>
                Karm Desai<br />
                Major: <br />
                Business and Information Systems <br />
                Year: <br />
                Senior
              </p>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img src={Will} alt="Eboard_Pic_MO"/>
            </div>
            <div className="content-box">
              <h2>Membership Officer</h2>
              <p>
                Will Brevedh<br />
                Major: <br />
                Construction Engineering <br />
                Concrete Industry Managment <br />
                Year: <br />
                Sophomore
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer> <h4>NJIT RHA &copy; 2021. Made by RHA Technology Officer</h4></footer>
    </div>
  );
}
export default EboardV2;
