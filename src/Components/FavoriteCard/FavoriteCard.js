import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useNavigate } from "react-router-dom";
import './FavoriteCard.css';

export default function FavoriteCard(props) {
  const artistInfo = props.artistInfo;
  const currentUserUsername = useSelector((state) => state.currentUserUsername.value);
  const users = JSON.parse(sessionStorage.getItem('users'));
  const currentUser = currentUserUsername && users.find(user => user.username === currentUserUsername);
  const theArtistIsAlreadyInFavorites =
    // currentUserUsername &&
    currentUser.favorites.find(idol => idol.id === artistInfo.id);
  // const navigate = useNavigate();
  const [toggleStar, setToggleStar] = useState(theArtistIsAlreadyInFavorites);

  useEffect(() => setToggleStar(theArtistIsAlreadyInFavorites));

  function udateUsers() {
    const usersExceptCurrent = users.filter(user => user.username !== currentUserUsername);
    const updatedUsers = [...usersExceptCurrent, currentUser];
    sessionStorage.setItem('users', JSON.stringify(updatedUsers));
  }

  function addArtist() {
    // if (!currentUserUsername) {
    //   navigate("/signIn");
    //   return;
    // } else 
    if (!theArtistIsAlreadyInFavorites) {
      // theArtistIsAlreadyInFavorites = !theArtistIsAlreadyInFavorites;
      currentUser.favorites = [...currentUser.favorites, artistInfo];
      udateUsers();
    }
  }

  function removeArtist() {
    const updatedFavorites = currentUser.favorites.filter(artist => artist.id !== artistInfo.id);
    currentUser.favorites = updatedFavorites;
    udateUsers();
    setToggleStar(!toggleStar);
  }

  const action = theArtistIsAlreadyInFavorites ?
    <div className='details-action-small' onClick={removeArtist}>&#9733;</div> :
    <div className='details-action-small' onClick={addArtist}>&#9734;</div>;

  return (
    <div className='details-container-small'>
      <img className='image-small' src={props.artistInfo.picture} alt="Artist image" />
      <div className='details-info-small'>
        <h2>
          {props.artistInfo.name}
        </h2>
        <ul>
          <li>Followers: {props.artistInfo.followers}</li>
          <li>Popularity: {props.artistInfo.popularity}</li>
        </ul>
      </div>
      {action}
      {/* <div className='details-action-small' onClick={removeArtist}>&#9733;</div> */}
    </div >
  )
}