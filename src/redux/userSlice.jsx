
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  username: '',
  Api_Job_Data: null,
  UserData: null,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setUserLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUserError: (state, action) => {
      state.error = action.payload;
    },
    setApi_Job_Data: (state, action) => {
      state.Api_Job_Data = action.payload;
    },
    setUserData: (state, action) => {
      state.UserData = action.payload;
    },
  },
});

// Export actions
export const { setUsername, setUserLoading,setUserData, setUserError, setApi_Job_Data } = userSlice.actions;

// Selectors
export const selectUsername = state => state.user.username;
export const selectUserData = state => state.user.UserData;
export const selectApi_Job_Data = state => state.user.Api_Job_Data;
export const selectUserLoading = state => state.user.loading;
export const selectUserError = state => state.user.error;

// Reducer
export default userSlice.reducer;
