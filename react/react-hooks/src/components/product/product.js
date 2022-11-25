import React from "react";
import "./product.css";

const products = [
  { unicode: 0x1F368, name: 'ice cream', price: 25 },
  { unicode: 0x1F382, name: 'cake', price: 450 },
  { unicode: 0x1F36B, name: 'chocolate', price: 125 },
  { unicode: 0x1F369, name: 'doughnut', price: 50 },
  { unicode: 0x1F36D, name: 'lolypop', price: 5 }
]

export default class Product extends React.Component {
  state = {
    cart: []
  }

  add = (product) => {
    this.setState(state => ({
      cart: [...state.cart, product]
    }))
  }

  remove = (product) => {
    this.setState(state => {
      const cart = [...state.cart]
      const productIndex = cart.findIndex(eachProduct => eachProduct.name === product.name)
      if (productIndex < 0) return;
      cart.splice(productIndex, 1)
      return ({ cart })
    })
  }

  currencyOptions = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }

  getTotal = () => {
    const total = this.state.cart.reduce((totalCost, product) => totalCost + product.price, 0)
    return total.toLocaleString(undefined, this.currencyOptions)
  }

  render = () => <>
    <div className="wrapper">
      <div className="count">
        Shopping Cart: {this.state.cart.length} total item(s)
      </div>
      <div className="total">Total Amount: {this.getTotal()}</div>
    </div>
    <div className="products">
      {products.map(product => (<div key={product.unicode}>
        <div className="product">
          <span>{String.fromCodePoint(product.unicode)}</span>
        </div>
        <button onClick={() => this.add(product)}>Add</button> | 
        <button onClick={() => this.remove(product)}>Remove</button>
      </div>))}
    </div>
  </>
}