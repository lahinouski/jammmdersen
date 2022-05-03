import React, { useState } from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';
import './Home.css';

export default function Home() {
  const [hasGeeted, setHasGeeted] = useState(false);

  return (
    <React.Fragment>
      <SearchBar />
      {!hasGeeted && <div className="click-arrow"></div>}
      <div className='greeting-container'>
        <h1 onClick={() => setHasGeeted(!hasGeeted)}>Hello World</h1>
        {hasGeeted && <React.Fragment>
          <div className="text-container">
            <p>and welcome to Ja<span>mmm</span>dersen&trade;!</p>
            <p>Meet friends! Date! Share music and get in touch with your favorite<br />
              artists! — few of many things you won't be able to do on this website.<br />
              You can still search for some songs and stare at musicians.</p>
            <p>Great!</p>
          </div>
          <span className="scissors">&#9987;</span>
        </React.Fragment>}
      </div>
    </React.Fragment>
  );
}