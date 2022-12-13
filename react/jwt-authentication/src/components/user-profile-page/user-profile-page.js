import React from "react";
import { withRouter } from "../../common/with-router";
import "./user-profile-page.css";

class UserProfilePage extends React.Component {
  constructor(props) {
    super(props)
    this.name = JSON.parse(localStorage.getItem("user")).name
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout = event => {
    localStorage.removeItem("user")
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("isRegistered")
    this.props.router.navigate("/home")
  }

  render = () => <>
    <h3>Profile</h3>
    <h4>Welcome User, {this.name}</h4>
    <button onClick={this.handleLogout}>Logout</button>
  </>
}

export default withRouter(UserProfilePage)