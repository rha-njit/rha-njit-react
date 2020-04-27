import React from "react";
import styled, { keyframes } from "styled-components";
import { flipInY } from "react-animations";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidehoe from "../images/sideHoe.png";
import Leadership from "../images/NJIT+RUN.jpg";
import FrankieCutie from "../images/frankieCutie2.jpg";
import Background from "../images/backGroundBlack.png";
import ProgrammingPhoto from "../images/RHA_Homecoming.jpg";
import "../App.css";
import "./home.css";

function About() {
  const FlipInY = styled.div`
    animation: 4s ${keyframes`${flipInY}`};
  `;
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        overflowX : 'hidden'
      }}
    >
      <Jumbotron className="backg">
        <h1 style={{color: "white"}}>Our Roots</h1>
        <br />
        <h2 style={{color: "white"}}>Why should I get involved? What things does RHA focus on?</h2>
      </Jumbotron>
      <CardDeck>
        <Card
          style={{
            backgroundImage: `url(${Background})`
          }}
        >
          <FlipInY>
            <Card.Img variant="top" src={FrankieCutie} />
          </FlipInY>
          <Card.Body>
            <Card.Title style={{color: "white"}}>Advocacy</Card.Title>
            <Card.Text style={{color: "white"}}>
              Through resident feedback, we recognize a problem and create a
              solution. We are here to better your residential experience
              whether it be free laundry or simply maintaining your residence
              hall.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{
        backgroundImage: `url(${Background})`
      }}> 
          <FlipInY>
            <Card.Img variant="top" src={ProgrammingPhoto} />
          </FlipInY>
          <Card.Body>
            <Card.Title  style={{color: "white"}}>Programming</Card.Title>
            <Card.Text  style={{color: "white"}}>
              Our innovative programs (that include, but are not limited to:
              cultural awareness and health/wellness) are also an opportunity
              for residents to interact with one another and engage everyone in
              the NJIT community
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{
        backgroundImage: `url(${Background})`
      }}>
          <FlipInY>
            <Card.Img variant="top" src={Leadership} />
          </FlipInY>
          <Card.Body>
            <Card.Title  style={{color: "white"}}>Leadership Development</Card.Title>
            <Card.Text  style={{color: "white"}}>
              As a student run organization, we strive to strengthen our
              residents abilities to lead through involvement on campus
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>

      <br />
      <br />
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Img src={Sidehoe} />
            </Card>
          </Col>
          <Col xs={8}>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Residential Hall Council
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    Every residence hall belongs to a Residential Hall Council.
                    Similar to a city hall meeting, this is the easiest way for
                    residents to directly get involved in their community.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    General Body Meetings
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    Every week on Firday the Residence Hall Association holds a
                    General Body Meeting. This would be a great place to voice
                    your concerns about living on campus.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    The Committees
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    The Programming and Delegation committees are a fun way to
                    get involved with the organization. Visit the page for more
                    information.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
          <Col>
            <Card>
              <Card.Img src={Sidehoe} />
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
    </div>
  );
}
export default About;