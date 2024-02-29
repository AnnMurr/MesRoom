import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    redusers: {
        setUserName: (state, action) => {
            state.userName = action.payload
        }
    }
})

export const userDataReducer = userSlice.reducer

export const { setUserName } = userSlice.actions