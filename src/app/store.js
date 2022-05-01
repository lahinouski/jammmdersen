import { configureStore } from '@reduxjs/toolkit';
import currentUserUsernameReducer from '../features/currentUserUsernameSlice';
import searchResultsReducer from '../features/searchResultsSlice';
import detailsReducer from '../features/detailsSlice';

export const store = configureStore({
  reducer: {
    currentUserUsername: currentUserUsernameReducer,
    searchResults: searchResultsReducer, // Memoizing Selectors with Reselect
    details: detailsReducer
  }
});