import React from "react";
import { BsStarFill, BsStarHalf, BsStar, BsShield } from "react-icons/bs";
const Star = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<BsStarFill key={i} />);
    } else if (!Number.isInteger(rating) && Math.ceil(rating) === i) {
      stars.push(<BsStarHalf key={i} />);
    } else {
      stars.push(<BsStar key={i} />);
    }
  }
  return <div className="star">{stars}</div>;
};

export default Star;
