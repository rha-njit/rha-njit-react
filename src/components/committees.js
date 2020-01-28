import React from "react";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Jumbotron from "react-bootstrap/Jumbotron";
import "../App.css";

function Committees() {
  return (
    <div>
      <Jumbotron>
        <h1>Committees</h1>
        <br />
        <h2>Join a Committee Today!</h2>
        <p>Committees are great way for general body memebers to get involved within RHA.</p>
      </Jumbotron>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Programming Committee</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
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
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Delegation Committee</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
}
export default Committees;