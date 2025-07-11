import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";


//todo: add post slice
const store = configureStore({
  reducer: {
    auth: authSlice
  }
});

export default store;