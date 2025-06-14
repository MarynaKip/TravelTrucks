import { configureStore } from '@reduxjs/toolkit';
import {catalogReducer} from './catalog/catalogSlice';
import {filtersReducer} from './filters/filtersSlice';
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