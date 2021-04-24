import React from "react";
import ActiveStar from "./ActiveStar";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./Context";
const Form = ({ id }) => {
  const {
    setShowForm,
    setUser,
    setReviewContent,
    user,
    reviewContent,
    createReview,
    setActiveRating,
  } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    createReview(id);
    setShowForm(false);
    setUser("");
    setReviewContent("");
    setActiveRating(0);
  };
  return (
    <div className="review-form-container">
      <form className="review-form" onSubmit={handleSubmit}>
        <button
          className="cancel"
          type="button"
          onClick={() => {
            setShowForm(false);
            document.body.classList.remove("noscroll");
            setUser("");
            setReviewContent("");
            setActiveRating(0);
          }}
        >
          <FaTimes />
        </button>
        <input
          type="text"
          placeholder="Enter Reviewer's name"
          required
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <textarea
          value={reviewContent}
          onChange={(e) => setReviewContent(e.target.value)}
          required
          name="content"
          id="content"
          cols="30"
          rows="3"
          placeholder="What do you think about Our services..."
        ></textarea>
        <ActiveStar />
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
