import { Product } from './store';

export enum ListingActionsTypes {
  FETCH_PRODUCTS = `@@listing/products/fetch`,
  FETCH_PRODUCTS_SUCCESS = `@@listing/products/fetch/success`,
  FETCH_PRODUCTS_ERROR = `@@listing/products/fetch/error`,
}

export const fetchProductsAction = () => ({ type: ListingActionsTypes.FETCH_PRODUCTS } as const);
export const fetchProductsSuccessAction = (products: Product[]) =>
  ({
    type: ListingActionsTypes.FETCH_PRODUCTS_SUCCESS,
    payload: products,
  } as const);
export const fetchProductsErrorAction = (error: Error) =>
  ({
    type: ListingActionsTypes.FETCH_PRODUCTS_ERROR,
    error,
  } as const);

export type ListingActions =
  | ReturnType<typeof fetchProductsAction>
  | ReturnType<typeof fetchProductsSuccessAction>
  | ReturnType<typeof fetchProductsErrorAction>;
