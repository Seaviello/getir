import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { Spacing } from '../../../../common/basics/Spacing';
import { ListingBrandFilter } from './ListingBrandFilter';
import { ListingSorting } from './ListingSorting';

export interface ListingFiltersProps {
  className?: string;
}

export const ListingFilters = ({ className }: ListingFiltersProps): ReactElement => {
  return (
    <Container className={className}>
      <ListingSorting />
      <ListingBrandFilter />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: ${Spacing.L}px;
  }
`;
