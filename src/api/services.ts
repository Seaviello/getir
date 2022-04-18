import axios from 'axios';

import { ProductType, SortField, SortOrder } from '../features/types';

const API_URL = 'http://localhost:3000';
const PRODUCT_URL = `${API_URL}/items`;

export const getProducts = ({
  sortField,
  sortOrder,
  page,
  pageLimit,
  selectedProductType,
}: {
  sortField: SortField;
  sortOrder: SortOrder;
  page: number;
  pageLimit: number;
  selectedProductType: ProductType;
}) =>
  axios.get(PRODUCT_URL, {
    params: {
      _page: page,
      _limit: pageLimit,
      _sort: sortField,
      _order: sortOrder,
      itemType: selectedProductType,
    },
  });
