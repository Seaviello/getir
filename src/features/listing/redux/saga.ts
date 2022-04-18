import { AxiosResponse } from 'axios';
import { call, put, select, takeEvery } from 'redux-saga/effects';

import { getProducts } from '../../../api/services';
import { fetchProductsErrorAction, fetchProductsSuccessAction, ListingActionsTypes } from './actions';
import { selectListingProductsFilters } from './selectors';
import { Product } from './store';

export function* fetchProductsSaga() {
  try {
    const filterOptions: ReturnType<typeof selectListingProductsFilters> = yield select(selectListingProductsFilters);
    const response: AxiosResponse<Product[]> = yield call(getProducts, filterOptions);
    yield put(fetchProductsSuccessAction(response.data));
  } catch (err) {
    const error = err as Error;
    yield put(fetchProductsErrorAction(error));
  }
}

export function* listingSaga() {
  yield takeEvery(ListingActionsTypes.FETCH_PRODUCTS, fetchProductsSaga);
}
