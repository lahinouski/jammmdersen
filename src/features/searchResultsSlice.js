import { createSlice } from '@reduxjs/toolkit';

export const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState: { value: [] },
  reducers: {
    setSearchResults: (state, action) => {
      state.value = action.payload;
    },
    eraseSearchResults: (state) => {
      state.value = [];
    }
  }
});

export const { setSearchResults, eraseSearchResults } = searchResultsSlice.actions;

export default searchResultsSlice.reducer;