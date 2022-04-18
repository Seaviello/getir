import { BasketActions } from '../features/basket/redux/actions';
import { ListingActions } from '../features/listing/redux/actions';

export type RootAction = ListingActions | BasketActions;
