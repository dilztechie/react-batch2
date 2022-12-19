import React from "react";
import "./counter.css";

export default class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 0 }
  }

  increment = () => {
    this.setState({
      value: this.state.value + 1
    })
  }

  decrement = () => this.setState({
    value: this.state.value - 1
  })

  render = () => <div className="container">
    <div className="header"><h3>Counter</h3></div>
    <button data-testid="increment" onClick={this.increment}>+</button>
    {" "}<span data-testid="value">{this.state.value}</span>{" "}
    <button data-testid="decrement" disabled={this.state.value === 0} onClick={this.decrement}>-</button>
  </div>
}