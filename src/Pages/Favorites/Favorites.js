import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SearchBar from '../../Components/SearchBar/SearchBar';
import FavoriteCard from '../../Components/FavoriteCard/FavoriteCard';
import './Favorites.css';

export default function Favorites() {
  const users = JSON.parse(sessionStorage.getItem('users'));
  const currentUserUsername = useSelector((state) => state.currentUserUsername.value);
  const currentUser = users.find((user) => user.username === currentUserUsername);
  const currentUserFavorites = currentUser.favorites;

  return (
    <React.Fragment>
      <SearchBar />
      <div className='cards-container'>
        {currentUserFavorites.map((artist) => <FavoriteCard artistInfo={artist} />)}
      </div>
    </React.Fragment>
  );
}