import { createSelector } from 'reselect';

import { RootState } from '../../../redux/state';

export const selectBasketState = (state: RootState) => state.basket;

export const selectBasketProducts = (state: RootState) => selectBasketState(state).products;

export const selectBasketTotal = createSelector(selectBasketProducts, (products) =>
  products.reduce((agg, product) => agg + product.quantity * product.price, 0),
);
