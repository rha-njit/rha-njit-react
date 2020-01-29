import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Mark from "../images/eboard/mark.jpg";
import Matt from "../images/eboard/matt.jpg";
import Sam from '../images/eboard/sam.jpg';
import Portia from "../images/eboard/portia.jpg";
import Reesha from "../images/eboard/reesha.jpg";
import Shruti from "../images/eboard/shruti.jpg";
import styled, { keyframes } from "styled-components";
import { flipInY } from 'react-animations';
import "../App.css";

function Eboad() {
  const FlipInY = styled.div`
    animation: 4s ${keyframes`${flipInY}`};
  `;
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Img src="holder.js/100px180" />
            </Card>
          </Col>
          <Col xs={8}>
            <Card className="text-center">
              <Card.Header as="h1">The Big Ten</Card.Header>
              <Card.Body>
                <Card.Title>The Executive Board of RHA</Card.Title>
                <Card.Text>
                  Improving the lives of resident on campus.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img src="holder.js/100px180" />
            </Card>
          </Col>
        </Row>
      </Container>

    <br />
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Img src="holder.js/100px180" />
            </Card>
          </Col>
          <Col xs={5}>
            <Card>
              <FlipInY><Card.Img variant="top" src={Sam} /></FlipInY>
              <Card.Body>
                <Card.Title>President</Card.Title>
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
          </Col>
          <Col>
            <Card>
              <Card.Img src="holder.js/100px180" />
            </Card>
          </Col>
        </Row>
      </Container>

      <br />
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Vice President of Administration</Card.Title>
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
          <Card.Img variant="top" src={Reesha} />
          <Card.Body>
            <Card.Title>Vice President of Programming</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={Portia} />
          <Card.Body>
            <Card.Title>National Communications Coordinator</Card.Title>
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

      <br />
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={Shruti}/>
          <Card.Body>
            <Card.Title>National Communications Coordinator in training</Card.Title>
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
          <Card.Img variant="top" src={Matt} />
          <Card.Body>
            <Card.Title>Treasurer</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Secretary</Card.Title>
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

      <br />
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Public Realtions Officer</Card.Title>
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
            <Card.Title>Tech Officer</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={Mark} />
          <Card.Body>
            <Card.Title>Membership Officer</Card.Title>
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
      <br />
      <br />
    </div>
  );
}
export default Eboad;
