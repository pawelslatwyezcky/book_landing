import React from 'react';
import './CharactersSection.css';

const CharactersSection = () => {
  const characters = [
    {
      name: 'Lily',
      image: './assets/lily.png',
      description:
        'Lily is a brave and curious little girl who loves adventure. She is kind-hearted and always willing to help others.',
    },
    {
      name: 'Shpoo',
      image: './assets/shpoo.png',
      description:
        "Shpoo is Lily's loyal and playful German Shepherd mongrel. She is always by her side, ready for any challenge.",
    },
  ];

  return (
    <section className="characters-section" id="characters">
      <h2>Meet the Characters</h2>
      <div className="characters-container">
        {characters.map((character, index) => (
          <div className={`character-card ${character.name}`} key={index}>
            <div>
              <img
                src={character.image}
                alt={character.name}
                className="character-image"
              />
              <h3 className="character-name">{character.name}</h3>
            </div>
            <p className="character-description">{character.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CharactersSection;
