import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from 'react-animations';
import Card from "react-bootstrap/Card";
import "./home.css";

function Home() {
  const FadeIn = styled.div`
    animation: 6s ${keyframes`${fadeIn}`};
  `;
  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img className="bg"/>
        <Card.ImgOverlay className="text-center">
          <FadeIn><Card.Title as="h1" className="center">Residence Hall Association</Card.Title></FadeIn>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}
export default Home;
