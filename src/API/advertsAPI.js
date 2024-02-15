import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getAdverts = createAsyncThunk(
    'adverts/getAdverts',
    async function(page, {rejectWithValue}) {

        const url = new URL('https://65cc88e0dd519126b83ed035.mockapi.io/adverts');
        url.searchParams.append('page', page);
        url.searchParams.append('limit', 12);
   
        return await axios.get(url).then(responce => {
            console.log(responce);
            return responce.data;
        }).catch(error =>  {
            return rejectWithValue(error.message);
        });
           
    }
);