import React from "react";
import { styled } from "styled-components";
import Game from "../Components/Game";
import { games } from "../data";
import { Column } from "../Styles/StyledComponents";

const GamesContainer = styled(Column)`
  gap: 100px;
  padding: 20px;

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

const Seperator = styled.div`
  width: 100%;
  height: 1px;
  background: silver;
  opacity: 0.2;
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

const Container = styled(Column)`
  align-items: center;
  // margin-top: 80px;

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

const MainPage: React.FC = () => (
  <Column style={{ alignItems: 'center', gap: '30px' }}>
  <Container>
      <Title>Projects</Title>
      <Divider />
  </Container>

  <GamesContainer>
    {games.map((game, index) => (
      <React.Fragment key={index}>
        <Game game={game} />
        {index !== games.length - 1 && <Seperator />}
      </React.Fragment>
    ))}
  </GamesContainer>
</Column>
);


export default MainPage;
