import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authTokenAcquired(state, action) {
            state.token = action.payload
        }
    }
});

export const { authTokenAcquired } = authSlice.actions

export default authSlice.reducer;