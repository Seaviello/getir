import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { Spacing } from '../../common/basics/Spacing';
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
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-areas:
    'header header'
    'add history';
  grid-template-columns: minmax(0, 1fr) minmax(0, 3fr);
  grid-column-gap: ${Spacing.L}px;
  grid-row-gap: ${Spacing.XL};
  padding: ${Spacing.L}px;
`;
