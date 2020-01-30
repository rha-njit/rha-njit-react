import React from "react";
import styled, { keyframes } from "styled-components";
import {
  slideInLeft,
  slideInRight,
  fadeInDown
} from "react-animations";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import Jumbotron from "react-bootstrap/Jumbotron";
import NACURH from "../images/NACURH2019.jpg";
import Programming from "../images/programming.jpg";
import Background from "../images/backGroundBlack.png";
import Cheese from "../images/ChunckyChanalesCheese.jpg";
import "../App.css";
import "./home.css";

function Committees() {
  const FadeInDown = styled.div`
    animation: 3s ${keyframes`${fadeInDown}`};
  `;
  const SlideInLeft = styled.div`
    animation: 3s ${keyframes`${slideInLeft}`};
  `;
  const SlideInRight = styled.div`
    animation: 3s ${keyframes`${slideInRight}`};
  `;
  return (
    <div style={{
      backgroundImage: `url(${Background})`
    }}>
      <Jumbotron className="backg">
        <h1 style={{color: "white"}}>Committees</h1>
        <br />
        <h2 style={{color: "white"}}>Join a Committee Today!</h2>
        <p style={{color: "white"}}>
          Committees are great way for general body memebers to get involved
          within RHA.
        </p>
      </Jumbotron>
      <CardDeck>
        <Card style={{
            backgroundColor: 'grey'
          }}>
          <SlideInLeft>
            <Card.Img variant="top" src={Programming} />
          </SlideInLeft>
          <Card.Body>
            <Card.Title style={{color: "white"}}>Programming Committee</Card.Title>
            <Card.Text style={{color: "white"}}>
              The job of the Programming Committee is to plan and run programs
              for RHA. They shall hold no fewer than two meetings a month to
              discuss these issues. The Vice President of Programming will be
              the chairperson of the committee.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted-textColor">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card style={{
            backgroundColor: 'grey'
          }}>
            <FadeInDown><Card.Img variant="top" src={Cheese} /></FadeInDown>
          <Card.Body>
            <br />
            <Card.Title style={{color: "white"}}>Grilled Cheese Service</Card.Title>
            <Card.Text style={{color: "white"}}>
              1/2 Sandwich - $1
              <br />
              Whole Sandwich - $2
              <br />
              CapriSun - $1
            </Card.Text>
            <Button variant="dark">RHA Grilled Cheese</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted-textColor">Thursday Nights: 10pm to 1am </small>
          </Card.Footer>
        </Card>
        <Card style={{
            backgroundColor: 'grey'
          }}>
          <SlideInRight>
            <Card.Img variant="top" src={NACURH} />
          </SlideInRight>
          <Card.Body>
            <Card.Title style={{color: "white"}}>Delegation Committee</Card.Title>
            <Card.Text style={{color: "white"}}>
              The job of the Delegation Committee is to send delegates from the
              committee to the Regional Leadership Conference (RLC), the
              Regional Business Conference (RBC), and the National Association
              of College and University Residence Halls (NACURH) conference.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted-textColor">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <br />
    </div>
  );
}
export default Committees;
