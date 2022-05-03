import React from 'react';
import { useSelector } from 'react-redux';
import HistoryCard from '../../Components/HistoryCard/HistoryCard';
import './History.css';

export default function History() {
  const users = JSON.parse(sessionStorage.getItem('users'));
  const currentUserUsername = useSelector((state) => state.currentUserUsername.value);
  const currentUser = users.find((user) => user.username === currentUserUsername);
  const currentUserHistory = currentUser.history || [];

  return (
    <React.Fragment>
      <h1 className="history-header">Search history:</h1>
      <div className='history-cards-container'>
        {currentUserHistory.map((item) => <HistoryCard historyItem={item} />)}
      </div>
    </React.Fragment>
  );
}