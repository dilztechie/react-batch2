import React from "react";
import './message.css'

export default class CmpMessage extends React.Component {
  render() {
    return (
      <div>
        {this.props.messages.map(message => (
          <dl>
            <dt>Message from <span className="author">{message.author}</span></dt>
            <dd>{message.text}</dd>
          </dl>
        ))}
      </div>
    )
  }
}