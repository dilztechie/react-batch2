import Axios from "axios"

const EMS_API_BASE_URL = "http://localhost:3030/employees/"

class EmployeeService {

    getAllEmployees = () => Axios.get(EMS_API_BASE_URL)

    getEmployeeById = id => Axios.get(EMS_API_BASE_URL + id)

    createEmployee = employee => Axios.post(EMS_API_BASE_URL, employee)

    updateEmployee = (employee, id) => Axios.put(EMS_API_BASE_URL + id, employee)

    deleteEmployee = id => Axios.delete(EMS_API_BASE_URL + id)

}

export default new EmployeeService()