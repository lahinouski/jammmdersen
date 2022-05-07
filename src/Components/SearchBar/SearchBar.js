import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import { useSearchBar } from './useSearchBar';
import { Button } from '../';
import './SearchBar.css';

export default function SearchBar() {
  const { search } = useSearchBar();
  const [term, setTerm] = useState('');
  const debouncedSearch = debounce(() => search(term), 150);

  useEffect(() => debouncedSearch.cancel(), [debouncedSearch]);

  return (
    <div className="search-bar">
      <input
        onChange={(event) => setTerm(event.target.value)}
        onKeyPress={(event) => event.key === 'Enter' && debouncedSearch()}
        placeholder="Enter a song, album, or artist." />
      <Button search={search} term={term} label={'SEARCH'} />
    </div>
  );
}