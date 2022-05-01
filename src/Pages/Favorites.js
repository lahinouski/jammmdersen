// import React, { useState, useEffect } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import SearchBar from '../Components/SearchBar/SearchBar';
import FavoriteCard from '../Components/FavoriteCard/FavoriteCard';
import './Favorites.css';

export default function Favorites() {
  const currentUserUsername = useSelector((state) => state.currentUserUsername.value);
  const users = JSON.parse(sessionStorage.getItem('users'));
  const currentUserFavorites = users.find(user => user.username === currentUserUsername).favorites;

  // const currentUser = currentUserUsername && users.find(user => user.username === currentUserUsername);
  // const [currentFavorites, setCurrentFavorites] = useState(currentUserFavorites);

  // function udateUsers() {
  //   const usersExceptCurrent = users.filter(user => user.username !== currentUserUsername);
  //   const updatedUsers = [...usersExceptCurrent, currentUser];
  //   sessionStorage.setItem('users', JSON.stringify(updatedUsers));
  // }

  // useEffect(() => udateUsers(), [currentFavorites]);

  return (
    <React.Fragment>
      <SearchBar />
      <div className='cards-container'>
        {currentUserFavorites.map(artist => <FavoriteCard
          artistInfo={artist}
          // currentFavorites={currentFavorites}
          // setCurrentFavorites={setCurrentFavorites} 
          />)}
      </div>
    </React.Fragment>
  );
}