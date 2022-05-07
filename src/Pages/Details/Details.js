import React from 'react';
import { useDetails } from './useDetails';
import './Details.css';

export default function Details() {
  const { artistInfo, isFavorite, addArtist, removeArtist } = useDetails();

  return (
    <React.Fragment>
      <div className="details-main">
        <div className="details-container">
          <img src={artistInfo.picture} alt={artistInfo.name} />
          <div className="details-info">
            <h2>{artistInfo.name}</h2>
            <ul>
              {Array.isArray(artistInfo.genres) &&
                artistInfo.genres.map((genre) => <li key={genre}>{genre}</li>)}
              <br />
              <br />
              <li>Popularity: {artistInfo.popularity}</li>
            </ul>
          </div>
          {isFavorite ?
            <div className="details-action" onClick={removeArtist}>&#9733;</div> :
            <div className="details-action" onClick={addArtist}>&#9734;</div>}
        </div>
      </div>
    </React.Fragment>
  );
}