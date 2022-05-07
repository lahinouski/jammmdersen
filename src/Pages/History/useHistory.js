import { useSelector } from 'react-redux';

export const useHistory = () => {
  const users = JSON.parse(sessionStorage.getItem('users'));
  const currentUserUsername = useSelector((state) => state.currentUserUsername.value);
  const currentUser = users.find(({ username }) => username === currentUserUsername);
  const currentUserHistory = currentUser.history;

  return { currentUserHistory };
};