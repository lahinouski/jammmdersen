import { configureStore } from '@reduxjs/toolkit';
import searchResultsReducer from '../features/searchResultsSlice';
import detailsReducer from '../features/detailsSlice';
import currentUserUsernameReducer from '../features/currentUserUsernameSlice';

export const store = configureStore({
  reducer: {
    currentUserUsername: currentUserUsernameReducer,
    searchResults: searchResultsReducer,
    details: detailsReducer
  }
});