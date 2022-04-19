import React, { ChangeEvent, ReactElement, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Spacing } from '../../../../common/basics/Spacing';
import { Card } from '../../../../common/components/Card/Card';
import { CardHeader } from '../../../../common/components/Card/CardHeader';
import { SortField, SortOrder } from '../../../types';
import { changeListingSortAction } from '../../redux/actions';
import { selectListingSortField, selectListingSortOrder } from '../../redux/selectors';

export interface ListingSortingProps {
  className?: string;
}

enum SortOption {
  PRICE_ASC = 'price-asc',
  PRICE_DSC = 'price-dsc',
  TIME_ASC = 'time-asc',
  TIME_DSC = 'time-dsc',
}

export const ListingSorting = ({ className }: ListingSortingProps): ReactElement => {
  const dispatch = useDispatch();
  const sortField = useSelector(selectListingSortField);
  const sortOrder = useSelector(selectListingSortOrder);

  const handleChangeOption = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.stopPropagation();
      const sortOption = event.target.value as unknown as SortOption;
      dispatch(
        changeListingSortAction({
          sortField:
            sortOption === SortOption.TIME_ASC || sortOption === SortOption.TIME_DSC
              ? SortField.CREATED_AT
              : SortField.PRICE,
          sortOrder:
            sortOption === SortOption.PRICE_ASC || sortOption === SortOption.TIME_ASC ? SortOrder.ASC : SortOrder.DESC,
        }),
      );
    },
    [dispatch],
  );

  return (
    <Container className={className}>
      <CardHeader>Sorting</CardHeader>
      <StyledCard>
        <RadioOptions>
          <label htmlFor="price-ascending">
            <input
              type="radio"
              id="price-ascending"
              name="product-sort"
              value={SortOption.PRICE_ASC}
              checked={sortField === SortField.PRICE && sortOrder === SortOrder.ASC}
              onChange={handleChangeOption}
            />
            Price low to high
          </label>

          <label htmlFor="price-descending">
            <input
              type="radio"
              id="price-descending"
              name="product-sort"
              value={SortOption.PRICE_DSC}
              checked={sortField === SortField.PRICE && sortOrder === SortOrder.DESC}
              onChange={handleChangeOption}
            />
            Price high to low
          </label>

          <label htmlFor="created-at-ascending">
            <input
              type="radio"
              id="created-at-ascending"
              name="product-sort"
              value={SortOption.TIME_ASC}
              checked={sortField === SortField.CREATED_AT && sortOrder === SortOrder.ASC}
              onChange={handleChangeOption}
            />
            New to old
          </label>

          <label htmlFor="created-at-descending">
            <input
              type="radio"
              id="created-at-descending"
              name="product-sort"
              value={SortOption.TIME_DSC}
              checked={sortField === SortField.CREATED_AT && sortOrder === SortOrder.DESC}
              onChange={handleChangeOption}
            />
            Old to new
          </label>
        </RadioOptions>
      </StyledCard>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  > * + * {
    margin-top: ${Spacing.S}px;
  }
`;

const StyledCard = styled(Card)`
  padding: ${Spacing.L}px;
`;

const RadioOptions = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
`;
