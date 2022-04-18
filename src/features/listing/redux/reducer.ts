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
      return {
        ...state,
        products: {
          value: action.payload,
        },
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
    default:
      return state;
  }
};
