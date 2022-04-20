import React from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

export default function SearchResults(props) {
  return (
    <div className="SearchResults">
      <TrackList
        tracks={props.searchResults}
        onDetails={props.onDetails} />
    </div>
  );
}