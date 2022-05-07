import React from 'react';
import { HistoryCard } from '../../Components';
import { useHistory } from './useHistory';
import './History.css';

export default function History() {
  const { currentUserHistory } = useHistory();

  return (
    <React.Fragment>
      <h1 className="history-header">Search history:</h1>
      <div className='history-cards-container'>
        {currentUserHistory.map((item) => <HistoryCard key={item.date} historyItem={item} />)}
      </div>
    </React.Fragment>
  );
}