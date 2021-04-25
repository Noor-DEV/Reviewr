import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useGlobalContext } from "./Context";
import Star from "./Star";
import Form from "./Form";
import Review from "./Review";
import Loading from "./Loading";
const url = "https://reviewrz.herokuapp.com/api/v1/rests";
const RestDetails = () => {
  const {
    showForm,
    setShowForm,
    reviews,
    setReviews,
    setDetails,
    details,
    loading,
    setLoading,
  } = useGlobalContext();

  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    fetch(`${url}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const { restaurant: restDetails, reviews } = data;
        setReviews(reviews);
        setDetails(restDetails);
        setLoading(false);
      });
  }, [id]);

  return loading ? (
    <Loading />
  ) : (
    <div className="details">
      {showForm && <Form id={id} />}
      <h1 className="details-name">{details.name}</h1>
      <Star rating={details.avg_rating} className="details-rating" />
      <p className="details-location">
        <span>Located in: </span>
        {details.location}
      </p>
      <p className="details-pr">
        <span>Price-Range: </span>
        {details.price_range}
      </p>

      {reviews.length ? <h1 className="reviews-heading">Reviews</h1> : ""}
      <div className="reviews">
        {reviews.map((review) => {
          return <Review {...review} key={review.id} />;
        })}
      </div>
      <button
        className="review-btn"
        onClick={() => {
          setShowForm(true);
          window.scroll({ top: 0, left: 0, behavior: "smooth" });
          document.body.classList.add("noscroll");
        }}
      >
        Review
      </button>
    </div>
  );
};

export default RestDetails;
