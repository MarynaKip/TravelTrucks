import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    bodyType: '',
    location: '',
    features: {
      'AC': false,
      'kitchen': false,
      'bathroom': false,
      'TV': false,
      'automatic': false
    }
  },
  reducers: {
    changeBodyType(state, action) {
      return {
        ...state,
        bodyType: action.payload,
      };
    },
    changeLocation(state, action) {
      return {
        ...state,
        location: action.payload,
      }
    },
    addFeature(state, action) {
      return {
        ...state,
        features: [...state.features, action.payload],
      };
    },
    removeFeature(state, action) {
      return {
        ...state,
        features: state.filter(item => item !== action.payload)
      };
    },
  },
});

export const { changeBodyType, changeLocation, addFeature, removeFeature } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

export const selectLocationFilter = (state) => state.filters.location;
export const selectBodyTypeFilter = (state) => state.filters.bodyType;
export const selectFeatures = (state) => state.filters.features;

