import React from 'react';
import './BuyNowSection.css';

const BuyNowSection = () => {
  return (
    <section className="buy-now-section">
      <div className="buy_now_content">
        <div className="left">
          <h2>Get Your Copy Now</h2>
          <p className="buy-now-description">
            Don't miss out on the magical adventures of Lila and Shpoo! Get your
            copy of "Adventures in the Magical World" today.
          </p>
          <div className="buy-now-buttons">
            <a
              href="https://www.amazon.com/dp/B0C1J7F6FK"
              className="buy-now-btn amazon-paper-btn"
              target="_blank"
            >
              Buy paperbook
            </a>
            <a
              href="https://www.amazon.com/dp/B0C2N8Z1RM"
              className="buy-now-btn amazon-ebook-btn"
              target="_blank"
            >
              Buy eBook
            </a>
          </div>
        </div>
        <div className="right">
          <img
            src="./assets/book_cover.png"
            alt="Book Cover"
            className="book-cover-image"
          />
        </div>
      </div>
    </section>
  );
};

export default BuyNowSection;
