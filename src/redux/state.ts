import { BasketStore, defaultStore as basketDefaultStore } from '../features/basket/redux/store';
import { defaultStore as listingDefaultStore, ListingStore } from '../features/listing/redux/store';

export interface RootState {
  listing: ListingStore;
  basket: BasketStore;
}

export const defaultState: RootState = {
  listing: listingDefaultStore,
  basket: basketDefaultStore,
};
