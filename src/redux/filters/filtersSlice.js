import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    bodyType: '',
    location: '',
    features: {
      'AC': false,
      'Kitchen': false,
      'Bathroom': false,
      'TV': false,
    }
  },
  reducers: {
    changeBodyType(state, action) {
      return {
        ...state,
        bodyType: state.bodyType === action.payload ? '' : action.payload,
      };
    },
    changeLocation(state, action) {
      return {
        ...state,
        location: action.payload,
      }
    },
    addFeature(state, action) {
      state.features[action.payload] = true;
    },
    removeFeature(state, action) {
      state.features[action.payload] = false;
    },
  },
});

export const {
  changeBodyType,
  changeLocation,
  addFeature,
  removeFeature
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
