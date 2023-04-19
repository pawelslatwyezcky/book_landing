import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <h2>About the Book</h2>
      <div className="container">
        <p>
          The Adventures of Shpoo and the Magical Forest is a thrilling
          children's book that will transport your kids into a world of magic
          and wonder. Join the little girl and her loyal dog Shpoo as they
          embark on a perilous journey through enchanted forests, underground
          caves, and floating castles, to defeat the evil sorcerer and restore
          peace to the land.
        </p>
        <img src="./assets/about_1.png" alt="" />
      </div>
      <div className="container">
        <img src="./assets/about_2.png" alt="" />
        <p>
          This beautifully illustrated book is perfect for children aged 6-10
          who love adventure, fantasy, and animals. It will ignite their
          imagination and inspire them to be brave, kind, and true to
          themselves.
        </p>
      </div>
      <button className="buy-button">
        <a href="https://www.amazon.com/dp/B0C2N8Z1RM" target="_blank">
          Buy Now
        </a>
      </button>
    </section>
  );
};

export default AboutSection;
