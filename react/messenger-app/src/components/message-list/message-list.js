import React from "react";
import Message from "../../objects/Message";
import CmpMessage from "../message/message";
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

  render = () => (
    <div>
      {this.state.messages.map(message =>
        <CmpMessage message={message} />
      )}
    </div>
  )
}