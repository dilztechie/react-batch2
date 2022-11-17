import React from "react";
import MessageForm from "../message-form/message-form";
import MessageList from "../message-list/message-list";
import './message-container.css'

export default class MessageContainer extends React.Component {
  render = () => (
    <div>
      <h3 className="heading">Messages</h3>
      <MessageList />
      <MessageForm />
    </div>
  )
}