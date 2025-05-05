import React, { useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { styled } from 'styled-components';
import MainPage from './Pages/MainPage';
import AboutMe from './Pages/AboutMe';
import Resume from './Pages/Resume';
import Footer from './Components/Footer';
import SelfSummary from './Components/SelfSummary';
import ScrollToTop from './Components/ScrollToTop';

const AppContainer = styled.div`
  padding-top: 150px; // height of SelfSummary to offset
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 60px;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 100px 10px 30px 10px;
  }
`;

const App: React.FC = () => {
  const footerRef = useRef<HTMLDivElement | null>(null);

  // Function to smoothly scroll to Footer
  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <AppContainer>
        <SelfSummary scrollToFooter={scrollToFooter} />
        
        <Routes>
          <Route path="/Projects" element={<MainPage />} />
          <Route path="/" element={<AboutMe />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </AppContainer>

      <div ref={footerRef}>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
