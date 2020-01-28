import React from "react";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Jumbotron from "react-bootstrap/Jumbotron";
import "../App.css";

function Both() {
  return (
    <div>
      <Jumbotron>
        <h1>Battle Of The Halls</h1>
        <br />
        <h2>Join a Committee Today!</h2>
        <p>Committees are great way for general body memebers to get involved within RHA.</p>
      </Jumbotron>
      
      <CardDeck>
        <Card>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Grilled Cheese Service</Card.Title>
            <Card.Text>
              1/2 Sandwich - $1
              <br/>
              Whole Sandwich - $2
              <br/>
              CapriSun - $1
            </Card.Text>
            <Button variant="primary">RHA Grilled Cheese</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Thursday Nights: 10pm to 1am </small>
          </Card.Footer>
        </Card>
        <Card>
        </Card>
      </CardDeck>
    </div>
  );
}
export default Both;