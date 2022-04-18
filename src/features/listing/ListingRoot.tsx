import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { Spacing } from '../../common/basics/Spacing';

export const ListingRoot = (): ReactElement => {
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
