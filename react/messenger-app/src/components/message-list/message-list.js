import React from "react";
import CmpMessage from "../message/message";
import Message from "../../objects/Message";
import './message-list.css'

export default class MessageList extends React.Component {
  state = {
    messages: [
      new Message("This is a Dummy Message", "dilz"),
      new Message("Hi There", "gopal"),
      new Message("Hello, React", "kinnu"),
      new Message("OMG!", "raj")
    ]
  }

  render() {
    return (
      <div>
        <CmpMessage messages={this.state.messages} />
      </div>
    );
  }
}