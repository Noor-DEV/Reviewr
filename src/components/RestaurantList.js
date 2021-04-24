import React from "react";
import Restaurant from "./Restaurant";
import { useGlobalContext } from "./Context";
import Nav from "./Nav";
const RestaurantList = () => {
  const { restaurants } = useGlobalContext();

  return (
    <>
      <Nav />
      <div className="container">
        {restaurants.map((restaurant) => {
          return <Restaurant {...restaurant} key={restaurant.id} />;
        })}
      </div>
    </>
  );
};

export default RestaurantList;
