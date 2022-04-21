import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import Spotify from '../../util/Spotify';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Favorites, ErrorPage, Details, History, SignIn, Search, LogIn, Home } from '../../Pages';

export default function App() {
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [artistInfo, setArtistInfo] = useState({});
  const navigate = useNavigate();

  const [favoriteArtists, setfavoriteArtists] = useState([]);
  const [isRemoval, setIsRemoval] = useState(false);

  function addArtist(artist) {
    let artistInFavorites = false;
    for (let i = 0; i < favoriteArtists.length; i++) {
      if (artist.id === favoriteArtists[i].id) {
        artistInFavorites = true;
      }
    }
    if (!artistInFavorites) {
      setIsRemoval(true);
      const newFavorites = favoriteArtists.concat(); // Returns a shallow copy
      newFavorites.push(artist);
      setfavoriteArtists(newFavorites);
    }
  }

  function removeArtist(artist) {
    setIsRemoval(false);
    const newFavorites = favoriteArtists.filter(favoriteArtist => favoriteArtist.id !== artist.id);
    setfavoriteArtists(newFavorites);
  }

  function search(searchTerm) {
    if (searchTerm === '') alert('Please provide a serch term');
    else {
      Spotify.search(searchTerm)
        .then(tracks => setSearchResults(tracks));
      navigate("/search");
    }
  }

  function getArtist(artistId) {
    Spotify.examine(artistId)
      .then(artistInfo => setArtistInfo(artistInfo));
    navigate("/details");
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
              <Link className='navigation-text-link' to="favorites">Favorites</Link>
              <Link className='navigation-text-link' to="history">History</Link>
              <Link className='navigation-text-link' to="/">Log out</Link>
            </div> :
            <div className='navigation-text'>
              <Link className='navigation-text-link' to="signIn">Sign in</Link>
              <Link className='navigation-text-link' to="logIn">Log in</Link>
            </div>}
        </nav>
      </header>
      <SearchBar onSearch={search} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={
          <Search
            searchResults={searchResults}
            onDetails={getArtist} />} />
        <Route path="/details" element={
          <Details
            artistInfo={artistInfo}
            isRemoval={isRemoval}
            onAdd={addArtist}
            onRemove={removeArtist} />} />
        <Route path="/favorites" element={
          <Favorites
            favoriteArtists={favoriteArtists}
            onRemove={removeArtist} />} />
        <Route path="/history" element={<History />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="*" element={<ErrorPage />} />
        {/* <Route index element={<Home />} /> */}
      </Routes>
    </div>
  );
}