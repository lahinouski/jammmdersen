import { createSlice } from '@reduxjs/toolkit';
// import { createSelector } from 'reselect';

export const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState: { value: [] },
  reducers: {
    getSearchResults: (state, action) => {
      state.value = action.payload;
    },
    eraseSearchResults: (state) => {
      state.value = [];
    }
  }
});

// export const getMemoizedSearchResults = createSelector(
//   (state) => state.searchResults,
//   (searchResults) => searchResults.value
// );

export const { getSearchResults, eraseSearchResults } = searchResultsSlice.actions;

export default searchResultsSlice.reducer;