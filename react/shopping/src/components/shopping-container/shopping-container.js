import React from "react";
import Items from "../items/items";
import './shopping-container.css'

export default class ShoppingContainer extends React.Component {
  render = () => <div className="container">
    <div className="header">
      Please select your Item from the Items given Below
    </div>
    <Items />
  </div>
}