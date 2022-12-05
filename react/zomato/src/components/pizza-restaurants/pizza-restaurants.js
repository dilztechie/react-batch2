import React from "react";
import { useSelector } from "react-redux";
import "./pizza-restaurants.css";
import Restaurant from '../restaurant/restaurant'

export default function PizzaRestaurants() {
  const pizzaRestaurants = useSelector(state => state.pizza)

  return <div className="wrapper">
    <h3>Pizza Restaurants</h3>
    {pizzaRestaurants.map(restaurant =>
      <Restaurant key={restaurant.id} restaurant={restaurant} />)}
  </div>
}