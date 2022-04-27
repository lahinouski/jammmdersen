import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: { value: [] },
  reducers: {
    updateUsers: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { updateUsers } = usersSlice.actions;

export default usersSlice.reducer;