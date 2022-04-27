import { createSlice } from '@reduxjs/toolkit';

export const detailsSlice = createSlice({
  name: 'details',
  initialState: { value: {} },
  reducers: {
    getDetails: (state, action) => {
      state.value = action.payload;
    },
    eraseDetails: (state) => {
      state.value = {};
    }
  }
});

export const { getDetails, eraseDetails } = detailsSlice.actions;

export default detailsSlice.reducer;