import React from 'react';
import SearchBar from '../Components/SearchBar/SearchBar';
import SearchResults from '../Components/SearchResults/SearchResults';
// import { useSearchParams } from "react-router-dom";

export default function Search(props) {
  return (
    <React.Fragment>
      <SearchBar />
      <div className="App-playlist">
        <SearchResults />
      </div>
    </React.Fragment>
  );
}