import React from "react";
import './message-form.css';

export default class MessageForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input placeholder="your name?" />
          <input placeholder="say something..." />
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }
}