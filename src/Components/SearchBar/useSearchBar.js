import { useEffect, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { eraseSearchResults } from '../../features';

export const useSearchBar = () => {
  const currentUserUsername = useSelector((state) => state.currentUserUsername.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setHistory = useCallback((searchTerm) => {
    const users = JSON.parse(sessionStorage.getItem('users'));
    const currentUser = users.find(({ username }) => username === currentUserUsername);
    const currentUserHistory = currentUser.history;
    const historyItem = {
      searchTerm,
      date: new Date().toLocaleString().split(' ')[1]
    };

    currentUser.history = [...currentUserHistory, historyItem];

    const usersExceptCurrent = users.filter(({ username }) => username !== currentUserUsername);
    const updatedUsers = [...usersExceptCurrent, currentUser];

    sessionStorage.setItem('users', JSON.stringify(updatedUsers));
  }, [currentUserUsername]);

  const search = useCallback((term) => {
    if (!term) {
      alert('Please provide a serch term');
      return;
    } else if (currentUserUsername) {
      setHistory(term);
    }

    navigate(`/search?track=${term}`);
  }, [currentUserUsername, setHistory]);

  useEffect(() => () => dispatch(eraseSearchResults()), []);

  return { search };
};