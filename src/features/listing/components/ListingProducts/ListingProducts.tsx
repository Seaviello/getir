import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Spacing } from '../../../../common/basics/Spacing';
import { Product } from '../../../../common/components/Product/Product';
import { selectListingProducts } from '../../redux/selectors';

export interface ListingProductsProps {
  className?: string;
}

export const ListingProducts = ({ className }: ListingProductsProps): ReactElement => {
  const products = useSelector(selectListingProducts);

  return (
    <Container className={className}>
      {products?.value?.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 124px);
  grid-gap: ${Spacing.M}px;
`;
