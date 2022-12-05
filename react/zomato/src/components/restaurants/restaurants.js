import React from "react";
import biryani from '../../assets/biryani.avif'
import thali from '../../assets/thali.avif'
import pizza from '../../assets/pizza.avif'
import chinese from '../../assets/chinese.avif'
import "./restaurants.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BiryaniRestaurants from '../biryani-restaurants/biryani-restaurants'
import ThaliRestaurants from '../thali-restaurants/thali-restaurants'
import PizzaRestaurants from '../pizza-restaurants/pizza-restaurants'
import ChineseRestaurants from '../chinese-restaurants/chinese-restaurants'

export default class Restaurants extends React.Component {
  render = () => <div className="wrapper">
    <code><strong>Best Restaurants in Mangalore</strong></code>
    <div className="logos">
      <a href="/biryani"><img src={biryani} alt="biryani" /></a>
      <a href="/thali"><img src={thali} alt="thali" /></a>
      <a href="/pizza"><img src={pizza} alt="pizza" /></a>
      <a href="/chinese"><img src={chinese} alt="chinese" /></a>
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/biryani">
              <BiryaniRestaurants />
            </Route>
            <Route path="/thali">
              <ThaliRestaurants />
            </Route>
            <Route path="/pizza">
              <PizzaRestaurants />
            </Route>
            <Route path="/chinese">
              <ChineseRestaurants />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  </div>
}