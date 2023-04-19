import React from 'react';
import './ReviewsSection.css';

const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Emily W.',
      image: './assets/reviewer1.png',
      quote:
        'My daughter and I loved this book! The adventures were so exciting and the illustrations were beautiful.',
    },
    {
      name: 'Mark D.',
      image: './assets/reviewer2.png',
      quote:
        "I bought this book for my nephew and he couldn't put it down! It's a great way to get kids interested in reading.",
    },
    {
      name: 'Sarah K.',
      image: './assets/reviewer3.png',
      quote:
        "The characters are so lovable and the story is so engaging. I can't wait for the sequel!",
    },
  ];

  return (
    <section className="reviews-section" id="reviews">
      <h2>What Readers are Saying</h2>
      <div className="reviews">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <img
              src={review.image}
              alt={review.name}
              className="review-image"
            />
            <div>
              <p className="review-quote">{review.quote}</p>
              <p className="review-name">{review.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
