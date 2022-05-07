import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser, eraseCurrentUser } from '../../features';
import Spotify from '../../util/Spotify';

export const useApp = () => {
  const currentUserUsername = useSelector((state) => state.currentUserUsername.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentUser(sessionStorage.getItem('userOnline')));
    Spotify.getAccessToken();
  }, [dispatch]);

  function handleLogOut() {
    dispatch(eraseCurrentUser());
    sessionStorage.removeItem('userOnline');
  }

  return { currentUserUsername, handleLogOut };
};