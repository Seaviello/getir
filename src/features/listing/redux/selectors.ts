import { createSelector } from 'reselect';

import { RootState } from '../../../redux/state';

export const selectListingState = (state: RootState) => state.listing;

export const selectListingProducts = (state: RootState) => selectListingState(state).products;
export const selectListingSortOrder = (state: RootState) => selectListingState(state).sortOrder;
export const selectListingSortField = (state: RootState) => selectListingState(state).sortField;
export const selectListingSelectedProductType = (state: RootState) => selectListingState(state).selectedProductType;
export const selectListingPage = (state: RootState) => selectListingState(state).page;
export const selectListingTotalCount = (state: RootState) => selectListingState(state).totalCount;
export const selectListingPageLimit = (state: RootState) => selectListingState(state).pageLimit;

export const selectListingProductsFilters = createSelector(
  selectListingSortOrder,
  selectListingSortField,
  selectListingSelectedProductType,
  selectListingPage,
  selectListingPageLimit,
  (sortOrder, sortField, selectedProductType, page, pageLimit) => ({
    sortOrder,
    sortField,
    page,
    pageLimit,
    selectedProductType,
  }),
);
