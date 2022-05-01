import React, { useState, useEffect } from 'react';
import './App.css';
// import SearchBar from '../SearchBar/SearchBar';
import Spotify from '../../util/Spotify';
import { Routes, Route, Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Favorites, ErrorPage, Details, History, SignIn, Search, LogIn, Home } from '../../Pages';

import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../features/currentUserUsernameSlice';

export default function App() {
  const currentUserUsername = useSelector((state) => state.currentUserUsername.value);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [favoriteArtists, setfavoriteArtists] = useState([]);
  const dispatch = useDispatch();

  // const [searchHistory, setSearchHistory] = useState([]);
  // const [searchParams, setSearchParams] = useSearchParams();

  function handleLogOut() {
    setIsAuthorized(false);
    dispatch(logOut());
  }

  // useEffect(() => Spotify.getAccessToken(), []);
  Spotify.getAccessToken();
  return (
    <div className="App">
      <header>
        <Link className="logo" to="/">
          <h1>Ja<span className="highlight">mmm</span>dersen</h1>
        </Link>
        <nav>
          {isAuthorized ?
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
        <Route path="/signIn" element={<SignIn setIsAuthorized={setIsAuthorized} />} />
        <Route path="/logIn" element={<LogIn setIsAuthorized={setIsAuthorized} />} />
        <Route path="*" element={<ErrorPage />} />
        {/* <Route index element={<Home />} /> */}
      </Routes>
    </div>
  );
}