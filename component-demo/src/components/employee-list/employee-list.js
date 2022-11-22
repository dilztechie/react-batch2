import React from "react";
import Employee from "../employee/employee";

export default class EmployeeList extends React.Component {
  render = () => (
    <div>
      <h3>Employees in the Organization</h3>
      {this.props.employees.map(employee =>
        <Employee
          key={employee.id}
          id={employee.id}
          name={employee.name}
          designation={employee.designation}
          skills={employee.skills}
          salary={employee.salary} />
      )}
    </div>
  )
}