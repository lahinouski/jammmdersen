import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import './HistoryCard.css';

function HistoryCard({ historyItem }) {
  const navigate = useNavigate();

  function search() {
    navigate(`/search?track=${historyItem.searchTerm}`);
  }

  return (
    <div className="history-item">
      <div className="history-item-information">
        <div className="note-container">
          {[
            <span className="history-notes">&#9785;</span>,
            <span className="history-notes">&#9787;</span>,
            <span className="history-notes">&#9883;</span>,
            <span className="history-notes-double">&#9837;&#9833;</span>,
            <span className="history-notes-double">&#9839;&#9836;</span>
          ][Math.floor(Math.random() * 5)]}
        </div>
        <div className="history-item-data">
          <h3>{historyItem.searchTerm}</h3>
          <p>{historyItem.date}</p>
        </div>
      </div>
      <a className="history-item-action" onClick={search}><span>REEE:</span>SEARCH</a>
    </div>
  );
}

HistoryCard.propTypes = {
  historyItem: PropTypes.object
}

export default HistoryCard;