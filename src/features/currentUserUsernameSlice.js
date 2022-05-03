import { createSlice } from '@reduxjs/toolkit';

export const currentUserUsernameSlice = createSlice({
  name: 'currentUserUsername',
  initialState: { value: '' },
  reducers: {
    setCurrentUser: (state, action) => {
      state.value = action.payload;
    },
    eraseCurrentUser: (state) => {
      state.value = '';
    }
  }
});

export const { setCurrentUser, eraseCurrentUser } = currentUserUsernameSlice.actions;

export default currentUserUsernameSlice.reducer;