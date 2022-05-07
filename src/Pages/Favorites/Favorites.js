import React, { useState } from 'react';
import { SearchBar, FavoriteCard } from '../../Components';
import { useFavorites } from './useFavorites';
import './Favorites.css';

export default function Favorites() {
  const { displayedFavorites, artistIdToFavoriteMap, addArtist, removeArtist } = useFavorites();
  const [explode, setExplode] = useState(false);

  function Bomb() {
    throw new Error('CABOO0OM!');
  }

  return (
    <React.Fragment>
      <SearchBar />
      {displayedFavorites.length ?
        <div className="cards-container">
          {displayedFavorites.map((artist) => (
            <FavoriteCard
              key={artist.id}
              artistInfo={artist}
              addArtist={addArtist}
              removeArtist={removeArtist}
              isFavorite={artistIdToFavoriteMap[artist.id]}
            />))}
        </div> :
        <div className="no-cards-main">
          <div className="no-cards-container">
            <h1>No favorites</h1>
            <p>at least the page is not broken</p>
            <h2 onClick={() => setExplode(true)}>YET...</h2>
          </div>
        </div>}
      {explode && <Bomb />}
    </React.Fragment>
  );
}