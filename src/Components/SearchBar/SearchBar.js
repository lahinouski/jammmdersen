import React, { useState, useEffect } from 'react';
import Spotify from '../../util/Spotify';
import './SearchBar.css';

import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getSearchResults, eraseSearchResults } from '../../features/searchResultsSlice';

export default function SearchBar() {
  const [term, setTerm] = useState('');
  // const [serchParams, setSerchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function search(searchTerm) {
    if (searchTerm === '') {
      alert('Please provide a serch term');
      return;
    }
    Spotify.search(searchTerm)
      .then((tracks) => dispatch(getSearchResults(tracks)));
    navigate(`/search?track=${searchTerm}`);
  }

  // useEffect(() => {
  //   return dispatch(eraseSearchResults());
  // }, [term]);

  return (
    <div className="search-bar">
      <input
        onChange={(event) => setTerm(event.target.value)}
        onKeyPress={(event) => event.key === 'Enter' && search(term)}
        placeholder="Enter a song, album, or artist." />
      <a onClick={() => search(term)}>SEARCH</a>
    </div>
  );
}