import React from "react";
import "./restaurant.css";

export default class restaurant extends React.Component {

  handleClick = () => {
  }

  render = () => <>
    <div className="restaurant ">
      <button onClick={this.handleClick}><h3>{this.props.restaurant.name}</h3></button>
      <address>{this.props.restaurant.address}</address>
      <h4>Cusines: {this.props.restaurant.cuisines.join(', ')}</h4>
    </div>
    <div id="menu" className="menu"></div>
  </>
}