import React from "react";
import './cart.css'

export default class Cart extends React.Component {
  state = {
    items: []
  }

  render = () => <div className="cart">
    <strong>Items</strong>&nbsp;[ &nbsp;
    {this.state.items.map(item => <li>{item.name} | {item.cost}</li>)}
    &nbsp; ]
    Total Cost: {this.totalCost()}
  </div>

  totalCost = () => {
    let totalCost = 0
    this.state.items.map(item => totalCost += item.cost)
    return totalCost
  }
}