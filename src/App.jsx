import React from 'react';
import styled from 'styled-components';

import Header from './components/Header.jsx';
import Hero from './components/HeroSection.jsx';
import AboutBook from './components/AboutSection.jsx';
import ChapterHighlights from './components/HighlightsSection.jsx';
import Reviews from './components/ReviewsSection.jsx';
import MeetCharacters from './components/CharactersSection.jsx';
import AboutAuthor from './components/AuthorSection.jsx';
import BuyNow from './components/BuyNowSection.jsx';
import Contact from './components/ContactSection.jsx';
import Footer from './components/Footer';
import './App.css';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex-grow: 1;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <Hero />
        <AboutBook />
        <ChapterHighlights />
        <Reviews />
        <MeetCharacters />
        <AboutAuthor />
        <BuyNow />
        <Contact />
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App;
