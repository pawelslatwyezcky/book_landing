import React from 'react';
import './AuthorSection.css';

const AuthorSection = () => {
  return (
    <section className="author-section">
      <h2>About the Author</h2>
      <div className="author-info">
        <div className="author_left">
          <p className="author-bio">
            Hi there! <br /> My name is Sean Pések and I'm the author of Lily's
            and Shpoo's Adventures. I've always loved writing and creating
            stories, and this book is a product of that passion. I hope you and
            your little ones enjoy reading about Lila and Shpoo's adventures as
            much as I enjoyed writing about them.
          </p>
        </div>
        <div className="author_right">
          <img
            src="./assets/author.png"
            alt="Author"
            className="author-image"
          />
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
