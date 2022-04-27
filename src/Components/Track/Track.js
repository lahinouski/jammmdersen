import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getDetails, eraseDetails } from '../../features/detailsSlice';
import Spotify from '../../util/Spotify';
import './Track.css';

export default function Track(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function getArtist(artistId) {
    Spotify.examine(artistId)
      .then(artistInfo => dispatch(getDetails(artistInfo)));
    navigate(`/details?artist=${artistId}`);
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <img src={props.track.artwork} alt={`${props.track.name} album artwork`} />
        <div className="Track-data">
          <h3>{props.track.name}</h3>
          <p>{props.track.artist} | {props.track.album}</p>
        </div>
        <div className="audio-player">
          <audio src={props.track.sample} type="audio/ogg" controls />
        </div>
      </div>
      <a className="Track-action" onClick={() => getArtist(props.track.artistId)}>Details</a>
    </div>
  );
}