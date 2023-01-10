import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import loadingReducer from "./loadingSlice";
import messageSlice from "./messageSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer,
    message: messageSlice,
  },
});
