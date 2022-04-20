import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import Spotify from '../../util/Spotify';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Favorites, ErrorPage, Details, History, SignIn, Search, LogIn, Home } from '../../Pages';


export default function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [artistInfo, setArtistInfo] = useState({});
  const navigate = useNavigate();

  function getArtist(artistId) {
    Spotify.eximine(artistId)
      .then(artistInfo => setArtistInfo(artistInfo));
    navigate("/details");
  }

  function search(searchTerm) {
    if (searchTerm === '') alert('Please provide a serch term');
    else {
      Spotify.search(searchTerm)
        .then(tracks => setSearchResults(tracks));
      navigate("/search");
    }
  }

  Spotify.getAccessToken();
  return (
    <div className="App">
      <header>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1>Ja<span className="highlight">mmm</span>dersen</h1>
        </Link>
        <nav>
          {isAuthorized ?
            <div className='navigation-text'>
              <Link to="favorites">Favorites</Link>
              <Link to="history">History</Link>
              <Link to="/">Log out</Link>
            </div> :
            <div className='navigation-text'>
              <Link to="signIn">Sign in</Link>
              <Link to="logIn">Log in</Link>
            </div>}
        </nav>
      </header>
      <SearchBar onSearch={search} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search searchResults={searchResults} onDetails={getArtist} />} />
        <Route path="/details" element={<Details artistInfo={artistInfo} />} />
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