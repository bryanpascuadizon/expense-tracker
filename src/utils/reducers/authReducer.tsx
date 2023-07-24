import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authorizeUser: (state) => {
      state.isAuthenticated = true;
    },
    removeAuthentication: (state) => {
      state.isAuthenticated = true;
    },
  },
});

export const { authorizeUser, removeAuthentication } = authSlice.actions;

export default authSlice.reducer;
