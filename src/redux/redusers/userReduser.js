import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatMessages: null,
  usersOnline: null,
  userMessage: "",
  isEditingMessage: false,
};

const userSlice = createSlice({
  name: "chatData",
  initialState,
  reducers: {
    setChatMessages: (state, action) => {
      state.chatMessages = action.payload;
    },

    setUsersOnline: (state, action) => {
      state.usersOnline = action.payload;
    },

    setUserMessage: (state, action) => {
      state.userMessage = action.payload;
    },

    setIsEditingMessage: (state, action) => {
      state.isEditingMessage = action.payload;
    },
  },
});

export const chatDataReducer = userSlice.reducer;

export const { setChatMessages, setUsersOnline, setUserMessage, setIsEditingMessage } = userSlice.actions;
