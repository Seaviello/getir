import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Spacing } from '../../common/basics/Spacing';
import { fetchProductsAction } from './redux/actions';
import { selectListingProducts } from './redux/selectors';

export const ListingRoot = (): ReactElement => {
  const dispatch = useDispatch();
  const products = useSelector(selectListingProducts);

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, [dispatch]);

  console.log(products);

  return <Container>Root</Container>;
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
