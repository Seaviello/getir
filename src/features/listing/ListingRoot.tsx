import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { Basket } from '../basket/components/Basket/Basket';
import { ListingProducts } from './components/ListingProducts/ListingProducts';
import { fetchProductsAction } from './redux/actions';

export const ListingRoot = (): ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, [dispatch]);

  return (
    <Container>
      <ListingProducts />
      <Basket />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
