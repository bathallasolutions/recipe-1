import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";

//Global store
export const store = configureStore({
  reducer: {
    //reducers are defined here
    counter: counterSlice,
  },
});