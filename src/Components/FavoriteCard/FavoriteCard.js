import React from 'react';
import './FavoriteCard.css';

export default function FavoriteCard(props) {
  return (
    <div className='details-container-small'>
      <img className='image-small' src={props.artistInfo.picture} alt="Artist image" />
      <div className='details-info-small'>
        <h2>
          {props.artistInfo.name}
        </h2>
        <ul>
          <li>Popularity: {props.artistInfo.popularity}</li>
        </ul>
      </div>
      <div className='details-action-small' onClick={() => props.onRemove(props.artistInfo)}>&#9733;</div>
    </div >
  )
}