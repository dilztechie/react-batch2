import React, { useState } from "react";
import "./login-page.css";

export function loginUser(credentials) {
  return fetch('http://localhost:7080/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  }).then(data => data.json())
}

export default function LoginPage({ setToken }) {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = async event => {
    event.preventDefault()
    const token = await loginUser({ username, password })
    setToken(token)
  }

  return <>
    <div className="login-wrapper">
      <h3>Login Page</h3>
      <form onSubmit={handleSubmit}>
        <input placeholder="username"
          onChange={event => setUsername(event.target.value)} />
        <input placeholder="password" type="password" autoComplete="off"
          onChange={event => setPassword(event.target.value)} />
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  </>
}