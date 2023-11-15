// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoginState: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { setLoginState, logout } = userSlice.actions;
export default userSlice.reducer;
