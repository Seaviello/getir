import { defaultStore as listingDefaultStore, ListingStore } from '../features/listing/redux/store';

export interface RootState {
  listing: ListingStore;
}

export const defaultState: RootState = {
  listing: listingDefaultStore,
};
