import React, { useState, useEffect } from 'react';
import './HeroSection.css';

function HeroSection() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-text">
        <div className="left_side">
          <h1>
            Adventures in the Magical World of <br />{' '}
            <span>Lily and Shpoo</span>
          </h1>
          <p>
            Join Lily and Shpoo on an incredible journey through a land filled
            with magic and wonder!
          </p>
          <button>
            <a href="https://www.amazon.com/dp/B0C2N8Z1RM" target="_blank">
              Buy Now
            </a>
          </button>
        </div>
        <div className="right_side">
          <img src="./assets/book_cover.png" alt="" className="book_cover" />
        </div>
      </div>
      <img
        className="parallax-bg"
        src="./assets/bg.png"
        alt=""
        style={{
          zIndex: '-4',
          top: `${-scrollTop / 40 > -20 ? -scrollTop / 40 : -20}px`,
        }}
      />
      <img
        className="parallax-bg"
        src="./assets/layer3.png"
        alt=""
        style={{
          zIndex: '-3',
          top: `${40 - scrollTop / 10 > -40 ? 40 - scrollTop / 10 : -40}px`,
        }}
      />
      <img
        className="parallax-bg"
        src="./assets/layer2.png"
        alt=""
        style={{
          zIndex: '-2',
          top: `${60 - scrollTop / 6.67 > -60 ? 60 - scrollTop / 6.67 : -60}px`,
        }}
      />
      <img
        className="parallax-bg"
        src="./assets/layer1.png"
        alt=""
        style={{
          zIndex: '-1',
          top: `${80 - scrollTop / 5 > -80 ? 80 - scrollTop / 5 : -80}px`,
        }}
      />
    </section>
  );
}

export default HeroSection;
