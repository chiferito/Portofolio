import React from 'react';
import styled from 'styled-components';
import { Column } from '../Styles/StyledComponents';

const CenterContainer = styled(Column)`
  align-items: center;
  // margin-top: 80px;

  @media (max-width: 768px) {
    margin-top: 40px;
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

const PdfViewer = styled.iframe`
  width: 60vw;
  height: 80vh;
  border: none;

  @media (max-width: 768px) {
    width: 90vw;
    height: 60vh;
  }
`;

const DownloadButton = styled.a`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #25d366;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;

  &:hover {
    background-color: #1da851;
  }
`;

const Title = styled.div`
  font-size: 2em;
  font-family: "PhoenixGaming", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const Resume: React.FC = () => {
  return (
    <CenterContainer>
  <Title>Resume</Title>
  <Divider />
  <PdfViewer src="/files/resume.pdf" title="Resume PDF" />
  <DownloadButton href="/files/resume.pdf" download>
    Download Resume
  </DownloadButton>
</CenterContainer>
  );
};

export default Resume;
