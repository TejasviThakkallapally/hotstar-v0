import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auths",
  initialState: [],
  reducers: {
    addauth: (state, action) => {
      const auth = {
        username: action.payload.username,
        password: action.payload.password,
        email: action.payload.email,
      };
      state.push(auth);
    },
    clearauths: (state) => {
      return []; // Reset the state to an empty array
    },
  },
});

// this is for dispatch
export const { addauth, clearauths } = authSlice.actions;

// this is for configureStore
export default authSlice.reducer;
