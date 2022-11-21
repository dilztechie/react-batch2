import React from "react";
import CmpMessage from "../message/message";
import './message-list.css'

export default class MessageList extends React.Component {
  state = {
    messages: this.props.messages
  }

  UNSAFE_componentWillReceiveProps = (props) => this.setState({ messages: props.messages })

  handleDelete = (id) => this.setState({
    messages: this.state.messages.filter(message => message.id !== id)
  })

  handleSave = (id, text) => {
    for (let message of this.state.messages) {
      if (message.id === id) {
        message.text = text
        message.updated = new Date()
      }
    }
  }

  render = () => (
    <div>
      {this.state.messages.map(message =>
        <CmpMessage
          key={message.id}
          id={message.id}
          message={message}
          handleDelete={this.handleDelete}
          handleSave={this.handleSave} />
      )}
    </div>
  )
}