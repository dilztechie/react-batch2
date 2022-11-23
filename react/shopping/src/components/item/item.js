import React from "react";
import './item.css'

export default class Item extends React.Component {
  render = () => <div className="item">
    <button>{String.fromCodePoint(this.props.item.unicode)}</button><br />
    {this.props.item.name}<br />
    {this.props.item.price}
  </div>
}