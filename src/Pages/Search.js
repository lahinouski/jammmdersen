import React, { useEffect } from 'react';
import SearchBar from '../Components/SearchBar/SearchBar';
import SearchResults from '../Components/SearchResults/SearchResults';
import { useSearchParams } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import { eraseSearchResults } from './../features/searchResultsSlice';

export default function Search() {
  const [serchParams, setSerchParams] = useSearchParams();
  // const dispatch = useDispatch();

  useEffect(() => {
    // setSerchParams();
    const { track } = serchParams;

    // return dispatch(eraseSearchResults());
  }, []);

  return (
    <React.Fragment>
      <SearchBar />
      <div className="App-playlist">
        <SearchResults />
      </div>
    </React.Fragment>
  );
}