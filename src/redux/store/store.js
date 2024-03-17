import { configureStore } from "@reduxjs/toolkit";
import { chatDataReducer } from "../redusers/userReduser";

export const store = configureStore({
    reducer: {
        chatData: chatDataReducer,
    }
})