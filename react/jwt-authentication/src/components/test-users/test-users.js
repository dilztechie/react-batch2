import React from "react";
import UserDetails from "../user-details/user-details";
import "./test-users.css";

export default class TestUsers extends React.Component {
  state = {
    users: []
  }

  componentDidMount = () =>
    fetch('http://localhost:3030/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data }))
      .catch(console.log)

  render = () => <>
    {this.state.users.map(data => <>
      <UserDetails id={data.id} user={data.user} />
    </>)}
  </>
}