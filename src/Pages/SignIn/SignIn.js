import React, { useState } from 'react';
import { useSignIn } from './useSignIn';
import './SignIn.css';

export default function SignIn() {
  const { onSubmitForm } = useSignIn();
  const [userForm, setUserForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    favorites: [],
    history: []
  });

  function onUpdateField(event) {
    const nextFormState = { ...userForm, [event.target.name]: event.target.value };
    setUserForm(nextFormState);
  }
  
  return (
    <div className="signin-main">
      <div className="signin-container">
        <h1><span className="highlight">S</span>ign in<span className="highlight notes">&#9835;</span></h1>
        <form onSubmit={(event) => onSubmitForm(event, userForm)}>
          <div className="form-input-row">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              value={userForm.username}
              onChange={onUpdateField}
              required />
          </div>
          <div className="form-input-row">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={userForm.password}
              onChange={onUpdateField}
              required />
          </div>
          <div className="form-input-row">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={userForm.confirmPassword}
              onChange={onUpdateField}
              required />
          </div>
          <button className="submit-button" type="submit">SIGN IN</button>
        </form>
      </div>
    </div>
  );
}