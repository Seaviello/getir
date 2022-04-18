import { combineReducers, Reducer } from 'redux';

import { listingReducer } from '../features/listing/redux/reducer';
import { RootState } from './state';

export const rootReducer: Reducer<RootState> = combineReducers({
  listing: listingReducer,
});
