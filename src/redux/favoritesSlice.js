import { createSlice, createSelector } from '@reduxjs/toolkit';
import { selectCatalog } from './catalog'

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoritesIds: [],
  },
  reducers: {
    addFavorite(state, action) {
      return {
        ...state,
        favoritesIds: [...state.favoritesIds, action.payload],
      };
    },
    deleteFavorite(state, action) {
        return {
          ...state,
          favoritesIds: state.favoritesIds.filter(id => id !== action.payload),
        };
      },
  },
});

export const favoritesReducer = favoritesSlice.reducer;

// Selectors

export const selectFavoritesIds = (state) => state.favorites.favoritesIds;

export const selectFavorites = createSelector(
  [selectCatalog, selectFavoritesIds],
  (catalog, ids) =>
    catalog.filter(camper =>
        ids.includes(camper.id)
    )
);
