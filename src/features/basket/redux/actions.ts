import { Product } from '../../types';

export enum BasketActionTypes {
  ADD_PRODUCT = `@@basket/product/add`,
  REMOVE_PRODUCT = `@@basket/product/remove`,
}

export const addProductAction = (product: Product) =>
  ({ type: BasketActionTypes.ADD_PRODUCT, payload: product } as const);
export const removeProductAction = (product: Product) =>
  ({ type: BasketActionTypes.REMOVE_PRODUCT, payload: product } as const);

export type BasketActions = ReturnType<typeof addProductAction> | ReturnType<typeof removeProductAction>;
