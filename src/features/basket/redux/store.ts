import { BasketProduct } from '../../types';

export interface BasketStore {
  products: BasketProduct[];
}

export const defaultStore: BasketStore = {
  products: [],
};
