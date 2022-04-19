import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Colors } from '../../../../common/basics/Colors';
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
      <Header>Products</Header>
      <ProductsContainer>
        {products?.value?.map((product) => (
          <Product product={product} key={product.id} addProduct={(product) => dispatch(addProductAction(product))} />
        ))}
      </ProductsContainer>

      <StyledListingPagination />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.span`
  font-size: 20px;
  line-height: 26px;
  margin-bottom: ${Spacing.L}px;
  color: ${Colors.graphiteGray100};
`;

const ProductsContainer = styled(Card)`
  display: grid;
  grid-template-columns: repeat(4, 124px);
  grid-gap: ${Spacing.M}px;
  padding: ${Spacing.L}px;
`;

const StyledListingPagination = styled(ListingPagination)`
  padding-top: ${Spacing.XL}px;
  padding-left: ${Spacing.XXXL}px;
  padding-right: ${Spacing.XXXL}px;
`;
