import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentUser, store } from '../../features';

export const useSignIn = () => {
  const users = sessionStorage.getItem('users') ? JSON.parse(sessionStorage.getItem('users')) : [];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitForm = useCallback((event, form) => {
    event.preventDefault();
    const userExists = users.some(({ username }) => username === form.username);

    if (form.confirmPassword !== form.password) {
      alert('Passwords do not match');
      return;
    } else if (userExists) {
      alert('Username is already taken');
      return;
    }

    users.length ?
      sessionStorage.setItem('users', JSON.stringify([...users, form])) :
      sessionStorage.setItem('users', JSON.stringify([form]));
    dispatch(setCurrentUser(form.username));
    store.dispatch({ type: 'SIGN IN', payload: form.username });
    sessionStorage.setItem('userOnline', form.username);
    navigate("/");
  }, [users]);

  return { onSubmitForm };
};