import React from "react";
import "./chinese-restaurants.css";
import Restaurant from '../restaurant/restaurant'
import { useSelector } from "react-redux";

export default function ChineseRestaurants() {
  const chineseRestaurants = useSelector(state => state.chinese)

  return <div className="wrapper">
    <h3>Chinese Restaurants</h3>
    {chineseRestaurants.map(restaurant =>
      <Restaurant key={restaurant.id} restaurant={restaurant} />)}
  </div>
}