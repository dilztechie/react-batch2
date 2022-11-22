import React from "react";
// import data from "../../api/data";
import MessageForm from "../message-form/message-form";
import MessageList from "../message-list/message-list";
import './message-container.css'

export default class MessageContainer extends React.Component {
  state = {
    messages: []
  }

  UNSAFE_componentWillReceiveProps = (props) => this.setState({ messages: props.messages })

  handlePost = (message) => {
    let messages = this.state.messages
    messages.push(message)
    this.setState({
      messages: messages
    })
  }

  render = () => (
    <div>
      <h3 className="heading">Messages</h3>
      <MessageList messages={this.state.messages} />
      <MessageForm handlePost={this.handlePost} />
    </div>
  )
}