import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import CreateEmployee from './components/create-employee/create-employee';
import ListEmployees from './components/list-employees/list-employees';

function App() {
  return (<div className="App">
    <header className="App-header">
      Employee Management System
    </header>
    <Router>
      <div className='container'>
        <Switch>
          <Route exact path="/" component={ListEmployees} />
          <Route exact path="/employees" component={ListEmployees} />
          <Route path="/edit-employee/:id" component={CreateEmployee} />
        </Switch>
      </div>
    </Router>
  </div>)
}

export default App