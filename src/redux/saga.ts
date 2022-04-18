import { all, fork } from '@redux-saga/core/effects';
import { Saga } from 'redux-saga';

import { listingSaga } from '../features/listing/redux/saga';

const sagas: Saga[] = [listingSaga];

export function* rootSaga() {
  yield all(sagas.map((saga) => fork(saga)));
}
