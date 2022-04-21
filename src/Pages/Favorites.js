import React from 'react';
import FavoriteCard from '../Components/FavoriteCard/FavoriteCard';

export default function Favorites(props) {
  return (
    <div className='cards-container'>
      {props.favoriteArtists.map(artist => <FavoriteCard artistInfo={artist} onRemove={props.onRemove} />)}
    </div>
  );
}