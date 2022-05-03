import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setSearchResults, eraseSearchResults } from '../../features/searchResultsSlice';
import './SearchBar.css';

export default function SearchBar() {
  const currentUserUsername = useSelector((state) => state.currentUserUsername.value);
  const [term, setTerm] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function setHistory(searchTerm) {
    const users = JSON.parse(sessionStorage.getItem('users'));
    const currentUser = users.find((user) => user.username === currentUserUsername);
    const currentUserHistory = currentUser.history || [];
    const historyItem = {
      searchTerm,
      date: new Date().toLocaleString().split(' ')[1]
    };

    currentUser.history = [...currentUserHistory, historyItem];

    const usersExceptCurrent = users.filter(user => user.username !== currentUserUsername);
    const updatedUsers = [...usersExceptCurrent, currentUser];

    sessionStorage.setItem('users', JSON.stringify(updatedUsers));
  }

  const search = useCallback((searchTerm) => {
    if (searchTerm === '') {
      alert('Please provide a serch term');
      return;
    } else if (currentUserUsername) {
      setHistory(searchTerm);
    }
    navigate(`/search?track=${searchTerm}`);
  });

  useEffect(() => () => dispatch(eraseSearchResults()), []);

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