import Spotify from './Spotify';
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from 'react-redux';
import { getSearchResults, eraseSearchResults } from '../../features/searchResultsSlice';

const HelperFunctions = {
  isArtistInFavorites(artistId, favoriteArtists) {
    for (let i = 0; i < favoriteArtists.length; i++) {
      if (artistId === favoriteArtists[i].id) return true;
    }
    return false;
  },

  // addArtist(artist) {
  //   if (!isArtistInFavorites(artist.id)) {
  //     const newFavorites = favoriteArtists.concat();
  //     newFavorites.push(artist);
  //     setfavoriteArtists(newFavorites);
  //   }
  // },

  // removeArtist(artist) {
  //   const newFavorites = favoriteArtists.filter(favoriteArtist => favoriteArtist.id !== artist.id);
  //   setfavoriteArtists(newFavorites);
  // }
};

export default HelperFunctions;