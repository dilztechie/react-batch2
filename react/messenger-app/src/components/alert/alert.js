import React from "react";
import './alert.css'

export default class Alert extends React.Component {
  render = () => <p className={this.props.type}>{this.props.children}</p >
}