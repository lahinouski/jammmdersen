import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import SearchBar from '../Components/SearchBar/SearchBar';
import './Details.css';

export default function Details() {
  const artistInfo = useSelector((state) => state.details.value);
  const currentUserUsername = useSelector((state) => state.currentUserUsername.value);
  const users = JSON.parse(sessionStorage.getItem('users'));
  const currentUser = currentUserUsername && users.find(user => user.username === currentUserUsername);
  const artistIsInFavorites =
    currentUserUsername &&
    currentUser.favorites.find(idol => idol.id === artistInfo.id);
  const navigate = useNavigate();
  const [toggleStar, setToggleStar] = useState(artistIsInFavorites);

  useEffect(() => setToggleStar(artistIsInFavorites), [artistIsInFavorites]);

  function udateUsers() {
    const usersExceptCurrent = users.filter(user => user.username !== currentUserUsername);
    const updatedUsers = [...usersExceptCurrent, currentUser];
    sessionStorage.setItem('users', JSON.stringify(updatedUsers));
  }

  function addArtist() {
    if (!currentUserUsername) {
      navigate("/signIn");
      return;
    } else if (!artistIsInFavorites) {
      // artistIsInFavorites = !artistIsInFavorites;
      currentUser.favorites = [...currentUser.favorites, artistInfo];
      udateUsers();
      setToggleStar(!toggleStar);
    }
  }

  function removeArtist() {
    const updatedFavorites = currentUser.favorites.filter(artist => artist.id !== artistInfo.id);
    currentUser.favorites = updatedFavorites;
    udateUsers();
    setToggleStar(!toggleStar);
  }

  return (
    <React.Fragment>
      <SearchBar />
      <div className='details-container'>
        <img src={artistInfo.picture} alt={artistInfo.name} />
        <div className='details-info'>
          <h2>
            {artistInfo.name}
          </h2>
          <ul>
            {Array.isArray(artistInfo.genres) && artistInfo.genres.map(genre => <li>{genre}</li>)}
            <br />
            <br />
            <li>Popularity: {artistInfo.popularity}</li>
          </ul>
        </div>
        {toggleStar ?
          <div className='details-action' onClick={removeArtist}>&#9733;</div> :
          <div className='details-action' onClick={addArtist}>&#9734;</div>}
      </div>
    </React.Fragment>
  );
}