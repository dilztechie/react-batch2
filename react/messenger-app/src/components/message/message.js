import React from "react";
import './message.css'

export default class CmpMessage extends React.Component {
  state = {
    id: this.props.message.id,
    text: this.props.message.text,
    author: this.props.message.author,
    created: this.props.message.created,
    updated: this.props.message.updated,
    textDisabled: true
  }

  render = () => (
    <div className="message">
      <dl>
        <dt>
          Message&nbsp;
          {this.state.id}&nbsp;
          from&nbsp;
          <span className="author">
            {this.state.author}
          </span>
        </dt>
        <dd>
          <input
            id={this.state.id}
            className="text"
            value={this.state.text}
            disabled={this.state.textDisabled}
            onChange={this.handleChange.bind(this)} />
        </dd>
        <dd>
          <span className="created">
            Created: {
              this.state.created.getDate() + "-" +
              (1 + this.state.created.getMonth()) + "-" +
              (1900 + this.state.created.getYear())
            }
          </span>
        </dd>
        <dd>
          <button onClick={this.handleEdit.bind(this)}>
            Edit
          </button>
          &nbsp;
          <button onClick={this.handleDelete.bind(this)}>
            Delete
          </button>
        </dd>
      </dl>
    </div>
  )

  handleEdit = (event) => {
    event.preventDefault()
    this.setState({ text: '' })
    this.setState({ textDisabled: false })
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({ text: event.target.value })
  }

  handleDelete = (event) => alert("You Clicked Delete: " + this.state.id)
}