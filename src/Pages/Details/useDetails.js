import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDetails, eraseDetails } from '../../features';
import Spotify from '../../util/Spotify';
import './Details.css';

export const useDetails = () => {
  const artistInfo = useSelector((state) => state.details.value);
  const currentUserUsername = useSelector((state) => state.currentUserUsername.value);
  const users = JSON.parse(sessionStorage.getItem('users'));
  const currentUser = currentUserUsername && users.find(({ username }) => username === currentUserUsername);
  const artistIsInFavorites =
    currentUserUsername &&
    currentUser.favorites.find(({ id }) => id === artistInfo.id);
  const [isFavorite, setIsFavorite] = useState(artistIsInFavorites);
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => setIsFavorite(artistIsInFavorites));
  useEffect(() => {
    const artistId = params.get('artist');
    if (artistId) {
      Spotify.examine(artistId)
        .then((artistInfo) => dispatch(getDetails(artistInfo)));
    }
    return () => dispatch(eraseDetails());
  }, []);

  const udateUsers = useCallback(() => {
    const usersExceptCurrent = users.filter(({ username }) => username !== currentUserUsername);
    const updatedUsers = [...usersExceptCurrent, currentUser];
    sessionStorage.setItem('users', JSON.stringify(updatedUsers));
  }, [currentUser, currentUserUsername]);

  const addArtist = useCallback(() => {
    if (!currentUserUsername) {
      navigate("/signIn");
      return;
    } else if (!artistIsInFavorites) {
      currentUser.favorites = [...currentUser.favorites, artistInfo];
      udateUsers();
      setIsFavorite(!isFavorite);
    }
  }, [currentUser, currentUserUsername, artistIsInFavorites, artistInfo, setIsFavorite, udateUsers]);

  const removeArtist = useCallback(() => {
    const updatedFavorites = currentUser.favorites.filter(({ id }) => id !== artistInfo.id);
    currentUser.favorites = updatedFavorites;
    udateUsers();
    setIsFavorite(!isFavorite);
  }, [artistInfo, currentUser, setIsFavorite, udateUsers]);

  return { artistInfo, isFavorite, addArtist, removeArtist };
};