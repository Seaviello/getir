import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Spacing } from '../../../../common/basics/Spacing';
import { Card } from '../../../../common/components/Card/Card';
import { Product } from '../../../../common/components/Product/Product';
import { addProductAction } from '../../../basket/redux/actions';
import { selectListingProducts } from '../../redux/selectors';
import { ListingPagination } from './ListingPagination';

export interface ListingProductsProps {
  className?: string;
}

export const ListingProducts = ({ className }: ListingProductsProps): ReactElement => {
  const dispatch = useDispatch();

  const products = useSelector(selectListingProducts);

  return (
    <Container className={className}>
      <span>Products</span>
      <ProductsContainer>
        {products?.value?.map((product) => (
          <Product product={product} key={product.id} addProduct={(product) => dispatch(addProductAction(product))} />
        ))}
      </ProductsContainer>

      <ListingPagination />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductsContainer = styled(Card)`
  display: grid;
  grid-template-columns: repeat(4, 124px);
  grid-gap: ${Spacing.M}px;
  padding: ${Spacing.L}px;
`;
