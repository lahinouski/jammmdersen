import React, { useState } from 'react';
import { useLogin } from './useLogin';

export default function LogIn() {
  const { onSubmitForm } = useLogin();
  const [loginForm, setForm] = useState({
    username: '',
    password: ''
  });

  const onUpdateField = (event) => {
    const nextFormState = { ...loginForm, [event.target.name]: event.target.value };
    setForm(nextFormState);
  };

  return (
    <div className="signin-main">
      <div className="signin-container login-container">
        <h1>Log <span className="highlight">in</span>n<span className="highlight">&#9832;</span></h1>
        <form onSubmit={(event) => onSubmitForm(event, loginForm)}>
          <div className="form-input-row">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              value={loginForm.username}
              onChange={onUpdateField}
              required />
          </div>
          <div className="form-input-row">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={loginForm.password}
              onChange={onUpdateField}
              required />
          </div>
          <button className="submit-button login-button" type="submit">LOG IN</button>
        </form>
      </div>
    </div>
  );
}