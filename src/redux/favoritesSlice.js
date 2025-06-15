import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoritesIds: [],
  },
  reducers: {
    addFavorite(state, action) {
      if (!state.favoritesIds.includes(action.payload)) {
        state.favoritesIds.push(action.payload);
      }
    },
    deleteFavorite(state, action) {
        return {
          ...state,
          favoritesIds: state.favoritesIds.filter(id => id !== action.payload),
        };
      },
  },
});

export const {
  addFavorite,
  deleteFavorite
} = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;

// Selectors

export const selectFavoritesIds = (state) => state.favorites.favoritesIds;

