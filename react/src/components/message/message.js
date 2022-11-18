import React from "react";
import './message.css'

export default class CmpMessage extends React.Component {
  state = {
    id: this.props.id,
    text: this.props.message.text,
    author: this.props.message.author,
    created: this.props.message.created,
    updated: this.props.message.updated,
    textDisabled: true,
    btnEditDelete: 'block',
    btnSave: 'none'
  }

  UNSAFE_componentWillReceiveProps = (props) => this.setState({
    id: props.message.id,
    text: props.message.text,
    author: props.message.author,
    created: props.message.created,
    updated: props.message.updated
  })

  render = () => {
    let handleDelete = this.props.handleDelete
    return (
      <div className="message">
        <dl>
          <dt>
            Message from&nbsp;
            <span className="author">
              {this.state.author}
            </span>
          </dt>
          <dd>
            <input
              id={"text" + this.state.id}
              className="text"
              value={this.state.text}
              disabled={this.state.textDisabled}
              onChange={this.handleChange.bind(this)} />
          </dd>
          <dd>
            <span className="dates">
              Created:{this.state.created.toLocaleDateString()}&nbsp;
              Updated:{this.state.updated.toLocaleDateString()}
            </span>
          </dd>
          <dd>
            <div id="btnEditDelete" style={{ display: this.state.btnEditDelete }}>
              <button onClick={this.handleEdit.bind(this)}>Edit</button>
              &nbsp;
              <button onClick={() => handleDelete(this.state.id)}>Delete</button>
            </div>
            <div id="btnSave" style={{ display: this.state.btnSave }}>
              <button onClick={this.handleSave.bind(this)}>Save</button>
            </div>
          </dd>
        </dl>
      </div>
    )
  }

  handleEdit = (event) => {
    event.preventDefault()
    this.setState({
      text: '',
      textDisabled: false,
      btnEditDelete: 'none',
      btnSave: 'block'
    })
  }

  handleSave = (event) => {
    event.preventDefault()
    this.setState({
      text: document.getElementById("text" + this.state.id).value,
      textDisabled: true,
      btnEditDelete: 'block',
      btnSave: 'none'
    })
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({ text: event.target.value })
  }
}