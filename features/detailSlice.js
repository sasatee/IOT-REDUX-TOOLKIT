// dataSlice.js

import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    responseData: null,
  },
  reducers: {
    setResponseData: (state, action) => {
      state.responseData = action.payload;
    },
  },
});

export const { setResponseData } = dataSlice.actions;

export const selectResponseData = (state) => state.data.responseData;

export default dataSlice.reducer;
