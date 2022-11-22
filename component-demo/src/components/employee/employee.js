import React from "react";
import './employee.css'

export default class Employee extends React.Component {
  render = () => {
    let id = this.props.id
    let name = this.props.name
    let designation = this.props.designation
    let skills = this.props.skills
    let salary = this.props.salary
    return (<div className="card">
      <p>
        <strong>Employee</strong> <br />
        id: {id}<br />
        name: {name}<br />
        designation: {designation}<br />
        skills: {skills.join(', ')}<br />
        salary: {salary}
      </p>
    </div>)
  }
}