import React from "react";
import styled from "styled-components";
import App from "../img/app.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width:480px){
  flex-direction: column;
  padding: 30px 20px;
  }
`;

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width:480px){
    display: none;
  }
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width:480px){
    width: 100%;
  }
`;
const Image = styled.img`
  width: 75%;
`;
const Title = styled.span`
  font-size: 50px;
  @media only screen and (max-width:480px){
    font-size: 50px;
  }
`;
const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 20px;
`;
const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 20px;
`;
const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
`;
// const Container = styled.div``;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={App} />{" "}
      </Left>
      <Right>
        <Title>
          <b>Good</b> Design
          <br />
          <b>Good</b> Reviews
        </Title>
        <SubTitle>We know good Design means good Business.</SubTitle>
        <Desc>
          We help our clients succeed by creating their brand identies,
          outstanding designs for their websites and products to help them
          achieve their market goals.
        </Desc>
        <Desc>We care about your business and guarantee good results.</Desc>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Feature;
