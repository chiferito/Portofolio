import React from "react";
import styled from "styled-components";
import { PersonalInfo } from "../data";
import { Column } from "../Styles/StyledComponents";

const Container = styled(Column)`
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid rgb(238, 231, 166);

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const AboutText = styled.p`
  line-height: 1.6;
  max-width: 75vw;
  margin: 10px;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Title = styled.div`
  font-size: 2em;
  font-family: "PhoenixGaming", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const Divider = styled.div`
  width: 60vw;
  height: 2px;
  background-color: #25d366;
  margin: 20px 0;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const AboutMe: React.FC = () => {
  return (
    <Container>
      <Title>About me</Title>
      <Divider />
      <ProfileImage src={PersonalInfo.image} alt="Eric Wong-Liu" />
      <AboutText>
        <p>
        I'm a Computer Science graduate from the University of British Columbia, currently working as a Software Engineer at BBVA.
        </p>

        <p>
        I'm passionate about video games and the technology that powers them, but my interest extends beyond games—I genuinely enjoy problem solving and building efficient, user-centered software solutions.
        </p>

        <p>
        I consider myself a quick and adaptable learner. My education and professional experience have given me exposure to a variety of tech stacks, and I'm always eager to pick up new tools or dive into unfamiliar codebases when the project demands it.
        </p>

        <p>
        Whether it’s working on gameplay systems or enterprise applications, I strive to write clean, maintainable code that makes a real impact.
        </p>
       {PersonalInfo.description}
      </AboutText>
    </Container>
  );
};

export default AboutMe;