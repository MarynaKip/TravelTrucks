export const selectCatalog = (state) => state.catalog.items;
export const selectLoading = (state) => state.catalog.loading;
export const selectError = (state) => state.catalog.error;
export const selectCapmerId = (state) => state.catalog.selected.id;
export const selectSelectedItem = (state) => state.catalog.selected.item;
export const selectPagination = (state) => state.catalog.pagination;