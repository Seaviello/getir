import { Product, ProductType, SortField, SortOrder } from '../../types';

export enum ListingActionsTypes {
  FETCH_PRODUCTS = `@@listing/products/fetch`,
  FETCH_PRODUCTS_SUCCESS = `@@listing/products/fetch/success`,
  FETCH_PRODUCTS_ERROR = `@@listing/products/fetch/error`,

  CHANGE_PAGE = `@@listing/page/change`,

  CHANGE_PRODUCT_TYPE = '@@listing/product_type/change',

  CHANGE_SORT = '@@listing/sort/change',
}

export const fetchProductsAction = () => ({ type: ListingActionsTypes.FETCH_PRODUCTS } as const);
export const fetchProductsSuccessAction = ({ products, totalCount }: { products: Product[]; totalCount: number }) =>
  ({
    type: ListingActionsTypes.FETCH_PRODUCTS_SUCCESS,
    payload: { products, totalCount },
  } as const);
export const fetchProductsErrorAction = (error: Error) =>
  ({
    type: ListingActionsTypes.FETCH_PRODUCTS_ERROR,
    error,
  } as const);

export const changeProductPageAction = (page: number) =>
  ({ type: ListingActionsTypes.CHANGE_PAGE, payload: page } as const);

export const changeProductTypeAction = (productType: ProductType) =>
  ({ type: ListingActionsTypes.CHANGE_PRODUCT_TYPE, payload: productType } as const);

export const changeListingSortAction = ({ sortField, sortOrder }: { sortField: SortField; sortOrder: SortOrder }) =>
  ({
    type: ListingActionsTypes.CHANGE_SORT,
    payload: { sortField, sortOrder },
  } as const);

export type ListingActions =
  | ReturnType<typeof fetchProductsAction>
  | ReturnType<typeof fetchProductsSuccessAction>
  | ReturnType<typeof fetchProductsErrorAction>
  | ReturnType<typeof changeProductTypeAction>
  | ReturnType<typeof changeListingSortAction>
  | ReturnType<typeof changeProductPageAction>;
