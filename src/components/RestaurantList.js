import React from "react";
import Restaurant from "./Restaurant";
import { useGlobalContext } from "./Context";
import Nav from "./Nav";
import Loading from "./Loading";
const RestaurantList = () => {
  const { restaurants, loading } = useGlobalContext();

  return loading ? (
    <Loading />
  ) : (
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
