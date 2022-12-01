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
  const [genre, setGenre] = useState([])
  const [language, setLanguage] = useState('')
  const [release, setRelease] = useState(0)
  const [rating, setRating] = useState(0)

  useEffect(() => {
    let mounted = true
    getMovies().then(movies => {
      if (mounted) setMovies(movies)
    })
    return () => mounted = false
  }, [])

  const handleSubmit = event => {
    event.preventDefault()
    setMovie({ "movie": { title, stars, director, language, release, genre, rating } })
    setTitle('')
    setStars('')
    setDirector('')
    setGenre([])
    setLanguage('')
    setRelease(0)
    setRating(0)
  }

  const handleChangeGenre = event =>
    setGenre(Array.from(event.target.selectedOptions, option => option.value))

  return <div className="wrapper">
    <div className="header">Top Rated Movies</div>
    {movies.map(eachMovie => <Movie movie={eachMovie.movie} key={eachMovie.id} />)}
    <hr />
    <form onSubmit={handleSubmit}>
      <input value={title} placeholder="title" onChange={event => setTitle(event.target.value)} />
      <input value={stars} placeholder="stars" onChange={event => setStars(event.target.value)} />
      <input value={director} placeholder="director" onChange={event => setDirector(event.target.value)} /> <br />
      <select multiple onChange={handleChangeGenre}>
        <option value="" disabled>---genre---</option>
        {genres.map(genre => <option value={genre}>{genre}</option>)}
      </select>
      <select onChange={event => setLanguage(event.target.value)}>
        <option value="" disabled>---language---</option>
        {languages.map(language => <option value={language}>{language}</option>)}
      </select>
      <input type="number" value={release} placeholder="release" onChange={event => setRelease(parseInt(event.target.value))} />
      <input type="number" value={rating} placeholder="rating" onChange={event => setRating(parseFloat(event.target.value))} /> <br />
      <button type="submit">Submit</button>
    </form>
  </div>
}