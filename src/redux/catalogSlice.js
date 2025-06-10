import { createSlice, createSelector } from '@reduxjs/toolkit';
// import { selectLocationFilter, selectBodyTypeFilter, selectFeatures } from './filtersSlice'
import { fetchAll } from './campersOps'

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    items: [],
    filteredItems: [],
    loading: false,
    error: null,
    selectedCamperId: 1,
  },
  reducers: {
    changeSelectedCamperId(state, action) {
      return {
        ...state,
        selectedCamperId: action.payload,
      };
    },
    refreshFilteredItemsList(state) {
      return {
        ...state,
        filteredItems: state.items
      }
    },
    changeFilteredItemsList(state, action) {
      const { location, bodyType, features} = action.payload
      return {
        ...state,
        filteredItems: state.items ?? state.items.filter(camper =>
          camper.location.toLowerCase().includes(location.toLowerCase())
          && camper.form.includes(bodyType)
          && Object.entries(features).every(([key, value]) => {
            if(key === 'automatic') {
              return (value && camper.transmission === "automatic") || (!value && camper.transmission !== "automatic")
            } else {
              return value ? value === camper[key] : true
            }
          })
        ),
      };
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchAll.pending, handlePending)
    .addCase(fetchAll.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.items = action.payload.items;
    })
    .addCase(fetchAll.rejected, handleRejected)
  }
});

export const { changeSelectedCamperId, refreshFilteredItemsList, changeFilteredItemsList } = catalogSlice.actions;

export const catalogReducer = catalogSlice.reducer;

// Selectors

export const selectCatalog = (state) => state.catalog.items;

export const selectFilteredCatalog = (state) => state.catalog.filteredItems;

export const selectLoading = (state) => state.catalog.loading;

export const selectError = (state) => state.catalog.error;

export const selectCapmerId = (state) => state.catalog.selectedCamperId;



// export const selectFilteredCatalog = createSelector(
//   [selectCatalog, selectLocationFilter, selectBodyTypeFilter, selectFeatures],
//   (catalog, locationFilter, bodyTypeFilter, featuresFilter) =>
//     catalog ?? catalog.filter(camper =>
//       camper.location.toLowerCase().includes(locationFilter.toLowerCase())
//       && camper.form.includes(bodyTypeFilter)
//       && Object.entries(featuresFilter).every(([key, value]) => {
//         if(key === 'automatic') {
//           return (value && camper.transmission === "automatic") || (!value && camper.transmission !== "automatic")
//         } else {
//           return value ? value === camper[key] : true
//         }
//       })
//     )
// );

export const selectCatalogItem = createSelector(
  [selectCatalog, selectCapmerId],
  (catalog, id) => {
    return catalog.find(camper => camper.id === String(id)) || null;
  }
);
