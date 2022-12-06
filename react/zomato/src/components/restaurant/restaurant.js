import React from "react";
import "./restaurant.css";

export default class Restaurant extends React.Component {
  flag = true

  handleClick = () => {
    let menus = document.getElementById('menus')
    menus.innerHTML = ""
    let counter = 1
    const fs = require('fs')
    while (this.flag) {
      let file = process.env.PUBLIC_URL + this.props.restaurant.menu
        + "/food" + counter++ + ".avif"
      if (fs.existsSync(file))
        menus.appendChild(document.createElement('img')).src = file
      else this.flag = false
    }
  }

  render = () => <>
    <div className="restaurant ">
      <button onClick={this.handleClick}><h3>{this.props.restaurant.name}</h3></button>
      <address>{this.props.restaurant.address}</address>
      <h4>Cusines: {this.props.restaurant.cuisines.join(', ')}</h4>
    </div>
    <div id="menus" className="menus"></div>
  </>
}