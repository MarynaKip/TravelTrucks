import { createSlice } from '@reduxjs/toolkit';

const loadFavorites = () => {
  try {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.log(error)
    return [];
  }
};

const saveFavorites = (favorites) => {
  try {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  } catch (e) {
    console.error('Failed to save favorites:', e);
  }
};

const initialState = {
  favoritesIds: loadFavorites(),
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action) {
      if (!state.favoritesIds.includes(action.payload)) {
        state.favoritesIds.push(action.payload);
        saveFavorites(state.favoritesIds);
      }
    },
    deleteFavorite(state, action) {
      state.favoritesIds = state.favoritesIds.filter(id => id !== action.payload);
      saveFavorites(state.favoritesIds);
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

