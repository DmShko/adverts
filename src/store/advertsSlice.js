import { createSlice } from '@reduxjs/toolkit';

import { getAdverts } from '../API/advertsAPI';

const advertsInitialState = {
 
  isLoading: false,
  cars: [],
  search: {
    brand: '',
    price: '',
    from: '',
    to: '',
  },
  favorites: [],

};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: advertsInitialState,
  reducers: {

    change(state, action) {
      switch(action.payload.operation) {
        case 'changeSearch':
          state.search = {...state.search, 
            brand: action.payload.data.brand, 
            price: `$${action.payload.data.price}`,
            from: action.payload.data.from,
            to: action.payload.data.to,
          };
          break;
        case 'addFavorites':
            state.favorites = [...state.favorites, action.payload.data];
            break;
        case 'deleteFavorites':
            state.favorites = state.favorites.filter(element => element !== action.payload.data);
            break;
        default:
          break;
      }
    }

  },
  extraReducers: builder => {
    builder.addCase(getAdverts.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(getAdverts.fulfilled, (state, action) => {
      state.isLoading = false;
   
      state.cars = action.payload;
      // some actions with 'action'...
    });
    builder.addCase(getAdverts.rejected, state => {
      state.isLoading = false;
    });

  },
});

export const {
  change
} = advertsSlice.actions;

export default advertsSlice.reducer;
