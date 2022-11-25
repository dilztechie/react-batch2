import React from "react";
import Items from "../items/items";
import Cart from "../cart/cart"
import './shopping-container.css'

export default class ShoppingContainer extends React.Component {
  state = {
    cartItems: []
  }

  render = () => <div className="container">
    <div className="header">
      Please select your Item from the Items given Below
    </div>
    <Items handleCart={this.handleCart} />
    <Cart removeItem={this.removeItem} cartItems={this.state.cartItems} />
  </div>

  handleCart = (item) => {
    let cartItems = this.state.cartItems
    cartItems.push(item)
    this.setState({ cartItems: cartItems })
  }

  removeItem = (item) => {
    this.setState({
      cartItems: this.state.cartItems.filter(cartItem => cartItem !== item)
    })
  }
}