import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as ReactLogo } from '/public/assets/logo_nomnom.svg';

const Slide = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background:#F8F8FF;
`;

const HeaderDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export default () => {
    return (
        <Slide>
            <HeaderDiv>
                <ReactLogo />
                <LandingLink />
            </HeaderDiv>

            <ContentDiv>
                <ContentHeader></ContentHeader>
                <ContentText></ContentText>
                <ContentButton></ContentButton>
            </ContentDiv>

            <Illustration></Illustration>
        </Slide>
    );
};