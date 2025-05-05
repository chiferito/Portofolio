import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { styled } from "styled-components";
import { PersonalInfo } from "../data";
import { Column, Row } from "../Styles/StyledComponents";
import LogoButton from "./LogoButton";
import MainPage from "../Pages/MainPage";
import ContactPage from "../Pages/ContactPage";
import AboutMe from "../Pages/AboutMe";

const SelfSummaryContainer = styled(Column)`
`;

const TopRow = styled(Row)`
  justify-content: space-between;
`
const Title = styled.div`
  font-size: 2em;
  font-family: "PhoenixGaming", sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const Description =styled.div `
  font-size: 2rem;
  max-width: 60vw;
  font-family: "PixelGame", sans-serif;
  color: silver;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1rem;
    line-height: 1rem;
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 30px;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const NavbarLink = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  color: green;
  font-weight: bold;

  &:hover {
    color: lightgreen;
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 0;
  }
  `;


const SelfSummary: React.FC = () => {
  return (
    <SelfSummaryContainer>
      <TopRow>
        <Row>
          <Title>{PersonalInfo.name}</Title>
        </Row>

        <Row>
        <Navbar>
          <NavbarLink to="/about-me">About me</NavbarLink>
          <NavbarLink to="/">Projects</NavbarLink>
          <NavbarLink to="/">Resume</NavbarLink>
          <NavbarLink to="/contact">Contact</NavbarLink>
        </Navbar>
        </Row>

        <Row>
          <LogoButton source="/images/logos/github.png" size={50} margin={12} linkTo={PersonalInfo.links.github} />
          <LogoButton source="/images/logos/linkedIn.png" size={50} margin={12} linkTo={PersonalInfo.links.linkedIn} />
          <LogoButton source="/images/logos/itch.io.png" size={50} margin={12} linkTo={PersonalInfo.links.itchIO} />
        </Row>
      </TopRow>
      <Description>{PersonalInfo.introduction}</Description>
    </SelfSummaryContainer>
  );
};

export default SelfSummary;
