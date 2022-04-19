import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

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
      <StyledListingProducts />
      <Basket />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledListingProducts = styled(ListingProducts)`
  max-width: 608px;
`;
