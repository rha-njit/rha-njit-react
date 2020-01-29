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
import Cheese from "../images/ChunckyChanalesCheese.jpg";
import "../App.css";

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
    <div>
      <Jumbotron>
        <h1>Committees</h1>
        <br />
        <h2>Join a Committee Today!</h2>
        <p>
          Committees are great way for general body memebers to get involved
          within RHA.
        </p>
      </Jumbotron>
      <CardDeck>
        <Card>
          <SlideInLeft>
            <Card.Img variant="top" src={Programming} />
          </SlideInLeft>
          <Card.Body>
            <Card.Title>Programming Committee</Card.Title>
            <Card.Text>
              The job of the Programming Committee is to plan and run programs
              for RHA. They shall hold no fewer than two meetings a month to
              discuss these issues. The Vice President of Programming will be
              the chairperson of the committee.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
            <FadeInDown><Card.Img variant="top" src={Cheese} /></FadeInDown>
          <Card.Body>
            <br />
            <Card.Title>Grilled Cheese Service</Card.Title>
            <Card.Text>
              1/2 Sandwich - $1
              <br />
              Whole Sandwich - $2
              <br />
              CapriSun - $1
            </Card.Text>
            <Button variant="primary">RHA Grilled Cheese</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Thursday Nights: 10pm to 1am </small>
          </Card.Footer>
        </Card>
        <Card>
          <SlideInRight>
            <Card.Img variant="top" src={NACURH} />
          </SlideInRight>
          <Card.Body>
            <Card.Title>Delegation Committee</Card.Title>
            <Card.Text>
              The job of the Delegation Committee is to send delegates from the
              committee to the Regional Leadership Conference (RLC), the
              Regional Business Conference (RBC), and the National Association
              of College and University Residence Halls (NACURH) conference.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <br />
    </div>
  );
}
export default Committees;
