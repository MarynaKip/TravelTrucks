import { getById, fetchFiltered } from '../campersOps';

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

export const catalogExtraReducers = (builder) => {
  builder
    .addCase(fetchFiltered.pending, handlePending)
    .addCase(fetchFiltered.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.items = state.pagination.page === 1
        ? action.payload.items
        : [...state.items, ...action.payload.items];
    })
    .addCase(fetchFiltered.rejected, handleRejected)

    .addCase(getById.pending, handlePending)
    .addCase(getById.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.selected.item = action.payload;
    })
    .addCase(getById.rejected, handleRejected);
};
