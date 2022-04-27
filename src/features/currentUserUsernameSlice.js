import { createSlice } from '@reduxjs/toolkit';

export const currentUserUsernameSlice = createSlice({
  name: 'currentUserUsername',
  initialState: { value: '' },
  reducers: {
    setCurrentUser: (state, action) => {
      state.value = action.payload;
    },
    logOut: (state) => {
      state.value = '';
    }
  }
});

export const { setCurrentUser, logOut } = currentUserUsernameSlice.actions;

export default currentUserUsernameSlice.reducer;