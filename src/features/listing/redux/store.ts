import { RequestStatus } from '../../../common/utils/RequestStatus';
import { ALL, Brand, Product, ProductType, SortField, SortOrder, Tag } from '../../types';

export interface ListingStore {
  products: RequestStatus<Product[]>;
  brands: RequestStatus<Brand[]>;
  tags: RequestStatus<Tag[]>;
  sortField: SortField;
  sortOrder: SortOrder;
  selectedBrands: Brand['name'][] | typeof ALL;
  selectedTags: Tag['name'][] | typeof ALL;
  selectedProductType: ProductType;
  page: number;
}

export const defaultStore: ListingStore = {
  products: {},
  brands: {},
  tags: {},
  sortField: SortField.PRICE,
  sortOrder: SortOrder.ASC,
  selectedBrands: ALL,
  selectedTags: ALL,
  selectedProductType: ProductType.MUG,
  page: 0,
};
