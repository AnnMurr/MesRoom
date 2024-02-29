import { configureStore } from "@reduxjs/toolkit";
import { userDataReducer } from "../redusers/userReduser";

export const store = configureStore({
    reducer: {
        user: userDataReducer,
    }
})