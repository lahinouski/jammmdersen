import React, { useState } from 'react';
import { SearchBar } from '../../Components';
import './Home.css';

export default function Home() {
  const [hasGeeted, setHasGeeted] = useState(false);

  return (
    <React.Fragment>
      <SearchBar />
      <div className="greeting-main">
        <div className="greeting-container">
          <div className="greeting-header-container">
            <h1 onClick={() => setHasGeeted(!hasGeeted)}>Hello World</h1>
            {!hasGeeted && <div className="click-arrow"></div>}
          </div>
          {hasGeeted &&
            <div className="hidden-container">
              <div className="text-container">
                <p>and welcome to Ja<span>mmm</span>dersen&trade;!</p>
                <p>Meet friends! Date! Share music and get in touch with your favorite<br />
                  artists! — few of many things you won't be able to do on this website.<br />
                  Still you can search for some songs and stare at musicians.</p>
                <p>Great!</p>
              </div>
              <span className="scissors">&#9987;</span>
            </div>}
        </div>
      </div>
    </React.Fragment>
  );
}