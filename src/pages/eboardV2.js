import React from "react";
import "./eboard.css";

import Mark from "../images/eboard/mark.jpg";
import Matt from "../images/eboard/matt.jpg";
import Sam from "../images/eboard/sam2.jpg";
import Sidehoe from "../images/sideHoe2.png";
import Austin from "../images/eboard/Austin.jpg";
import Chanales from "../images/eboard/chanales2.jpg";
import Portia from "../images/eboard/portia.jpg";
import Reesha from "../images/eboard/reesha.jpg";
import Shruti from "../images/eboard/shruti.jpg";
import Saili from "../images/eboard/saili.jpg";
import Trevor from "../images/eboard/trevor2.jpg";
import Sample from "../images/img2.jpg";

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
              <img src={Sam} alt="Sam"/>
            </div>
            <div className="content-box">
              <h2>President</h2>
              <p>
                What’s Up Everyone, my name Samuel Rumberger and I am the
                President for RHA for the 2019-2020 school year. What I do is
                oversee the day to day operations of RHA and handle the external
                relations of RHA as well.
              </p>
            </div>
          </div>
        </div>

        <div className="container-box">
          <div className="box">
            <div className="imgBox">
              <img src={Sample} />
            </div>
            <div className="content-box">
              <h2>Vice President of Programming</h2>
              <p>
                Hey, my name is Reesha Gandhi, and I am the Vice President of
                Programming for RHA! My job as VPP consists of creating and
                putting on programs for residents across campus such as Drone
                Olympics and Battle of the Halls in April!
              </p>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img src={Sample} />
            </div>
            <div className="content-box">
              <h2>Vice President of Administration</h2>
              <p>
              Hi, my name is Austin Law and I am RHA’s Vice President of
                Administration or VPA for short. As the VPA, I handle mostly
                internal affairs such as development of RHA, recognition, and
                our sub-organizations such as Hall Councils.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img src={Sample} />
            </div>
            <div className="content-box">
              <h2>National Communications Coordinator</h2>
              <p>
              Hey y'all! My name is Portia Shaheed. In short, I take
              students to Regional and National conferences, host fundraisers so
              those conferences are FREE, and try to get recognition for
              students.
              </p>
            </div>
          </div>
        </div>

        <div className="container-box">
          <div className="box">
            <div className="imgBox">
              <img src={Sample} />
            </div>
            <div className="content-box">
              <h2>National Communications Coordinator in training</h2>
              <p>
              Hey everyone! My name is Shruti Varshney and I am the National
              Communications Coordinator in Training (NCCiT). I am a second year
              biomedical engineering major and my job for RHA is to assist the
              NCC and learn their job for the following year! Besides RHA, I
              enjoy playing my clarinet, knitting, and learning the guitar.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img src={Sample} />
            </div>
            <div className="content-box">
              <h2>Treasurer</h2>
              <p>
              My name is Matt Amato and I am the RHA treasurer. As RHA
              treasurer, I am responsible for updating the RHA budget as well as
              mentoring each Hall Council treasurer. It is my goal to always be
              financially transparent so all residents can see how RHA budgets
              (insert money emoji) for events and initiatives. Be sure to catch
              me give weekly budget updates at RHA meetings every Friday!
              </p>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img src={Sample} />
            </div>
            <div className="content-box">
              <h2>Secretary</h2>
              <p>
              My name is Trevor Stone Jr. I am the current RHA secretary. I am a
              freshman studying Chemical Engineering. For some, college is about
              networking. For others, it is about getting a degree. For me, it
              is about growing as a person. That is why I wanted to join RHA: I
              know that the experiences I encounter in this position will help
              me blossom as a leader.
              </p>
            </div>
          </div>
        </div>

        <div className="container-box">
          <div className="box">
            <div className="imgBox">
              <img src={Sample} />
            </div>
            <div className="content-box">
              <h2>Public Realtions Officer</h2>
              <p>
              Hi! I am Saili Anil Sonawane. I am from India. I am the Public
              Relations Officer for RHA this year. I joined RHA because I love
              the community on campus. I love how RHA strives to improve the
              lives of all the residents on campus.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img src={Sample} />
            </div>
            <div className="content-box">
              <h2>Technology Officer</h2>
              <p>
              Hello my name is Chanales. I am a senior
              majoring in Information Technology with a minor in Computer
              Science and Applied Mathematics. As Tech Officer, I am responsible
              for creating and updating the RHA website and other technology
              related things.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img src={Sample} />
            </div>
            <div className="content-box">
              <h2>Membership Officer</h2>
              <p>
              My name is Mark Formichelli and I am the RHA Membership Officer.
              As the RHA Membership Officer, I am responsible for keeping track
              of attendance at all RHA related meetings. It is my goal to get
              the biggest turnout possible at our general body meetings which
              are held on Fridays at 11:30am.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
export default EboardV2;
