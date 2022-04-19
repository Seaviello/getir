import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { Spacing } from '../../common/basics/Spacing';
import { Basket } from '../basket/components/Basket/Basket';
import { ListingFilters } from './components/ListingFilters/ListingFilters';
import { ListingProducts } from './components/ListingProducts/ListingProducts';
import { fetchProductsAction } from './redux/actions';

export const ListingRoot = (): ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, [dispatch]);

  return (
    <Container>
      <ListingFilters />
      <ListingProducts />
      <StyledBasket />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 296px 608px 296px;
  grid-column-gap: ${Spacing.M}px;
`;

const StyledBasket = styled(Basket)`
  align-self: flex-start;
`;
