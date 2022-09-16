import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    publishPost: (state, action) => {
      state.push(action.payload);
    },
    deletePost: (state, action) => {},
  },
});

export const { publishPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
