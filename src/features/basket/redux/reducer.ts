import { Reducer } from 'redux';

import { RootAction } from '../../../redux/actions';
import { BasketActionTypes } from './actions';
import { BasketStore, defaultStore } from './store';

export const basketReducer: Reducer<BasketStore, RootAction> = (state = defaultStore, action) => {
  switch (action.type) {
    case BasketActionTypes.ADD_PRODUCT: {
      const newProduct = action.payload;
      const currentBasket = state.products;
      const productInBasket = currentBasket.find((product) => product.id === newProduct.id);
      return {
        ...state,
        products: productInBasket
          ? currentBasket.map((product) => {
              if (product.id === newProduct.id) {
                return { ...product, quantity: product.quantity + 1 };
              }
              return product;
            })
          : [...currentBasket, { ...newProduct, quantity: 1 }],
      };
    }
    case BasketActionTypes.REMOVE_PRODUCT: {
      return {
        ...state,
        products: state.products
          .map((product) => {
            if (product.id === action.payload.id) {
              return { ...product, quantity: product.quantity - 1 };
            }
            return product;
          })
          .filter((product) => product.quantity > 0),
      };
    }
    default:
      return state;
  }
};
