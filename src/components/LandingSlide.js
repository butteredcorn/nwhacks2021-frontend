import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as ReactLogo } from '../assets/logo_nomnom.svg';

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  width: 100%;
  height: 100%;
  background:#F8F8FF;
  overflow:hidden;
  
`;

const HeaderDiv = styled.div`
  display: flex;
  justify-content:space-between;
  width: 100%;
  height: 10%;
  padding: 0 10%;
  margin-top: 10px;
  align-items:center;
`;

const LandingLink = styled(Link)`
transition: 500ms ease background-color;
color: ${props => props.theme.textColour};
padding: 0.5rem 1rem ;
&:hover {
  cursor: pointer;
  text-decoration:none;
  color: white;
  background-color: #FF7518;
}`;

const ContentDiv = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
height:100%;
padding: 0 10%;
@media screen and (max-device-aspect-ratio: 1/1) {
    flex-direction: column;
  }
`;

const ContentHeader = styled.h1`
Font-size:3rem;
`;

const ContentText = styled.p`
Font-size:2rem;
`;

const ContentButton = styled.button`
  background-color: #FF7518;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 2rem;
  max-width:50%;
  padding: 10px;
&:hover {
  cursor: pointer;
  text-decoration:none;
  box-shadow:6px 6px 16px #E6E6E6;
}
`;

const Illustration = styled.div`
`;

const TextDiv = styled.div`
height:50%;
width:35%;
display:flex;
flex-direction:column;
justify-content:space-around;
@media screen and (max-device-aspect-ratio: 1/1) {
    width:95%;
  }
`;

const ButtonLink = styled(Link)``;

export default (props) => {

    return (
        <Slide>
            <HeaderDiv>
                <ReactLogo />
                <LandingLink to={props.alt.url}>{props.alt.text}</LandingLink>
            </HeaderDiv>

            <ContentDiv>
                <TextDiv>
                    <ContentHeader>{props.header}</ContentHeader>
                    <ContentText>{props.text}</ContentText>
                    <ButtonLink to={props.button.url}>
                        <ContentButton >{props.button.text}</ContentButton>
                    </ButtonLink>
                </TextDiv>
                <Illustration>
                    {props.illustration}
                </Illustration>
            </ContentDiv>


        </Slide>
    );
};