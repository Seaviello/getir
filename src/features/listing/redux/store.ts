import { RequestStatus } from '../../../common/utils/RequestStatus';

export interface Product {
  id: string;
}

export const ALL = '__all__';

export interface Brand {
  name: string;
}

export interface Tag {
  name: string;
}

export enum SortField {
  PRICE = 'price',
  CREATED_AT = 'added',
}

export enum SortOrder {
  ASC = 'asc',
  DSC = 'dsc',
}

export enum ProductType {
  MUG = 'mug',
  SHIRT = 'shirt',
}

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
