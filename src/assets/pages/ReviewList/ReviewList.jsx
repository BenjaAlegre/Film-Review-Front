import './ReviewList.css';

const reviews = [
  {
    title: "Great Product",
    description: "I really enjoyed using this product. It exceeded my expectations in every way.",
    rating: 5
  },
  {
    title: "Good Value",
    description: "This product offers good value for the price. I would recommend it to others.",
    rating: 4
  },
  {
    title: "Average Experience",
    description: "The product is okay, but it did not meet all my expectations.",
    rating: 3
  },{
    title: "Great Product",
    description: "I really enjoyed using this product. It exceeded my expectations in every way.",
    rating: 5
  },
  {
    title: "Good Value",
    description: "This product offers good value for the price. I would recommend it to others.",
    rating: 4
  },
  {
    title: "Average Experience",
    description: "The product is okay, but it did not meet all my expectations.",
    rating: 3
  },
];

const ReviewList = () => {
  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <div className="review" key={index}>
          <h3 className="review-title">{review.title}</h3>
          <p className="review-description">{review.description}</p>
          <div className="review-rating">Rating: {review.rating} / 5</div>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
