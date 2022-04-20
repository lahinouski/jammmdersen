import React from 'react';
import './Details.css';

export default function Details(props) {
  return (
    <div className='details-container'>
      <img src={props.artistInfo.picture} alt="Artist image" />
      <div className='details-info'>
        <h2>
          {props.artistInfo.name}
        </h2>
        <ul>
          {/* CANNOT SPLIT GENRES ARRAY */}
          {/* {props.artistInfo.genres.map(genre => <li>{genre}</li>)} */}
          {/* TypeError: undefined is not an object (evaluating 'props.artistInfo.genres.map')*/}

          <li>{props.artistInfo.genres}</li>

          <li>{Array.isArray(props.artistInfo.genres).toString()}</li>
          {/* Logs true */}

          <li>Popularity: {props.artistInfo.popularity}</li>
        </ul>
      </div>
      {/* &#9734; &#9733; */}
      <div className='details-favorite'>&#9734;</div>
    </div >
  )
}