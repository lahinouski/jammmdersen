import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import './Track.css';

function Track({ track }) {
  const navigate = useNavigate();

  return (
    <div className="Track">
      <div className="Track-information">
        <img src={track.artwork} alt={`${track.name} album artwork`} />
        <div className="Track-data">
          <h3>{track.name}</h3>
          <p>{track.artist} | {track.album}</p>
        </div>
        <div className="audio-player">
          <audio src={track.sample} type="audio/ogg" controls />
        </div>
      </div>
      <a className="Track-action" onClick={() => navigate(`/details?artist=${track.artistId}`)}>Details</a>
    </div>
  );
}

Track.propTypes = {
  track: PropTypes.object
}

export default Track;