import React from "react";
import Star from "./Star";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./Context";
const Card = ({
  id,
  name,
  location,
  price_range,
  avg_rating,
  reviews_count,
}) => {
  const { setLoading } = useGlobalContext();
  return (
    <Link
      to={`/services/${id}`}
      className="card"
      onClick={() => setLoading(true)}
    >
      <h2 className="title one">{name}</h2>
      <div className="middle">
        <p className="location">
          <span className="indicator">City: </span>
          {location}
        </p>
        <p className="price_range">
          <span className="indicator">price-range: </span>
          {[...Array(price_range)].map(() => {
            return "$";
          })}
        </p>
      </div>
      <div className="bottom">
        {reviews_count ? (
          <>
            <Star rating={avg_rating} />{" "}
            <span style={{ display: "inline" }}>({reviews_count})</span>{" "}
          </>
        ) : (
          "No Reviews"
        )}
      </div>
    </Link>
  );
};

export default Card;
