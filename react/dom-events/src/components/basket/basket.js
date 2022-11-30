import React, { useReducer, useState } from "react";
import "./basket.css";

export default function Basket() {
  const formReducer = (state, event) => { return { ...state, [event.name]: event.value } }

  const [formData, setFormData] = useReducer(formReducer, {})
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    setSubmitting(true)

    setTimeout(() => setSubmitting(false), 3000)
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value:
        event.target.type === 'select-multiple' ?
          Array.from(event.target.selectedOptions, option => option.value) :
          event.target.type === 'checkbox' ?
            event.target.checked :
            event.target.value
    })
  }

  return <div className="wrapper">
    <h3>Fruits are Healthy</h3>
    {submitting &&
      <div>
        Submitting the following data:
        <ul>
          {Object.entries(formData).map(([name, value]) => (
            <li key={name}><strong>{name}:</strong> {value.toString()}</li>
          ))}
        </ul>
      </div>
    }
    <form onSubmit={handleSubmit}>
      <fieldset>
        <p>Name:
          <input
            autoComplete="off"
            name="name"
            onChange={handleChange} /></p>
      </fieldset>
      <fieldset>
        <p>Fruits:
          <select name="fruits" multiple onChange={handleChange}>
            <option value="" disabled>---choose fruit---</option>
            <option value="apple">Apple</option>
            <option value="orange">Orange</option>
            <option value="pears">Pears</option>
            <option value="grapes">Grapes</option>
          </select></p>
        <p>Count:
          <input type="number" name="count" onChange={handleChange} /></p>
        <p>Gifted?
          <input type="checkbox" name="isGifted" onChange={handleChange} /></p>
      </fieldset>
      <button type="submit">Checkout</button>
    </form>
  </div>
}