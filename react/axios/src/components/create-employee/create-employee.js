import React from "react";
import employeeService from "../../service/employee-service";
import "./create-employee.css";

export default class CreateEmployee extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      id: this.props.match.params.id,
      firstName: '',
      lastName: '',
      emailId: ''
    }
    this.handleFirstName = this.handleFirstName.bind(this)
    this.handleLastName = this.handleLastName.bind(this)
    this.handleEmailId = this.handleEmailId.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  componentDidMount = () => {
    if (this.state.id === '_add') return
    else {
      console.log(this.state.id)
      employeeService.getEmployeeById(this.state.id).then(response => {
        let employee = response.data
        this.setState({
          firstName: employee.firstName,
          lastName: employee.lastName,
          emailId: employee.emailId
        })
      })
    }
  }

  getTitle = () => this.state.id === '_add' ?
    <h3 className="text-center">Add Employee</h3> :
    <h3 className="text-center">Update Employee</h3>

  handleFirstName = event => this.setState({ firstName: event.target.value })
  handleLastName = event => this.setState({ lastName: event.target.value })
  handleEmailId = event => this.setState({ emailId: event.target.value })

  handleSave = event => {
    event.preventDefault()
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId
    }
    if (this.state.id === '_add')
      employeeService.createEmployee(employee).then(response =>
        this.props.history.push('/employees'))
    else
      employeeService.updateEmployee(employee, this.state.id).then(response =>
        this.props.history.push('/employees'))
  }

  handleCancel = () => this.props.history.push('/employees')

  render = () => <div>
    <br />
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          {this.getTitle()}
          <div className="card-body">
            <form>
              <div className="form-group">
                <label><strong>First Name</strong></label>
                <input placeholder="firstName" name="firstName" className="form-control"
                  value={this.state.firstName} onChange={this.handleFirstName} />
              </div>
              <div className="form-group">
                <label><strong>Last Name</strong></label>
                <input placeholder="lastName" name="lastName" className="form-control"
                  value={this.state.lastName} onChange={this.handleLastName} />
              </div>
              <div className="form-group">
                <label><strong>Email ID</strong></label>
                <input placeholder="emailId" name="emailId" className="form-control"
                  value={this.state.emailId} onChange={this.handleEmailId} />
              </div>
              <br />
              <button className="btn btn-success"
                onClick={this.handleSave}>Save</button>
              <button className="btn btn-danger" style={{ marginLeft: "10px" }}
                onClick={this.handleCancel}>Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
}