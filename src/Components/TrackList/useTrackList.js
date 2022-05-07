import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchResults } from '../../features';
import Spotify from '../../util/Spotify';

export const useTrackList = () => {
  const searchResults = useSelector((state) => state.searchResults.value);
  const [params] = useSearchParams();
  const searchTerm = params.get('track');
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchTerm) {
      Spotify.search(searchTerm)
        .then((tracks) => dispatch(setSearchResults(tracks)));
    }
  }, [searchTerm, dispatch]);

  return { searchResults };
};