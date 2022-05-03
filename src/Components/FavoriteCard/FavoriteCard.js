import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import './FavoriteCard.css';

function FavoriteCard({ artistInfo }) {
  const currentUserUsername = useSelector((state) => state.currentUserUsername.value);
  const users = JSON.parse(sessionStorage.getItem('users'));
  const currentUser = currentUserUsername && users.find(user => user.username === currentUserUsername);
  const artistIsInFavorites = currentUser.favorites.some(idol => idol.id === artistInfo.id);
  const [isFavorite, setIsFavorite] = useState(artistIsInFavorites);
  const navigate = useNavigate();

  function udateUsers() {
    const usersExceptCurrent = users.filter(user => user.username !== currentUserUsername);
    const updatedUsers = [...usersExceptCurrent, currentUser];
    sessionStorage.setItem('users', JSON.stringify(updatedUsers));
  }

  function addArtist() {
    currentUser.favorites = [...currentUser.favorites, artistInfo];
    setIsFavorite(true);
    udateUsers();
  }

  function removeArtist() {
    const updatedFavorites = currentUser.favorites.filter(artist => artist.id !== artistInfo.id);
    currentUser.favorites = updatedFavorites;
    setIsFavorite(false);
    udateUsers();
  }

  function toDetails() {
    navigate(`/details?artist=${artistInfo.id}`);
  }

  const action = isFavorite ?
    <div className='details-action-small' onClick={removeArtist}>&#9733;</div> :
    <div className='details-action-small' onClick={addArtist}>&#9734;</div>;

  return (
    <div className='details-container-small'>
      <img className='image-small' src={artistInfo.picture} alt={artistInfo.name} onClick={toDetails} />
      <div className="details-and-toggle">
        <div className='details-info-small'>
          <h2 onClick={toDetails}>{artistInfo.name}</h2>
          <ul>
            <li>Followers: {artistInfo.followers}</li>
            <li>Popularity: {artistInfo.popularity}</li>
          </ul>
        </div>
        {action}
      </div>
    </div >
  )
}

FavoriteCard.propTypes = {
  artistInfo: PropTypes.object
}

export default FavoriteCard;