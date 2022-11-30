import React, { useState } from "react";
import Movie from "../movie/movie";
import "./movies.css";

export default function Movies() {
  const [type, setType] = useState('bollywood')
  const [show, setShow] = useState(true)

  let toggle = () => {
    document.getElementById('btnShow').innerHTML = (show ? "Show " : "Hide ") + "Movie Information"
    setShow(!show)
  }

  return <div className="wrapper">
    <h3>Indian Movies</h3>
    <div><button id="btnShow" onClick={() => toggle()}>Hide Movie Information</button></div>
    <button onClick={() => setType('bollywood')}>Bollywood</button>
    <button onClick={() => setType('sandalwood')}>Sandalwood</button>
    <button onClick={() => setType('tollywood')}>Tollywood</button>
    <button onClick={() => setType('kollywood')}>Kollywood</button>
    <hr />
    {show && <Movie name={type} />}
    <hr />
  </div>
}