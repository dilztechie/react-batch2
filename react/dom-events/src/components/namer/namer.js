import React, { useState } from "react";
import "./namer.css";

export default function Namer() {
  const [name, setName] = useState('')
  const [alert, setAlert] = useState(false)

  let validate = (event) => {
    if (/\*/.test(name)) {
      event.preventDefault()
      setAlert(true)
      return
    }
    setAlert(false)
  }

  return (<div className="wrapper">
    <div className="preview">
      <h2>Preview: {name}</h2>
    </div>
    <form>
      <label>
        <p>Name:</p>
        <input
          autoComplete="off"
          name="name"
          onChange={event => setName(event.target.value)} />
      </label>
      <div className="information-wrapper">
        <button
          className="information"
          onClick={() => setAlert(true)}>
          More Information
        </button>
        {alert &&
          <div className="popup">
            Alpha Numeric Characters Allowed <br />
            * Not Allowed
          </div>}
      </div>
      <div>
        <button onClick={validate}>Save</button>
      </div>
    </form>
  </div>)
}