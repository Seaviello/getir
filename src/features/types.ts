export interface Product {
  tags: string[];
  price: number;
  name: string;
  description: string;
  slug: string;
  added: number;
  manufacturer: string;
  itemType: ProductType;
  id: number;
}

export type BasketProduct = Product & { quantity: number };

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
