import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Mark from "../images/eboard/mark.jpg";
import Matt from "../images/eboard/matt.jpg";
import Sam from "../images/eboard/sam.jpg";
import Sidehoe from "../images/sideHoe.png";
import Austin from "../images/eboard/Austin.jpg";
import Chanales from "../images/eboard/chanales2.jpg";
import Portia from "../images/eboard/portia.jpg";
import Reesha from "../images/eboard/reesha.jpg";
import Shruti from "../images/eboard/shruti.jpg";
import Saili from "../images/eboard/saili.jpg";
import Trevor from "../images/eboard/trevor2.jpg";
import styled, { keyframes } from "styled-components";
import { fadeInDown } from "react-animations";
import Background from "../images/backGroundBlack.png";
import "../App.css";
import "./home.css";

function Eboad() {
  const FadeInDown = styled.div`
    animation: 3s ${keyframes`${fadeInDown}`};
  `;
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        overflowX: "hidden"
      }}
    >
      <Container>
        <Row className="justify-content-between">
          <Col>
            <Card>
              <Card.Img src={Sidehoe} />
            </Card>
          </Col>
          <Col xs={8}>
            <Card
              className="text-center"
              style={{
                backgroundImage: `url(${Background})`
              }}
            >
              <Card.Header as="h1" className="textColor">
                The Big Ten
              </Card.Header>
              <Card.Body>
                <Card.Title className="textColor">
                  The Executive Board of RHA
                </Card.Title>
                <Card.Text className="textColor">
                  Improving the lives of resident on campus.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img src={Sidehoe} />
            </Card>
          </Col>
        </Row>
      </Container>

      <br />
      <Container>
        <Row className="justify-content-between">
          <Col>
            <Card>
              <Card.Img src={Sidehoe} />
            </Card>
          </Col>
          <Col xs={5}>
            <Card
              style={{
                backgroundImage: `url(${Background})`
              }}
            >
              <FadeInDown>
                <Card.Img variant="top" src={Sam} />
              </FadeInDown>
              <Card.Body>
                <Card.Title className="textColor">President</Card.Title>
                <Card.Text className="textColor">
                  What’s Up Everyone, my name Samuel Rumberger and I am the
                  President for RHA for the 2019-2020 school year. What I do is
                  oversee the day to day operations of RHA and handle the
                  external relations of RHA as well. My goal for this year is to
                  collaborate with other organizations across campus to create
                  bigger and better events that make the lives of residents a
                  little bit more fun. A fun fact about me is that I worked my
                  first internship this summer as a part of the IT contractor
                  for Northstar Academy; which is a charter school based right
                  here in Newark.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Major: Information Technology
                </small>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img src={Sidehoe} />
            </Card>
          </Col>
        </Row>
      </Container>

      <br />
      <CardDeck className="justify-content-between">
        <Card
          style={{
            backgroundImage: `url(${Background})`
          }}
        >
          <FadeInDown>
            <Card.Img variant="top" src={Reesha} />
          </FadeInDown>
          <Card.Body>
            <Card.Title className="textColor">
              Vice President of Programming
            </Card.Title>
            <Card.Text className="textColor">
              Hey, my name is Reesha Gandhi, and I am the Vice President of
              Programming for RHA! My job as VPP consists of creating and
              putting on programs for residents across campus such as Drone
              Olympics and Battle of the Halls in April! If you have any ideas
              about programs you’d like to see happen, whether they’re big or
              small, be sure to come find me at the RHA General Body Meetings,
              join the Programming Committee, or even just send me a quick email
              :) If you have any questions for me, don’t hesitate to reach out!
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Major: Human-Computer Interaction Major with a double degree in
              Business Information Systems
            </small>
          </Card.Footer>
        </Card>

        <Card
          style={{
            backgroundImage: `url(${Background})`
          }}
        >
          <FadeInDown>
            <Card.Img variant="top" src={Austin} />
          </FadeInDown>
          <Card.Body>
            <Card.Title className="textColor">
              Vice President of Administration
            </Card.Title>
            <Card.Text className="textColor">
              Hi, my name is Austin Law and I am RHA’s Vice President of
              Administration or VPA for short. As the VPA, I handle mostly
              internal affairs such as development of RHA, recognition, and our
              sub-organizations such as Hall Councils. My goal for this year is
              to make sure everyone is recognized for their efforts and to
              further develop RHA. If you want to be involved in either of those
              things, come to our general body meetings every Friday where I
              will be giving updates about our current development and
              recognition to nominated people.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Major: Information Technology</small>
          </Card.Footer>
        </Card>

        <Card
          style={{
            backgroundImage: `url(${Background})`
          }}
        >
          <FadeInDown>
            <Card.Img variant="top" src={Portia} />
          </FadeInDown>
          <Card.Body>
            <Card.Title className="textColor">
              National Communications Coordinator
            </Card.Title>
            <Card.Text className="textColor">
              Hey y'all! My name is Portia Shaheed. I am the National
              Communications Coordinator (NCC) for RHA. In short, I take
              students to Regional and National conferences, host fundraisers so
              those conferences are FREE, and try to get recognition for
              students. This February, my team and I will be hosting a regional
              conference here at NJIT. Outside of RHA, I love singing and
              hanging out with my friends.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Major: Biochemistry</small>
          </Card.Footer>
        </Card>
      </CardDeck>

      <br />
      <CardDeck className="justify-content-between">
        <Card
          style={{
            backgroundImage: `url(${Background})`
          }}
        >
          <FadeInDown>
            <Card.Img variant="top" src={Shruti} />
          </FadeInDown>
          <Card.Body>
            <Card.Title className="textColor">
              National Communications Coordinator in training
            </Card.Title>
            <Card.Text className="textColor">
              Hey everyone! My name is Shruti Varshney and I am the National
              Communications Coordinator in Training (NCCiT). I am a second year
              biomedical engineering major and my job for RHA is to assist the
              NCC and learn their job for the following year! Besides RHA, I
              enjoy playing my clarinet, knitting, and learning the guitar.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Major: Biomedical Engineering</small>
          </Card.Footer>
        </Card>
        <Card
          style={{
            backgroundImage: `url(${Background})`
          }}
        >
          <FadeInDown>
            <Card.Img variant="top" src={Matt} />
          </FadeInDown>
          <Card.Body>
            <Card.Title className="textColor">Treasurer</Card.Title>
            <Card.Text className="textColor">
              My name is Matt Amato and I am the RHA treasurer. As RHA
              treasurer, I am responsible for updating the RHA budget as well as
              mentoring each Hall Council treasurer. It is my goal to always be
              financially transparent so all residents can see how RHA budgets
              (insert money emoji) for events and initiatives. Be sure to catch
              me give weekly budget updates at RHA meetings every Friday! Don’t
              hesitate to reach out if you have questions about the RHA budget
              or want to get involved in ResLife!
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Major: Computer Science and minoring in Business and Applied
              Mathematics
            </small>
          </Card.Footer>
        </Card>
        <Card
          style={{
            backgroundImage: `url(${Background})`
          }}
        >
          <FadeInDown>
            <Card.Img variant="top" src={Trevor} />
          </FadeInDown>
          <Card.Body>
            <Card.Title className="textColor">Secretary</Card.Title>
            <Card.Text className="textColor">
              My name is Trevor Stone Jr. I am the current RHA secretary. I am a
              freshman studying Chemical Engineering. For some, college is about
              networking. For others, it is about getting a degree. For me, it
              is about growing as a person. That is why I wanted to join RHA: I
              know that the experiences I encounter in this position will help
              me blossom as a leader. I look forward to helping the student body
              via RHA events as you help me become a better leader.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Major: Chemical Engineering</small>
          </Card.Footer>
        </Card>
      </CardDeck>

      <br />
      <CardDeck className="justify-content-between">
        <Card
          style={{
            backgroundImage: `url(${Background})`
          }}
        >
          <FadeInDown>
            <Card.Img variant="top" src={Saili} />
          </FadeInDown>
          <Card.Body>
            <Card.Title className="textColor">
              Public Realtions Officer
            </Card.Title>
            <Card.Text className="textColor">
              Hi! I am Saili Anil Sonawane. I am from India. I am the Public
              Relations Officer for RHA this year. I joined RHA because I love
              the community on campus. I love how RHA strives to improve the
              lives of all the residents on campus. I enjoy being the PRO
              because it gives my an opportunity to explore my creativity as I
              get to work on making posters for various events and also because
              I love Instagram. I love photography so you could find me anywhere
              on campus randomly standing and taking pictures of trees or the
              sky or absolutely anything. A fun fact about me is that I am
              trilingual. I’ve been speaking Marathi, Hindi and English since I
              was born. Also, I learned french for 4 years but didn’t retain
              much of it. Most importantly, FOLLOW @NJIT_RHA !!!
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Major: Business and Information systems
            </small>
          </Card.Footer>
        </Card>
        <Card
          style={{
            backgroundImage: `url(${Background})`
          }}
        >
          <FadeInDown>
            <Card.Img variant="top" src={Chanales} />
          </FadeInDown>
          <Card.Body>
            <Card.Title className="textColor">Tech Officer</Card.Title>
            <Card.Text className="textColor">
              Hello I am the RHA Tech Officer for this year. I am a senior
              majoring in Information Technology with a minor in Computer
              Science and Applied Mathematics. As Tech Officer, I am responsible
              for creating and updating the RHA website and other technology
              related things. I hope to spread the word of RHA to the whole
              campus and get more people involved in RHA this year.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Major: Information Technology</small>
          </Card.Footer>
        </Card>
        <Card
          style={{
            backgroundImage: `url(${Background})`
          }}
        >
          <FadeInDown>
            <Card.Img variant="top" src={Mark} />
          </FadeInDown>
          <Card.Body>
            <Card.Title className="textColor">Membership Officer</Card.Title>
            <Card.Text className="textColor">
              My name is Mark Formichelli and I am the RHA Membership Officer.
              As the RHA Membership Officer, I am responsible for keeping track
              of attendance at all RHA related meetings. It is my goal to get
              the biggest turnout possible at our general body meetings which
              are held on Fridays at 11:30am. Don’t hesitate to reach out if you
              have questions about the RHA, Hall Council or want to get involved
              in ResLife!
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Major: Civil Engineering</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <br />
      <br />
    </div>
  );
}
export default Eboad;
