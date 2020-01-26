import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../App.css";

function Eboad() {
  return (
    <div>
      <Card className="text-center">
        <Card.Header>The Big Ten</Card.Header>
        <Card.Body>
          <Card.Title>The Executive Board of RHA</Card.Title>
          <Card.Text>
            Improving the lives of resident on campus.
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    </div>
  );
}
export default Eboad;
