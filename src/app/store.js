import { configureStore } from '@reduxjs/toolkit';

// import usersReducer from '../features/usersSlice';
import searchResultsReducer from '../features/searchResultsSlice';
import detailsReducer from '../features/detailsSlice';
import currentUserUsernameReducer from '../features/currentUserUsernameSlice';


// import authReducer from '../features/authSlice';
// import settingsReducer from '../features/settingsSlice';

export const store = configureStore({
  reducer: {
    currentUserUsername: currentUserUsernameReducer,
    searchResults: searchResultsReducer, // Memoizing Selectors with Reselect
    details: detailsReducer
    
    // currentUser: currentUserReducer,
    
    // users: usersReducer, // ???
    // auth: authReducer,
    // settings: settingsReducer
  }
});