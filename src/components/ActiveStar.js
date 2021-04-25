import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { useGlobalContext } from "./Context";
const ActiveStar = () => {
  const { activeRating, setActiveRating, hover, setHover } = useGlobalContext();

  return (
    <div className="active-star">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(0)}
            key={ratingValue}
          >
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                setActiveRating(ratingValue);
                if (ratingValue === 1 && activeRating === 1) {
                  setActiveRating(0);
                }
              }}
            />
            {ratingValue <= (hover || activeRating) ? (
              <BsStarFill
                className="activeStar"
                style={{ marginRight: ".5rem" }}
              />
            ) : (
              <BsStar className="activeStar" style={{ marginRight: ".5rem" }} />
            )}
          </label>
        );
      })}
    </div>
  );
};

export default ActiveStar;
