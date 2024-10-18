import { configureStore } from "@reduxjs/toolkit";
import { chatDataReducer } from "../redusers/userReduser";
import { linkGenerationSlice } from "../redusers/linkGenerationReduser";

export const store = configureStore({
    reducer: {
        chatData: chatDataReducer,
        linkData : linkGenerationSlice,
    }
})