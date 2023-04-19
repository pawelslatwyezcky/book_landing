import React from 'react';

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

function App() {
  return (
    <div className="app_container">
      <Header />
      <div className="main_container">
        <Hero />
        <AboutBook />
        <ChapterHighlights />
        <Reviews />
        <MeetCharacters />
        <AboutAuthor />
        <BuyNow />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
