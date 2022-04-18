import React, { ReactElement, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { changeProductPageAction } from '../../redux/actions';
import { selectListingPage, selectListingPageLimit, selectListingTotalCount } from '../../redux/selectors';

export interface ListingPaginationProps {
  className?: string;
}

export const ListingPagination = ({ className }: ListingPaginationProps): ReactElement => {
  const dispatch = useDispatch();

  const currentPage = useSelector(selectListingPage);
  const totalCount = useSelector(selectListingTotalCount);
  const pageLimit = useSelector(selectListingPageLimit);

  const handleNextPage = useCallback(() => {
    dispatch(changeProductPageAction(currentPage + 1));
  }, [currentPage, dispatch]);

  const handlePrevPage = useCallback(() => {
    dispatch(changeProductPageAction(currentPage - 1));
  }, [currentPage, dispatch]);

  const handleSelectPage = useCallback(
    (page: number) => {
      dispatch(changeProductPageAction(page));
    },
    [dispatch],
  );

  const numOfPages = Math.ceil(totalCount / pageLimit);

  const pagesToShow = Array.from({ length: numOfPages }).map((_, index) => index + 1);

  return (
    <Container className={className}>
      {currentPage !== 1 && <button onClick={handlePrevPage}>← Prev</button>}
      {pagesToShow.map((el) => (
        <button key={el} onClick={() => handleSelectPage(el)}>
          {el}
        </button>
      ))}
      {currentPage !== numOfPages && <button onClick={handleNextPage}>→ Next</button>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
`;
