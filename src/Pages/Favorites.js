import React from 'react';
import { useSelector } from 'react-redux';
import SearchBar from '../Components/SearchBar/SearchBar';
import FavoriteCard from '../Components/FavoriteCard/FavoriteCard';
import './Favorites.css';

export default function Favorites(props) {
  const currentUserUsername = useSelector((state) => state.currentUserUsername.value);
  const users = JSON.parse(sessionStorage.getItem('users'));
  const currentUserFavorites = users.find(user => user.username === currentUserUsername).favorites;

  return (
    <React.Fragment>
      <SearchBar />
      <div className='cards-container'>
        {currentUserFavorites.map(artist => <FavoriteCard artistInfo={artist} />)}
      </div>
    </React.Fragment>
  );
}