import axios from 'axios';

import { ProductType, SortField, SortOrder } from '../features/types';

const API_URL = 'http://localhost:3000';
const PRODUCT_URL = `${API_URL}/items`;

export const getProducts = ({
  sortField,
  sortOrder,
  page,
  limit,
  selectedProductType,
}: {
  sortField: SortField;
  sortOrder: SortOrder;
  page?: number;
  limit?: number;
  selectedProductType: ProductType;
}) =>
  axios.get(PRODUCT_URL, {
    params: {
      _page: page || 1,
      _limit: limit || 20,
      _sort: sortField,
      _order: sortOrder,
      itemType: selectedProductType,
    },
  });
