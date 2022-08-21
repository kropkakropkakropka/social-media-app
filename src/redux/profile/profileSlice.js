import { createSlice } from "@reduxjs/toolkit";
import { registerProfile } from './profileActions';

const initialState = {
    loading: false,
    profileInfo: {},
    userToken: null,
    error: null,
    success: false
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: {
        [registerProfile.pending]: (state) =>{
            state.loading = true
            state.error = null
        },
        [registerProfile.fulfilled]: (state) =>{
            state.loading = false
            state.success = true
        },
        [registerProfile.rejected]: (state, { payload }) =>{
            state.loading = false
            state.error = payload
        }
    }
})

//createSlice is a function that accepts an initial state, an object of reducer functions, 
//and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

export default profileSlice.reducer;