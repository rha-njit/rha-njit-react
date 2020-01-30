import React from "react";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Jumbotron from "react-bootstrap/Jumbotron";
import "../App.css";

function Docs() {
  return (
    <div>
      <Jumbotron>
        <h1>Documents and Forms</h1>
      </Jumbotron>

      <CardDeck>
        <Card>
          <Card.Body>
            <Card.Title>Our Constitution</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
        
          <Card.Body>
            <Card.Title>Meeting Minutes</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          
          <Card.Body>
            <Card.Title>Budgets</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>

    <br />
    <br />
      <CardDeck>
        <Card>
          
          <Card.Body>
            <Card.Title>Proposal Form</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          
          <Card.Body>
            <Card.Title>Machine Request Form</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          
          <Card.Body>
            <Card.Title>Kudos Form</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
            <Button variant="primary">Learn More</Button>
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
export default Docs;