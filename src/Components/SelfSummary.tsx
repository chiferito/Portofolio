import React from 'react';
import { styled } from 'styled-components';
import { PersonalInfo } from '../data';
import { Column, Row } from '../Styles/StyledComponents';
import LogoButton from './LogoButton';
import { Link } from 'react-router-dom';

interface SelfSummaryProps {
  scrollToFooter: () => void;  // Prop for scrolling to Footer
}

const SelfSummaryContainer = styled(Column)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
  background-color: #121212; // Match your page background
  padding: 20px 60px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const TopRow = styled(Row)`
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 2em;
  font-family: "PhoenixGaming", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const Description = styled.div`
  font-size: 1.5rem;
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

const NavbarAnchor = styled.button`
  font-size: 2rem;
  text-decoration: none;
  color: green;
  font-weight: bold;
  background: none;
  border: none;

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

const SelfSummary: React.FC<SelfSummaryProps> = ({ scrollToFooter }) => {
  return (
    <SelfSummaryContainer>
      <TopRow>
        <Row>
          <Column>
          <Title>{PersonalInfo.name}</Title>
          <Description>{PersonalInfo.introduction}</Description></Column>
        </Row>

        <Row>
          <Navbar>
            <NavbarLink to="/About-me">About me</NavbarLink>
            <NavbarLink to="/Projects">Projects</NavbarLink>
            <NavbarLink to="/Resume">Resume</NavbarLink>
            <NavbarAnchor onClick={scrollToFooter}>Contact</NavbarAnchor>
          </Navbar>
        </Row>

        <Row>
          <LogoButton
            source="/images/logos/github.png"
            size={50}
            margin={12}
            linkTo={PersonalInfo.links.github}
          />
          <LogoButton
            source="/images/logos/linkedIn.png"
            size={50}
            margin={12}
            linkTo={PersonalInfo.links.linkedIn}
          />
          <LogoButton
            source="/images/logos/itch.io.png"
            size={50}
            margin={12}
            linkTo={PersonalInfo.links.itchIO}
          />
        </Row>
      </TopRow>
      
    </SelfSummaryContainer>
  );
};

export default SelfSummary;
