import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: "" };

export const filterDataSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { filterData } = filterDataSlice.actions;
export default filterDataSlice.reducer;
