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
            //no need to specify the ip address because of proxy configuration in package.json
        }catch(error){
            if(error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message)
            }else{
                return rejectWithValue(error.message)
            }
        }
    }
)