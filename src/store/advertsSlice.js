import { createSlice } from '@reduxjs/toolkit';

import { adverts } from '../API/advertsAPI';

const advertsInitialState = {
 
  isLoading: false,

};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: advertsInitialState,
  reducers: {
    
  },
  extraReducers: builder => {
    builder.addCase(adverts.pending, state => {
      state.isLoading = true;
      state.errorGet = null;
    });

    builder.addCase(adverts.fulfilled, (state, action) => {
      state.isLoading = false;

      // some actions with 'action'...
    });
    builder.addCase(adverts.rejected, (state, action) => {
      state.isLoading = false;
    
    });

  },
});

export default advertsSlice.reducer;
