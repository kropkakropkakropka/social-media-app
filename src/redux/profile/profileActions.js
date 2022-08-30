import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const registerProfile = createAsyncThunk(
    '/register', //action type string
    //calback function
    async(newProfile, { rejectWithValue }) => {
        try{
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            await axios.post('http://localhost:5000/api/register', newProfile, config)
        }catch(error){
            if(error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message)
            }else{
                return rejectWithValue(error.message)
            }
        }
    }
)

export const loginProfile = createAsyncThunk(
    '/login', //action type string
    //calback function
    async(profile, { rejectWithValue }) => {
        try{
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const { data } = await axios.post('http://localhost:5000/api/login', profile, config)
            localStorage.setItem('accessToken', data.accessToken)
            return data
        }catch(error){
            if(error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message)
            }else{
                return rejectWithValue(error.message)
            }
        }
    }
)

export const getProfileDetails = createAsyncThunk(
    '/getProfileDetails', //action type string
    //calback function
    async(arg, { getState, rejectWithValue }) => {
        try{
            const { profile } = getState(); //get profile data from store

            const config = {
                headers: {
                    Authorization: `Bearer ${profile.accessToken}`,
                },
            }
            const { data } = await axios.get('http://localhost:5000/api/profile', config)
            return data
        }catch(error){
            if(error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message)
            }else{
                return rejectWithValue(error.message)
            }
        }
    }
)