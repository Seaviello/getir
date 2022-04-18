import { RootState } from '../../../redux/state';

export const selectListingState = (state: RootState) => state.listing;

export const selectListingProducts = (state: RootState) => selectListingState(state).products;
export const selectListingProductsFilters = (state: RootState) => {
  const { sortOrder, sortField, selectedProductType, page } = selectListingState(state);
  return {
    sortOrder,
    sortField,
    page,
    selectedProductType,
  };
};
