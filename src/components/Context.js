import React, { useEffect, useState, useContext, createContext } from "react";
import App from "../App";
const base_url = "http://localhost:3001/api/v1/rests";
const AppContext = createContext();
const Context = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [activeRating, setActiveRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState("");
  const [reviewContent, setReviewContent] = useState("");
  const [reviews, setReviews] = useState([]);
  const [addPr, setAddPr] = useState(0);
  const [addName, setAddName] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [addLocation, setAddLocation] = useState("");
  const [details, setDetails] = useState({
    name: "",
    location: "",
    price_range: "",
  });
  const createReview = (id) => {
    const data = {
      rest_id: id,
      name: user,
      content: reviewContent,
      rating: activeRating,
    };
    const postReviewUrl = `${base_url}/${id}/reviews`;
    fetch(postReviewUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews([...reviews, data.review]);
        setRestaurants(
          restaurants.map((rest) => {
            if (rest.id === data.restaurant.id) return data.restaurant;
            return rest;
          })
        );
        setDetails(data.restaurant);
        console.log(data);
      })
      .catch((err) => {
        console.log(err, "Error in posting review");
      });
  };
  // Initial Load....
  useEffect(() => {
    fetch(base_url)
      .then((res) => res.json())
      .then((data) => {
        const { restaurants: allRestaurants } = data;
        setRestaurants(allRestaurants);
      });
  }, []);
  //...

  return (
    <AppContext.Provider
      value={{
        restaurants,
        hover,
        setHover,
        activeRating,
        setActiveRating,
        showForm,
        setShowForm,
        user,
        reviewContent,
        setUser,
        setReviewContent,
        createReview,
        reviews,
        details,
        setDetails,
        setReviews,
        addPr,
        setAddPr,
        addName,
        setAddName,
        addLocation,
        setAddLocation,
        showAddForm,
        setShowAddForm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default Context;
