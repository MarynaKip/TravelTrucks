import { createSlice } from '@reduxjs/toolkit';
import { catalogExtraReducers} from './catalogExtraReducers';

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    items: [],
    selected: {
      id: 1,
      item: {},
    },
    loading: false,
    error: null,
    pagination: {
      page: 1,
      limit: 5,
    }
  },
  reducers: {
    changeSelectedCamperId(state, action) {
      state.selected.id = action.payload;
    },
    changePageNumber(state, action) {
      state.pagination.page = action.payload;
    },
  },
  extraReducers: catalogExtraReducers,
});

export const {
  changeSelectedCamperId,
  changePageNumber
} = catalogSlice.actions;

export const catalogReducer = catalogSlice.reducer;
