import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./createPostSlice";

export const store = configureStore({
  reducer: {
    post: postReducer,
  },
});
