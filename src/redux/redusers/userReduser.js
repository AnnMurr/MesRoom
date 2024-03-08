import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userIcon: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserNameToRedux: (state, action) => {
      state.userIcon = action.payload;
    },
  },
});

export const userDataReducer = userSlice.reducer;

export const { setUserNameToRedux } = userSlice.actions;
