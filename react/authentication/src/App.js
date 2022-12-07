import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AdminPage from './components/admin-page/admin-page';
import LoginPage from './components/login-page/login-page';
import PublicPage from './components/public-page/public-page';
import UserPage from './components/user-page/user-page';
import useToken from './hooks/useToken';

export default function App() {
  const { token, setToken } = useToken()

  if (!token) return <LoginPage setToken={setToken} />

  return <div className="App">
    <header className="App-header">Dilz Inc.</header>
    <div className='wrapper'>
      <BrowserRouter>
        <Switch>
          <Route path='/public'>
            <PublicPage />
          </Route>
          <Route path='/user'>
            <UserPage />
          </Route>
          <Route path='/admin'>
            <AdminPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  </div>
}