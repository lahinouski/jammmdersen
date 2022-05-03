import React, { useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setSearchResults, eraseSearchResults } from '../../features/searchResultsSlice';
import Spotify from '../../util/Spotify';
import Track from '../Track/Track';
import './TrackList.css';

export default function TrackList() {
  const searchResults = useSelector((state) => state.searchResults.value);
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const searchTerm = params.get('track');

  useEffect(() => {
    if (searchTerm) {
      Spotify.search(searchTerm)
        .then((tracks) => dispatch(setSearchResults(tracks)));
    }
    // return dispatch(eraseSearchResults());
  }, [searchTerm]);
  
  return (
    <div className="TrackList">
      {searchResults && searchResults.map((track) => (
        <Track
          key={track.id}
          track={track} />))}
    </div>
  );
}