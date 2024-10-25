import { createSlice } from "@reduxjs/toolkit";

export const descSlice = createSlice({
  name: "descs",
  initialState: [],
  reducers: {
    adddesc: (state, action) => {
      const desc = {
        description: action.payload.description,
      };
      state.push(desc);
    },
    cleardescs: (state) => {
      return []; // Reset the state to an empty array
    },
  },
});

// this is for dispatch
export const { adddesc, cleardescs } = descSlice.actions;

// this is for configureStore
export default descSlice.reducer;
