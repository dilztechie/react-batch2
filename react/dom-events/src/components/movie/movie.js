import React, { useEffect, useState } from "react";
import getMovieInformation from "../../services/movie";
import "./movie.css";

export default function Movie({ name }) {
  const [movieInformation, setMovieInformation] = useState({})

  useEffect(
    () => {
      getMovieInformation(name)
        .then(info => setMovieInformation(info))
    }, [name]
  )

  return <div>
    <h3>Movie Information</h3>
    <ul>
      <li><strong>title: </strong>{movieInformation.title}</li>
      <li><strong>year: </strong>{movieInformation.year}</li>
      <li><strong>stars: </strong>{movieInformation.stars}</li>
      <li><strong>language: </strong>{movieInformation.language}</li>
    </ul>
  </div>
}