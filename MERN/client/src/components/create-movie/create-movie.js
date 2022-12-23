import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateMovie = props => {
    const [movie, setMovie] = useState({
        _id: 0,
        title: '',
        starring: '',
        directors: '',
        genres: '',
        language: '',
        year: 0
    })

    const updateId = () =>
        axios.get('http://localhost:8082/api/movies')
            .then(response => {
                let movies = response.data
                if (movies.length === 0) setMovie({ ...movie, _id: 1 })
                else {
                    for (let eachMovie of movies) {
                        if (eachMovie._id > movie._id)
                            setMovie({ ...movie, _id: ++eachMovie._id })
                    }
                }
            })
            .catch(error => console.log(error))

    updateId()

    const navigate = useNavigate()

    const handleOnSubmit = event => {
        event.preventDefault()
        axios.post('http://localhost:8082/api/movies', movie)
            .then(response => {
                setMovie({
                    _id: 0,
                    title: '',
                    starring: '',
                    directors: '',
                    genres: '',
                    language: '',
                    year: 0
                })
                navigate('/')
            })
            .catch(error => console.log(error))
    }

    const handleOnChange = event => {
        setMovie({ ...movie, [event.target.name]: event.target.value })
    }

    return (<div className="createMovie" >
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <br />
                    <Link to='/' className="btn btn-outline-warning float-left">
                        Movie List
                    </Link>
                </div>
                <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Add Movie</h1>
                    <p className="lead text-center">Create New Movie</p>
                    <form noValidate autoComplete={"off"} onSubmit={handleOnSubmit}>
                        <input type="hidden" name="_id" value={movie._id} />
                        <div className="form-group">
                            <input type="text" placeholder="title of the movie?"
                                name="title" className="form-control" value={movie.title}
                                onChange={handleOnChange} />
                        </div>
                        <br />
                        <div className="form-group">
                            <input type="text" placeholder="star cast of the movie?"
                                name="starring" className="form-control" value={movie.starring}
                                onChange={handleOnChange} />
                        </div>
                        <br />
                        <div className="form-group">
                            <input type="text" placeholder="directors of the movie?"
                                name="directors" className="form-control" value={movie.directors}
                                onChange={handleOnChange} />
                        </div>
                        <br />
                        <div className="form-group">
                            <input type="text" placeholder="genre of the movie?"
                                name="genres" className="form-control" value={movie.genres}
                                onChange={handleOnChange} />
                        </div>
                        <br />
                        <div className="form-group">
                            <input type="text" placeholder="language of the movie?"
                                name="language" className="form-control" value={movie.language}
                                onChange={handleOnChange} />
                        </div>
                        <br />
                        <div className="form-group">
                            <input type="text" placeholder="year of release of the movie?"
                                name="year" className="form-control" value={movie.year}
                                onChange={handleOnChange} />
                        </div>
                        <input type="submit" className="btn btn-outline-warning btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div >)
}

export default CreateMovie