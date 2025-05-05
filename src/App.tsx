import React, { useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { styled } from 'styled-components';
import MainPage from './Pages/MainPage';
import AboutMe from './Pages/AboutMe';
import Footer from './Components/Footer';
import SelfSummary from './Components/SelfSummary';

const AppContainer = styled.div`
  min-height: 90vh;
  padding: 60px;
  gap: 30px;
  
  @media (max-width: 768px) {
    gap: 0;
    padding: 30px 10px;
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
      <AppContainer>
        <SelfSummary scrollToFooter={scrollToFooter} />
        
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </AppContainer>

      {/* Add Footer with the ref */}
      <div ref={footerRef}>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
