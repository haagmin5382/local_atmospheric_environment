import { createSlice } from "@reduxjs/toolkit";

export const getDataFromAPI = createSlice({
  name: "Info",
  initialState: {
    value: {},
  },
  reducers: {
    setInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setInfo } = getDataFromAPI.actions;
export default getDataFromAPI.reducer;
