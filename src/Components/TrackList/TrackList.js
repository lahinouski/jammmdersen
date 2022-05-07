import React from 'react';
import { Track } from '../';
import { useTrackList } from './useTrackList';
import './TrackList.css';

export default function TrackList() {
  const { searchResults } = useTrackList();

  return (
    <div className="track-list">
      {searchResults && searchResults.map((track) => <Track key={track.id} track={track} />)}
    </div>
  );
}