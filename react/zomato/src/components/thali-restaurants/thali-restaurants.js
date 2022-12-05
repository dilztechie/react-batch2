import React from "react";
import "./thali-restaurants.css";
import Restaurant from '../restaurant/restaurant'
import { useSelector } from "react-redux";

export default function ThaliRestaurants() {
  const thaliRestaurants = useSelector(state => state.thali)

  return <div className="wrapper">
    <h3>Thali Restaurants</h3>
    {thaliRestaurants.map(restaurant =>
      <Restaurant key={restaurant.id} restaurant={restaurant} />)}
  </div>
}