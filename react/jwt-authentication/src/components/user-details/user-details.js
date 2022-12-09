import React from "react";
import "./user-details.css";

export default class UserDetails extends React.Component {
  render = () => <>
    <div>
      <p><strong>id</strong>: {this.props.id}</p>
      <p><strong>username</strong>: {this.props.user.username}</p>
      <p><strong>email</strong>: {this.props.user.email}</p>
      <p><strong>password</strong>: {this.props.user.password}</p>
      <p><strong>role</strong>: {this.props.user.role}</p>
    </div>
    <hr />
  </>
}