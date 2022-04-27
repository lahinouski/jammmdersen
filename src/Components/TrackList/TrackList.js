import React from 'react';
import Track from '../Track/Track';
import { useSelector, useDispatch } from 'react-redux';
// import { getSearchResults, eraseSearchResults } from '../../features/searchResultsSlice';
import './TrackList.css';

export default function TrackList(props) {
  const searchResults = useSelector((state) => state.searchResults.value);
  // const dispatch = useDispatch();

  return (
    <div className="TrackList">
      {searchResults && searchResults.map(track => (
        <Track
          key={track.id}
          track={track} />))}
    </div>
  );
}