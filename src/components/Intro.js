import React from "react";
import styled from "styled-components";
import Woman from "../img/woman.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: calc(
    100vh - 50px
  ); //our navbar is 50px and we want our intro to be 100% by keeping navbar in mind
  display: flex;
  padding: 20px;
  @media only screen and (max-width:480px){
    flex-direction: column;
  }
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width:480px){
    width: 100%;
    height: 100%;
  }
`;
const Title = styled.h1`
  width: 60%;
  font-size: 60px;
  @media only screen and (max-width:480px){
    width: 100%;
    font-size: 50px;
  }
`;
const Desc = styled.div`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width:480px){
    width: 100%;
  }
`;
const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width:480px){
    width: 100%;
    flex-direction: column;
  }
`;
const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
  @media only screen and (max-width:480px){
    margin-bottom: 20px;
  }
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;
const Phone = styled.span`
  color: #fd657f;
  font-weight: bold;
`;
const ContactText = styled.span`
  color: #9e9e9e;
  margin-top: 5px;
`;
const Right = styled.div`
  width: 40%;
  @media only screen and (max-width:480px){
    display: none;
  }
`;
const Image = styled.img`
  width: 90%;
`;
const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Start the Creative Age</Title>
        <Desc>
          We believe that designing efficient products and services for our
          clients buisness help us to build close relationships with our
          Clients.
        </Desc>
        <Info>
          <Button>LETS START</Button>
          <Contact>
            <Phone>Call us +91 - 9602205368</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={Woman} />
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Intro;
