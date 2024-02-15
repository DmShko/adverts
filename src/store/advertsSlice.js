import { createSlice } from '@reduxjs/toolkit';

import { getAdverts } from '../API/advertsAPI';

const advertsInitialState = {
 
  isLoading: false,
  cars: [],

};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: advertsInitialState,
  reducers: {
    
  },
  extraReducers: builder => {
    builder.addCase(getAdverts.pending, state => {
      state.isLoading = true;
      state.errorGet = null;
    });

    builder.addCase(getAdverts.fulfilled, (state, action) => {
      state.isLoading = false;
   
      state.cars = action.payload;
      // some actions with 'action'...
    });
    builder.addCase(getAdverts.rejected, (state, action) => {
      state.isLoading = false;
    
    });

  },
});

export default advertsSlice.reducer;
