import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // { id, email }
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload; // { id, email }
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const { loginSuccess, logout } = slice.actions;
export default slice.reducer;
