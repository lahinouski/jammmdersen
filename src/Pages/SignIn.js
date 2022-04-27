import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../features/currentUserUsernameSlice';
// import './UserForm.css';

export default function SignIn(props) {
  const users = sessionStorage.getItem('users') ? JSON.parse(sessionStorage.getItem('users')) : [];
  const [userForm, setUserForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    favorites: [],
    history: []
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onUpdateField(event) {
    const nextFormState = { ...userForm, [event.target.name]: event.target.value };
    setUserForm(nextFormState);
  }

  function onSubmitForm(event) {
    event.preventDefault();
    const doesUserExist = users && users.find(user => user.username === userForm.username);
    if (userForm.confirmPassword !== userForm.password) {
      alert('Passwords do not match');
      return;
    } else if (doesUserExist) {
      alert('This username is already taken');
      return;
    }
    users.length ?
      sessionStorage.setItem('users', JSON.stringify([...users, userForm])) :
      sessionStorage.setItem('users', JSON.stringify([userForm]));
    props.setIsAuthorized(true); // ???
    dispatch(setCurrentUser(userForm.username));
    navigate("/");
  }

  return (
    <div className="" style={{ marginLeft: '20rem' }}>
      <h2>Sign in</h2>
      <form className="" onSubmit={onSubmitForm}>
        <div className="">
          <label className="">Username</label>
          <input
            type="text"
            name="username"
            value={userForm.username}
            onChange={onUpdateField}
            required
          />
        </div>
        <div className="">
          <label className="">Password</label>
          <input
            type="password"
            name="password"
            value={userForm.password}
            onChange={onUpdateField}
            required
          />
        </div>
        <div className="">
          <label className="">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={userForm.confirmPassword}
            onChange={onUpdateField}
            required
          />
        </div>
        <div className="">
          <button className="" type="submit">Sign in</button>
          <input type="submit" value="Submit" />
          {/* <div type="submit" value="Submit">Submit</div> */}
        </div>
      </form>
    </div>
  );
}