import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentUser, store } from '../../features';

export const useLogin = () => {
  const users = sessionStorage.getItem('users') ? JSON.parse(sessionStorage.getItem('users')) : [];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitForm = useCallback((event, form) => {
    event.preventDefault();
    const userExists = users.some(({ username }) => username === form.username);
    const currentUser = userExists && users.find(({ username }) => username === form.username);

    if (!userExists) {
      alert('User does not exist');
      return;
    } else if (form.password !== currentUser.password) {
      alert('Wrong password');
      return;
    }

    dispatch(setCurrentUser(form.username));
    store.dispatch({ type: 'LOG IN', payload: form.username });
    sessionStorage.setItem('userOnline', form.username);
    navigate("/");
  }, [users, dispatch, navigate]);

  return { onSubmitForm };
};