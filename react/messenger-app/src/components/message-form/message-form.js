import React from "react";
import Message from "../../objects/Message";
import './message-form.css';

export default class MessageForm extends React.Component {
  render = () => {
    let handlePost = this.props.handlePost
    return (
      <div className="messageForm">
        <input id="author" placeholder="your name?" />
        <input id="text" placeholder="say something..." />
        <button onClick={() => {
          let text = document.getElementById("text").value
          let author = document.getElementById("author").value
          let newMessage = new Message(text, author)
          handlePost(newMessage)
          document.getElementById("text").value = ''
          document.getElementById("author").value = ''
        }}>
          Post
        </button>
      </div>
    )
  }
}