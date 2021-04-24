import React from "react";
import Star from "./Star";

const Review = ({ name, content, rating }) => {
  return (
    <div className="review">
      <h2 className="reviewer">{name}</h2>
      <p className="review-content">{content}</p>
      <Star rating={rating} />
    </div>
  );
};

export default Review;
