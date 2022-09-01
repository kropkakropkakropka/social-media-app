import { createSlice } from "@reduxjs/toolkit";
import { registerProfile, loginProfile, getProfileDetails } from './profileActions';

const accessToken = localStorage.getItem('accessToken');


const initialState = {
    loading: false,
    profileInfo: {},
    accessToken,
    error: null,
    success: false
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {//not asynchronus
        logout: (state) => {
            localStorage.removeItem('accessToken')
            state.loading = false
            state.profileInfo = null
            state.accessToken = null
            state.error = null
        }
    },
    extraReducers: { //asynchronus 
        [loginProfile.pending]: (state) =>{
            state.loading = true
            state.error = null
        },
        [loginProfile.fulfilled]: (state, { payload }) =>{
            state.loading = false
            state.success = true
            state.accessToken = payload.accessToken
            state.profileInfo = payload
        },
        [loginProfile.rejected]: (state, { payload }) =>{
            state.loading = false
            state.error = payload
        },
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
        },
        [getProfileDetails.pending]: (state) =>{
            state.loading = true
        },
        [getProfileDetails.fulfilled]: (state, { payload }) =>{
            state.loading = false
            state.profileInfo = payload
        },
        [getProfileDetails.rejected]: (state, { payload }) =>{
            state.loading = false
            state.error = payload
        }
        //Payload is a non-official, naming convention for the property that holds the actual data in a Redux action object
    }
})

//createSlice is a function that accepts an initial state, an object of reducer functions, 
//and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
export const { logout } = profileSlice.actions
export default profileSlice.reducer;