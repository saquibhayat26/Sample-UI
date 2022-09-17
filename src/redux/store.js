import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./createPostSlice";
import filterDataReducer from "./filterDataSlice";

export const store = configureStore({
  reducer: {
    post: postReducer,
    filter: filterDataReducer,
  },
});
