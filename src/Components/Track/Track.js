import React from 'react';
import './Track.css';

export default function Track(props) {
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
      <a className="Track-action" onClick={() => props.onDetails(props.track.artistId)}>Details</a>
    </div>
  );
}