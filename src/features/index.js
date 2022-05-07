import { setCurrentUser, eraseCurrentUser } from './currentUserUsernameSlice';
import { setSearchResults, eraseSearchResults } from './searchResultsSlice';
import { getDetails, eraseDetails } from './detailsSlice';
import store from './loggerMiddleware';

export {
  setCurrentUser,
  eraseCurrentUser,
  setSearchResults,
  eraseSearchResults,
  getDetails,
  eraseDetails,
  store
};