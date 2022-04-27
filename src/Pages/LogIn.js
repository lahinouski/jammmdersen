import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../features/currentUserUsernameSlice';
// import './Form.css';

export default function LogIn(props) {
  const users = sessionStorage.getItem('users') ? JSON.parse(sessionStorage.getItem('users')) : [];
  const [loginForm, setForm] = useState({
    username: '',
    password: ''
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onUpdateField = (event) => {
    const nextFormState = { ...loginForm, [event.target.name]: event.target.value };
    setForm(nextFormState);
  };

  const doesUserExist = (formUsername) => {
    for (let i = 0; i < users.length; i++) {
      if (formUsername === users[i].username) return true;
    }
    return false;
  };

  const getUserPassword = (username) => {
    const currentUser = users.find(user => user.username === username);
    return currentUser.password;
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (!doesUserExist(loginForm.username)) {
      alert('User does not exist');
      return;
    } else if (loginForm.password !== getUserPassword(loginForm.username)) {
      alert('Wrong password');
      return;
    }
    dispatch(setCurrentUser(loginForm.username));
    props.setIsAuthorized(true);
    navigate("/");
  };

  return (
    <div className="" style={{ marginLeft: '20rem' }}>
      <h2>Log in</h2>
      <form className="" onSubmit={onSubmitForm}>
        <div className="">
          <label className="">Username</label>
          <input
            type="text"
            name="username"
            value={loginForm.username}
            onChange={onUpdateField}
            required
          />
        </div>
        <div className="">
          <label className="">Password</label>
          <input
            type="password"
            name="password"
            value={loginForm.password}
            onChange={onUpdateField}
            required
          />
        </div>
        <div className="">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}