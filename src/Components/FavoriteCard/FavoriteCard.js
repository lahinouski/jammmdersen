import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './FavoriteCard.css';

function FavoriteCard({ artistInfo, removeArtist, addArtist, isFavorite }) {
  const navigate = useNavigate();

  function toDetails() {
    navigate(`/details?artist=${artistInfo.id}`);
  }

  return (
    <div className="details-container-small">
      <img className="image-small" src={artistInfo.picture} alt={artistInfo.name} onClick={toDetails} />
      <div className="details-and-toggle">
        <div className="details-info-small">
          <h2 onClick={toDetails}>{artistInfo.name}</h2>
          <ul>
            <li>Followers: {artistInfo.followers}</li>
            <li>Popularity: {artistInfo.popularity}</li>
          </ul>
        </div>
        {isFavorite ?
          <div className="details-action-small" onClick={() => removeArtist(artistInfo)}>&#9733;</div> :
          <div className="details-action-small" onClick={() => addArtist(artistInfo)}>&#9734;</div>}
      </div>
    </div >
  );
}

FavoriteCard.propTypes = {
  artistInfo: PropTypes.object
}

export default FavoriteCard;