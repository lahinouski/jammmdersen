import { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';

export const useFavorites = () => {
  const currentUserUsername = useSelector((state) => state.currentUserUsername.value);
  const [displayedFavorites, setDisplayedFavorites] = useState([]);
  const [favorites, setFavorites] = useState({});
  const usersRef = useRef([]);
  const currentUserRef = useRef({});

  useEffect(() => {
    usersRef.current = JSON.parse(sessionStorage.getItem('users'));
    currentUserRef.current = usersRef.current.find(({ username }) => username === currentUserUsername);
    setDisplayedFavorites(currentUserRef.current.favorites);

    const favoritesToSet = {};
    currentUserRef.current.favorites.forEach(({ id }) => favoritesToSet[id] = true);
    setFavorites(favoritesToSet);
  }, [currentUserUsername, currentUserRef, setDisplayedFavorites, setFavorites]);

  const updateUsers = useCallback(() => {
    const usersExceptCurrent = usersRef.current.filter(({ username }) => username !== currentUserUsername);
    const updatedUsers = [...usersExceptCurrent, currentUserRef.current];
    sessionStorage.setItem('users', JSON.stringify(updatedUsers));
  }, [currentUserUsername, currentUserRef]);

  const addArtist = useCallback((artistInfo) => {
    currentUserRef.current.favorites = [...currentUserRef.current.favorites, artistInfo];
    updateUsers();
    setFavorites({ ...favorites, [artistInfo.id]: true });
  }, [currentUserRef, favorites, updateUsers]);

  const removeArtist = useCallback((artistInfo) => {
    currentUserRef.current.favorites = currentUserRef.current.favorites.filter(({ id }) => id !== artistInfo.id);
    updateUsers();
    setFavorites({ ...favorites, [artistInfo.id]: false });
  }, [currentUserRef, favorites, updateUsers]);

  return {
    displayedFavorites,
    artistIdToFavoriteMap: favorites,
    addArtist,
    removeArtist
  };
};