import { Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateMovie from './components/create-movie/create-movie';
import DeleteMovie from './components/delete-movie/delete-movie';
import UpdateMovie from './components/update-movie.js/update-movie';
import ViewAllMovies from './components/view-all-movies.js/view-all-movies';
import ViewMovie from './components/view-movie.js/view-movie';

function App() {
  return (<div className="App">
    <header className="App-header">
      Netflix
    </header>
    <Router>
      <Routes>
        <Route exact path='/' element={<ViewAllMovies />} />
        <Route path='/create-movie' element={<CreateMovie />} />
        <Route path='/show-movie' element={<ViewMovie />} />
        <Route path='/update-movie' element={<UpdateMovie />} />
        <Route path='/delete-movie' element={<DeleteMovie />} />
      </Routes>
    </Router>
  </div>)
}

export default App