import React from "react";
import './cart.css'

export default class Cart extends React.Component {
  render = () => {
    let removeItem = this.props.removeItem
    return (<div className="cart">
      <strong>Items</strong>&nbsp;[ &nbsp;
      {this.props.cartItems.map(item => <>
        <li>{item.name} {item.price}</li>
        <button onClick={() => removeItem(item)} className="btnRemove">
          Del
        </button>
      </>)}
      &nbsp; ]
      Total Cost: {this.totalCost()}
    </div>)
  }

  totalCost = () => {
    let totalCost = 0
    this.props.cartItems.map(item => totalCost += item.price)
    return totalCost
  }
}