import React, { useState, useEffect } from 'react';
import Spotify from '../../util/Spotify';
import './SearchBar.css';

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getSearchResults, eraseSearchResults } from '../../features/searchResultsSlice';

export default function SearchBar() {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function search(searchTerm) {
    if (searchTerm === '') alert('Please provide a serch term');
    Spotify.search(searchTerm)
      .then((tracks) => dispatch(getSearchResults(tracks)));
    navigate(`/search?track=${searchTerm}`);
  }

  // useEffect(() => {
  //   return dispatch(eraseSearchResults());
  // }, [term]);

  return (
    <div className="SearchBar">
      <input
        onChange={(event) => setTerm(event.target.value)}
        onKeyPress={(event) => event.key === 'Enter' && search(term)}
        placeholder="Enter A Song, Album, or Artist" />
      <a onClick={() => search(term)}>SEARCH</a>
    </div>
  );
}