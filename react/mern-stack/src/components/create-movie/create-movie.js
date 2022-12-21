import axios from "axios";
import React from "react";
import { Link, Navigate } from "react-router-dom";

export default class CreateMovie extends React.Component {
  constructor(props) {
    super(props)
    this.genres = ['Action', 'Adventure', 'Animated', 'Biography', 'Comedy', 'Crime',
      'Drama', 'Family', 'Fantasy', 'Horror', 'Kids', 'Musical', 'Psychological', 'Romance',
      'Suspense', 'Thriller']
    this.languages = ['Hindi', 'Tamil', 'Telugu', 'English', 'Marathi', 'Bengali', 'Kannada',
      'Punjabi', 'Malayalam', 'Gujarathi']
    this.state = {
      title: '',
      starring: [],
      directors: [],
      genres: [],
      language: '',
      year: 0
    }
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.setState({ title: document.getElementById('title').value })
    let starring = document.getElementById('starring').value.toString().split('\n')
    this.setState({ starring: starring })
    let directors = document.getElementById('directors').value.toString().split('\n')
    this.setState({ directors: directors })
    let selectedGenres = document.querySelectorAll('#genres option:checked')
    this.setState({ genres: Array.from(selectedGenres).map(option => option.value) })
    this.setState({ language: document.getElementById('language').value })
    this.setState({ year: document.getElementById('year').value })
    console.log(this.state)
    axios.post('http://localhost:8082/api/movies', this.state).then(response => {
      this.setState({
        title: '',
        starring: [],
        directors: [],
        genres: [],
        language: '',
        year: 0
      })
      Navigate('/')
    }).catch(error => console.log('Error in Creation of Movie!'))
  }

  render = () => <div className="createMovie">
    <div className="container">
      <div className="row">
        <div className="col-md m-auto">
          <br />
          <Link to="/" className="btn btn-outline-warning float-left">
            All Movies
          </Link>
        </div>
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Add Movie</h1>
          <p className="lead text-center">Create new Movie</p>
          <form noValidate onSubmit={this.handleOnSubmit}>
            <div className="form-group">
              <input type="text" id="title" placeholder="title of the movie?" className="form-control" />
            </div>
            <br />
            <div className="form-group">
              <textarea id="starring" placeholder="star cast of the movie?" className="form-control" />
            </div>
            <br />
            <div className="form-group">
              <textarea id="directors" placeholder="directors of the movie?" className="form-control" />
            </div>
            <br />
            <div className="form-group">
              <select multiple id="genres" className="form-control">
                <option value="" disabled>---Select Genres---</option>
                {this.genres.map(genre => <option key={genre} value={genre}>{genre}</option>)}
              </select>
            </div>
            <br />
            <div className="form-group">
              <select id="language" className="form-control">
                <option value="" disabled>---Select Language---</option>
                {this.languages.map(language => <option key={language} value={language}>{language}</option>)}
              </select>
            </div>
            <br />
            <div className="form-group">
              <input type="number" id="year" placeholder="year of the movie?" className="form-control" />
            </div>
            <input type="submit" className="btn btn-outline-warning btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
}