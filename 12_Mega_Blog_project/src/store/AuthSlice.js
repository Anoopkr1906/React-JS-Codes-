import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};
//this slice is to track authentication. Wheather user is authenticated or not
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //when user logins
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },

    logout: (state, action) => {
      state.status = false;
      state.userData = null;
    },
  },
});

//! login, logout methods are known as actions

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;