import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './Track.css';

function Track({ track }) {
  const navigate = useNavigate();

  return (
    <div className="track">
      <div className="track-information">
        <img src={track.artwork} alt={`${track.name} album artwork`} />
        <div className="track-data">
          <h3>{track.name}</h3>
          <p>{track.artist} | {track.album}</p>
        </div>
        <div className="audio-player">
          {track.sample ?
            <audio src={track.sample} type="audio/ogg" controls /> :
            <span>No sample :(</span>}
        </div>
      </div>
      <a className="track-action" onClick={() => navigate(`/details?artist=${track.artistId}`)}>Details</a>
    </div>
  );
}

Track.propTypes = {
  track: PropTypes.object
}

export default Track;