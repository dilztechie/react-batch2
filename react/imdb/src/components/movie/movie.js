import React from "react";
import "./movie.css";

export default class Movie extends React.Component {
  render = () => <div className="movie">
    <h4 className="title">{this.props.movie.title}</h4>
    <span className="release">{this.props.movie.release}</span>
    <span className="rating">{this.props.movie.rating}</span> <br />
    <span className="genre">{this.props.movie.genre.join(', ')}</span>
    <span className="language">{this.props.movie.language}</span> <br />
    <span className="stars"><strong>Stars: </strong>{this.props.movie.stars}</span> <br />
    <span className="director"><strong>Director: </strong>{this.props.movie.director}</span>
  </div>
}