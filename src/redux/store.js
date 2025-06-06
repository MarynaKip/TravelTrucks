import { configureStore } from '@reduxjs/toolkit';
import {catalogReducer} from './catalogSlice';
import {filtersReducer} from './filtersSlice';
import {favoritesReducer} from './favoritesSlice';

export const store = configureStore(
  {  
    reducer: {
        catalog: catalogReducer,
        filters: filtersReducer,
        favorites: favoritesReducer,
    },
  }
);