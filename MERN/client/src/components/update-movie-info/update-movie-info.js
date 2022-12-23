import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateMovieInfo = props => {
    const [movie, setMovie] = useState({})
    const { _id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8082/api/movies/${_id}`)
            .then(response => setMovie(response.data))
            .catch(error => console.log(error))
    }, [_id])

    const handleOnSubmit = event => {
        event.preventDefault()
        axios.put(`http://localhost:8082/api/movies/${_id}`, movie)
            .then(response => navigate(`/show-movie/${_id}`))
            .catch(error => console.log(error))
    }

    const handleOnChange = event => setMovie({ ...movie, [event.target.name]: event.target.value })

    return (<div className="updateMovieInfo">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <br />
                    <Link to='/' className="btn btn-outline-warning float-left">
                        Movie List
                    </Link>
                </div>
                <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Edit Movie {_id}</h1>
                    <p className="lead text-center">Update Movie Info</p>
                </div>
            </div>
            <div className="col-md-8 m-auto">
                <form noValidate onSubmit={handleOnSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" placeholder="title of the movie?"
                            className="form-control" value={movie.title}
                            onChange={handleOnChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="starring">Starring</label>
                        <input type="text" name="starring" placeholder="star cast of the movie?"
                            className="form-control" value={movie.starring}
                            onChange={handleOnChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="directors">Directors</label>
                        <input type="text" name="directors" placeholder="directors of the movie?"
                            className="form-control" value={movie.directors}
                            onChange={handleOnChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="genres">Genre</label>
                        <input type="text" name="genres" placeholder="genre of the movie?"
                            className="form-control" value={movie.genres}
                            onChange={handleOnChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="language">Language</label>
                        <input type="text" name="language" placeholder="language of the movie?"
                            className="form-control" value={movie.language}
                            onChange={handleOnChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="year">Year of Release</label>
                        <input type="text" name="year" placeholder="year of release of the movie?"
                            className="form-control" value={movie.year}
                            onChange={handleOnChange} />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-outline-info btn-lg btn-block">
                        Update Movie
                    </button>
                </form>
            </div>
        </div>
    </div>)
}

export default UpdateMovieInfo