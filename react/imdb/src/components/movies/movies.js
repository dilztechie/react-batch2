import React, { useEffect, useState } from "react";
import getMovies, { setMovie } from "../../services/movies";
import Movie from "../movie/movie";
import "./movies.css";

export default function Movies() {
  let genres = [
    "Action", "Adventure", "Animation",
    "Biography",
    "Comedy", "Crime",
    "Documentary", "Drama",
    "Family", "Fantasy",
    "History", "Horror",
    "Musical", "Mystery",
    "Romance",
    "Sci-fi", "Short Film", "Sports", "Superhero",
    "War", "Western"
  ]

  let languages = ["English", "Malayalam", "Marathi", "Telugu", "Tamil", "Hindi", "Kannada"]

  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState('')
  const [stars, setStars] = useState('')
  const [director, setDirector] = useState('')
  const [release, setRelease] = useState(0)
  const [rating, setRating] = useState(0)

  const [alert, setAlert] = useState(false)

  let mounted = true

  useEffect(() => {
    if (movies.length && !alert) return
    getMovies().then(movies => {
      if (mounted) {
        setMovies(movies)
        setAlert(false)
      }
    })
    return () => mounted = false
  }, [alert, movies])

  const handleSubmit = event => {
    event.preventDefault()
    let language = document.getElementById('language').value
    let selectedGenre = document.getElementById('genre').selectedOptions
    let genre = []
    for (let index = 0; index < selectedGenre.length; ++index)
      if (selectedGenre[index].selected) genre.push(selectedGenre[index].value)
    setMovie({ "movie": { title, stars, director, language, release, genre, rating } })
    setTitle('')
    setStars('')
    setDirector('')
    for (let index = 0; index < selectedGenre.length; ++index)
      selectedGenre[index].selected = false
    document.getElementById('language').value = ''
    setRelease(0)
    setRating(0)
    if (mounted) setAlert(true)
  }

  return <div className="wrapper">
    <div className="header">Top Rated Movies</div>
    {movies.map(eachMovie => <Movie movie={eachMovie.movie} key={eachMovie.id} />)}
    <hr />
    {alert && <h3>Submit Successful</h3>}
    <form onSubmit={handleSubmit}>
      <input value={title} placeholder="title" onChange={event => setTitle(event.target.value)} />
      <input value={stars} placeholder="stars" onChange={event => setStars(event.target.value)} />
      <input value={director} placeholder="director" onChange={event => setDirector(event.target.value)} /> <br />
      <select multiple id="genre">
        <option value="" disabled>---genre---</option>
        {genres.map(genre => <option value={genre}>{genre}</option>)}
      </select>
      <select id="language">
        <option value="" disabled>---language---</option>
        {languages.map(language => <option value={language}>{language}</option>)}
      </select>
      <input type="number" value={release} placeholder="release" onChange={event => setRelease(parseInt(event.target.value))} />
      <input type="number" value={rating} placeholder="rating" onChange={event => setRating(parseFloat(event.target.value))} /> <br />
      <button type="submit">Submit</button>
    </form>
  </div>
}