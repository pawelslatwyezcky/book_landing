import React from 'react';
import './HighlightsSection.css';

const HighlightsSection = () => {
  const highlights = [
    {
      title: 'Chapter 1: The Magical Forest',
      image: './assets/1_chapter.png',
      description:
        'Discover the secrets of the enchanted forest and meet its fascinating inhabitants.',
    },
    {
      title: 'Chapter 2: The Enchanted Lake',
      image: './assets/2_chapter.png',
      description:
        'Dive into the mystical lake and face its perilous challenges.',
    },
    {
      title: 'Chapter 3: The Castle in the Clouds',
      image: './assets/3_chapter.png',
      description:
        'Scale the heights of the floating castle and uncover its dark secrets.',
    },
    {
      title: 'Chapter 4: The Underground Caves',
      image: './assets/4_chapter.png',
      description:
        'Explore the treacherous caves and confront the evil sorcerer and his minions.',
    },
    {
      title: 'Chapter 5: The Final Battle',
      image: './assets/5_chapter.png',
      description:
        'Join the heroes in a fierce battle against the forces of darkness.',
    },
  ];

  return (
    <section className="highlights-section" id="chapters">
      <h2>Chapter Highlights</h2>
      <div className="highlights-content">
        {highlights.map((highlight, index) => (
          <div className="highlight-card" key={index}>
            <img
              src={highlight.image}
              alt={highlight.title}
              className="highlight-image"
            />
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;
