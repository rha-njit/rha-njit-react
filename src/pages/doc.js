import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Jumbotron from "react-bootstrap/Jumbotron";
import Background from "../images/backGroundBlack.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../App.css";
import "./home.css";

function Docs() {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        overflowX: "hidden"
      }}
    >
      <Jumbotron className="backg">
        <h1 className="textColor">Documents and Forms</h1>
      </Jumbotron>

    <Container>
        <Row>
          <Col></Col>
          <Col xs={8}>
          <Card
          style={{
            backgroundColor: "grey"
          }}
        >
          <Card.Body>
            <Card.Title className="textColor">General Body Meeting Agendas</Card.Title>
            <Card.Text className="textColor">
              This folder holds the adgenda for past and present general body meeting agendas.
            </Card.Text>
            <Button variant="dark">Learn More</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted-textColor">
              General Body Agendas
            </small>
          </Card.Footer>
        </Card>
        </Col>
          <Col></Col>
        </Row>
      </Container>
      <br />
      <CardDeck>
        <Card
          style={{
            backgroundColor: "grey"
          }}
        >
          <Card.Body>
            <Card.Title className="textColor">Our Constitution</Card.Title>
            <Card.Text className="textColor">
              This is the Constitution of Residence Hall Association that is
              update by the secretary.
            </Card.Text>
            <Button variant="dark">Learn More</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted-textColor">
              Constitution
            </small>
          </Card.Footer>
        </Card>
        <Card
          style={{
            backgroundColor: "grey"
          }}
        >
          <Card.Body>
            <Card.Title className="textColor">GBM Meeting Minutes</Card.Title>
            <Card.Text className="textColor">
              These are the meeting minutes of the RHA General Body Meeting add
              every Friday atfer the meeting.
            </Card.Text>
            <Button variant="dark">Learn More</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted-textColor">
              General Body Meeting
            </small>
          </Card.Footer>
        </Card>
        <Card
          style={{
            backgroundColor: "grey"
          }}
        >
          <Card.Body>
            <Card.Title className="textColor">Budgets</Card.Title>
            <Card.Text className="textColor">
              This is the budget of Residence Hall Association that is update
              regular by the treasurer.
            </Card.Text>
            <Button
              href="https://docs.google.com/spreadsheets/d/1g74C9duNRzHY-yIWFYSAsYTqBmFDzi3y_RtjaHObb5M/edit#gid=0"
              variant="dark"
            >
              Learn More
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted-textColor">
              Budgets
            </small>
          </Card.Footer>
        </Card>
      </CardDeck>

      <br />
      <br />
      <CardDeck>
        <Card
          style={{
            backgroundColor: "grey"
          }}
        >
          <Card.Body>
            <Card.Title className="textColor">Proposal Form</Card.Title>
            <Card.Text className="textColor">
              Use to request money from the Residence Hall Association.
            </Card.Text>
            <Button variant="dark">Learn More</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted-textColor">
              Form
            </small>
          </Card.Footer>
        </Card>
        <Card
          style={{
            backgroundColor: "grey"
          }}
        >
          <Card.Body>
            <Card.Title className="textColor">Machine Request Form</Card.Title>
            <Card.Text className="textColor">
              Use to get Residence Hall Association machine.
              <br />
              <br />
            </Card.Text>
            <Button variant="dark">Learn More</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted-textColor">
              Form
            </small>
          </Card.Footer>
        </Card>
        <Card
          style={{
            backgroundColor: "grey"
          }}
        >
          <Card.Body>
            <Card.Title className="textColor">Kudos Form</Card.Title>
            <Card.Text className="textColor">
              This is used to give good appreciation to someone who went above
              and beyond and desire praise for it.
            </Card.Text>
            <Button variant="dark">Learn More</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted-textColor">
              Form
            </small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <br />
    </div>
  );
}
export default Docs;