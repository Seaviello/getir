import { AxiosResponse } from 'axios';
import { call, put, select, takeEvery } from 'redux-saga/effects';

import { getProducts } from '../../../api/services';
import { Product } from '../../types';
import { fetchProductsErrorAction, fetchProductsSuccessAction, ListingActionsTypes } from './actions';
import { selectListingProductsFilters } from './selectors';

export function* fetchProductsSaga() {
  try {
    const filterOptions: ReturnType<typeof selectListingProductsFilters> = yield select(selectListingProductsFilters);
    const response: AxiosResponse<Product[]> = yield call(getProducts, filterOptions);

    yield put(
      fetchProductsSuccessAction({
        products: response.data,
        totalCount: Number(response.headers['x-total-count']) || response.data.length,
      }),
    );
  } catch (err) {
    const error = err as Error;
    yield put(fetchProductsErrorAction(error));
  }
}

export function* listingSaga() {
  yield takeEvery([ListingActionsTypes.FETCH_PRODUCTS, ListingActionsTypes.CHANGE_PAGE], fetchProductsSaga);
}
