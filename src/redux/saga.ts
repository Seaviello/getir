import { all, fork } from '@redux-saga/core/effects';
import { Saga } from 'redux-saga';

const sagas: Saga[] = [
  /* feature sagas */
];

export function* rootSaga() {
  yield all(sagas.map((saga) => fork(saga)));
}
