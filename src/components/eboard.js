import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Mark from "../images/eboard/mark.jpg";
import Matt from "../images/eboard/matt.jpg";
import Sam from '../images/eboard/sam.jpg';
import Sidehoe from "../images/sideHoe.png";
import Portia from "../images/eboard/portia.jpg";
import Reesha from "../images/eboard/reesha.jpg";
import Shruti from "../images/eboard/shruti.jpg";
import styled, { keyframes } from "styled-components";
import { flipInY } from 'react-animations';
import Background from "../images/backGroundBlack.png";
import "../App.css";
import "./home.css";

function Eboad() {
  const FlipInY = styled.div`
    animation: 4s ${keyframes`${flipInY}`};
  `;
  return (
    <div style={{
      backgroundImage: `url(${Background})`
    }}>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Img src={Sidehoe} />
            </Card>
          </Col>
          <Col xs={8}>
            <Card className="text-center" style={{
      backgroundImage: `url(${Background})`
    }}>
              <Card.Header as="h1" className="textColor">The Big Ten</Card.Header>
              <Card.Body>
                <Card.Title className="textColor">The Executive Board of RHA</Card.Title>
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
        <Row>
          <Col>
            <Card>
              <Card.Img src={Sidehoe} />
            </Card>
          </Col>
          <Col xs={5}>
            <Card style={{
      backgroundImage: `url(${Background})`
    }}>
              <FlipInY><Card.Img variant="top" src={Sam} /></FlipInY>
              <Card.Body>
                <Card.Title className="textColor">President</Card.Title>
                <Card.Text className="textColor">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Major: </small>
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
      <CardDeck>
        <Card style={{
      backgroundImage: `url(${Background})`
    }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title className="textColor">Vice President of Administration</Card.Title>
            <Card.Text className="textColor">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Major:</small>
          </Card.Footer>
        </Card>
        <Card style={{
      backgroundImage: `url(${Background})`
    }}>
          <Card.Img variant="top" src={Reesha} />
          <Card.Body>
            <Card.Title className="textColor">Vice President of Programming</Card.Title>
            <Card.Text className="textColor">
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Major:</small>
          </Card.Footer>
        </Card>
        <Card style={{
      backgroundImage: `url(${Background})`
    }}>
          <Card.Img variant="top" src={Portia} />
          <Card.Body>
            <Card.Title className="textColor">National Communications Coordinator</Card.Title>
            <Card.Text className="textColor">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Major:</small>
          </Card.Footer>
        </Card>
      </CardDeck>

      <br />
      <CardDeck>
        <Card style={{
      backgroundImage: `url(${Background})`
    }}>
          <Card.Img variant="top" src={Shruti}/>
          <Card.Body>
            <Card.Title className="textColor">National Communications Coordinator in training</Card.Title>
            <Card.Text className="textColor">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Major:</small>
          </Card.Footer>
        </Card>
        <Card style={{
      backgroundImage: `url(${Background})`
    }}>
          <Card.Img variant="top" src={Matt} />
          <Card.Body>
            <Card.Title className="textColor">Treasurer</Card.Title>
            <Card.Text className="textColor">
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Major:</small>
          </Card.Footer>
        </Card>
        <Card style={{
      backgroundImage: `url(${Background})`
    }}>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title className="textColor">Secretary</Card.Title>
            <Card.Text className="textColor">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Major: </small>
          </Card.Footer>
        </Card>
      </CardDeck>

      <br />
      <CardDeck>
        <Card style={{
      backgroundImage: `url(${Background})`
    }}>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title className="textColor">Public Realtions Officer</Card.Title>
            <Card.Text className="textColor">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Major:</small>
          </Card.Footer>
        </Card>
        <Card style={{
      backgroundImage: `url(${Background})`
    }}>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title className="textColor">Tech Officer</Card.Title>
            <Card.Text className="textColor">
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Major:</small>
          </Card.Footer>
        </Card>
        <Card style={{
      backgroundImage: `url(${Background})`
    }}>
          <Card.Img variant="top" src={Mark} />
          <Card.Body>
            <Card.Title className="textColor">Membership Officer</Card.Title>
            <Card.Text >
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Major: </small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <br />
      <br />
    </div>
  );
}
export default Eboad;
