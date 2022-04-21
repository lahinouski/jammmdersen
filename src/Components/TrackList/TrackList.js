import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';

export default function TrackList(props) {
  return (
    <div className="TrackList">
      {props.tracks && props.tracks.map(track => (
        <Track
          key={track.id}
          track={track}
          onDetails={props.onDetails} />))}
    </div>
  );
}