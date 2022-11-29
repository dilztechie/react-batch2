import React, { useReducer, useState } from "react";
import "./product.css";

const products = [
  { unicode: 0x1F368, name: 'ice cream', price: 25 },
  { unicode: 0x1F382, name: 'cake', price: 450 },
  { unicode: 0x1F36B, name: 'chocolate', price: 125 },
  { unicode: 0x1F369, name: 'doughnut', price: 50 },
  { unicode: 0x1F36D, name: 'lolypop', price: 5 }
]

export default function Product() {

  // let cartReducer = (state, product) => [...state, product]
  let cartReducer = (state, action) => {
    switch (action.type) {
      case 'add': return [...state, action.product]
      case 'remove':
        const productIndex = state.findIndex(product => product.name === action.product.name)
        if (productIndex < 0) return state
        const update = [...state]
        update.splice(productIndex, 1)
        return update
      case 'clear': {
        state = []
        return state
      }
      default: return state
    }
  }

  // let totalReducer = (state, price) => state + price
  /*
  let totalReducer = (state, action) =>
    action.type === 'add' ? state + action.price : state - action.price
  */

  // const [cart, setCart] = useState([])
  let [cart, setCart] = useReducer(cartReducer, [])

  // const [total, setTotal] = useState(0)
  // const [total, setTotal] = useReducer(totalReducer, 0)

  /*
  let add = (product) => {
    // setCart(current => [...current, product])
    setCart(product)

    setTotal(product.price)
  }
  */
  let add = (product) => {
    // const { item, price } = product
    // setCart({ item, type: 'add' })
    // setTotal({ price, type: 'add' })
    setCart({ product, type: 'add' })
  }

  let remove = (product) => {
    // const { item, price } = product
    // setCart({ item, type: 'remove' })
    // setTotal({ price, type: 'remove' })
    setCart({ product, type: 'remove' })
  }

  /*
  let getTotal = () => total.toLocaleString(undefined, {
    minimumFractionDigits: 2, maximumFractionDigits: 2
  })
  */
  let getTotal = (cart) => {
    const total = cart.reduce((totalCost, product) => totalCost + product.price, 0)
    return total.toLocaleString(undefined, {
      minimumFractionDigits: 2, maximumFractionDigits: 2
    })
  }

  let getCount = (cart, product) => {
    let count = 0
    cart.map(item => {
      if (item.unicode === product.unicode) ++count
    })
    return count
  }

  let emptyCart = () => {
    setCart({ type: 'clear' })
  }

  return (<>
    <div className="wrapper">
      <div className="count">
        Shopping Cart: {cart.length} total item(s)
      </div>
      <div className="total">Total Amount: {getTotal(cart)}</div>
    </div>
    <div className="products">
      {products.map(product => (<div key={product.unicode}>
        <div className="product">
          <span>{String.fromCodePoint(product.unicode)}</span>
        </div>
        <button onClick={() => add(product)}>+</button> &nbsp;
        {getCount(cart, product)} &nbsp;
        <button onClick={() => remove(product)}>-</button>
      </div>))}
    </div>
    <div>
      <button onClick={() => emptyCart()}>Empty Cart</button>
    </div>
  </>)
}