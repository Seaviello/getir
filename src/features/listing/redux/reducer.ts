import { Reducer } from 'redux';

import { RootAction } from '../../../redux/actions';
import { ListingActionsTypes } from './actions';
import { defaultStore, ListingStore } from './store';

export const listingReducer: Reducer<ListingStore, RootAction> = (state = defaultStore, action) => {
  switch (action.type) {
    case ListingActionsTypes.FETCH_PRODUCTS: {
      return {
        ...state,
        products: {
          value: state.products.value,
          loading: true,
        },
      };
    }
    case ListingActionsTypes.FETCH_PRODUCTS_SUCCESS: {
      const { products, totalCount } = action.payload;
      return {
        ...state,
        products: {
          value: products,
        },
        totalCount,
      };
    }
    case ListingActionsTypes.FETCH_PRODUCTS_ERROR: {
      return {
        ...state,
        products: {
          value: state.products.value,
          error: action.error,
        },
      };
    }
    case ListingActionsTypes.CHANGE_PAGE: {
      return {
        ...state,
        page: action.payload,
      };
    }
    case ListingActionsTypes.CHANGE_SORT: {
      const { sortOrder, sortField } = action.payload;
      return {
        ...state,
        sortField,
        sortOrder,
      };
    }
    default:
      return state;
  }
};
