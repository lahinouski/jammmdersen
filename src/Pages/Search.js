import React from 'react';
import SearchResults from '../Components/SearchResults/SearchResults';

export default function Search(props) {
  return (
    <div className="App-playlist">
      <SearchResults
        searchResults={props.searchResults}
        onDetails={props.onDetails} />
    </div>
  );
}