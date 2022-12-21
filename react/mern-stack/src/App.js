import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateMovie from './components/create-movie/create-movie';
import DeleteMovie from './components/delete-movie/delete-movie';
import UpdateMovie from './components/update-movie.js/update-movie';
import ViewAllMovies from './components/view-all-movies.js/view-all-movies';
import ViewMovie from './components/view-movie.js/view-movie';

export default class App extends React.Component {
  render = () => <>
    <div className="App">
      <Router>
        <nav className='navbar nav-bar-expand navbar-dark bg-dark'>
          <a href='/' className='navbar-brand'>
            Netflix
          </a>
          <div className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to={'/movies'} className='nav-link'>
                All Movies
              </Link>
            </li>
            <li className='nav-item'>
              <Link to={'/create-movie'} className='nav-link'>
                Add A Movie
              </Link>
            </li>
          </div>
        </nav>
        <div className='container mt-3'>
          <Routes>
            <Route exact path='/' element={<ViewAllMovies />} />
            <Route path='/create-movie' element={<CreateMovie />} />
            <Route exact path='/movies' element={<ViewAllMovies />} />
            <Route path='/movie/:id' element={<ViewMovie />} />
            <Route path='/update-movie/:id' element={<UpdateMovie />} />
            <Route path='/delete-movie/:id' element={<DeleteMovie />} />
          </Routes>
        </div>
      </Router>
    </div>
  </>
}