import React from "react";
import { useSelector } from "react-redux";
import "./biryani-restaurants.css";
import Restaurant from '../restaurant/restaurant'

export default function BiryaniRestaurants() {
  const biryaniRestaurants = useSelector(state => state.biryani)

  return <div className="wrapper">
    <h3>Biryani Restaurants</h3>
    {biryaniRestaurants.map(restaurant =>
      <Restaurant key={restaurant.id} restaurant={restaurant} />)}
  </div>
}