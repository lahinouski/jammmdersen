import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Favorites, ErrorPage, Details, History, SignIn, Search, LogIn, Home } from '../../Pages';
import { setCurrentUser, eraseCurrentUser } from '../../features/currentUserUsernameSlice';
import Spotify from '../../util/Spotify';
import './App.css';

export default function App() {
  const currentUserUsername = useSelector((state) => state.currentUserUsername.value);
  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(eraseCurrentUser());
    sessionStorage.removeItem('userOnline');
  }

  useEffect(() => {
    dispatch(setCurrentUser(sessionStorage.getItem('userOnline')));
    !sessionStorage.getItem('token') && Spotify.getAccessToken();
  }, []);

  return (
    <div className="App">
      <header>
        <Link className="logo" to="/">
          <h1>Ja<span className="highlight">mmm</span>dersen</h1>
        </Link>
        <nav>
          {sessionStorage.getItem('userOnline') ?
            <div className="navigation-text">
              <span className="displayCurrentUser">{currentUserUsername}</span>
              <Link className="navigation-text-link" to="favorites">Favorites</Link>
              <Link className="navigation-text-link" to="history">History</Link>
              <Link className="navigation-text-link" to="/" onClick={handleLogOut}>Log out</Link>
            </div> :
            <div className="navigation-text">
              <Link className="navigation-text-link" to="signIn">Sign in</Link>
              <Link className="navigation-text-link" to="logIn">Log in</Link>
            </div>}
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/details" element={<Details />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/history" element={<History />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="*" element={<ErrorPage />} />
        {/* <Route index element={<Home />} /> */}
      </Routes>
    </div>
  );
}