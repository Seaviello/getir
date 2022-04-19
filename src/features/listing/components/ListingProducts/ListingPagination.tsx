import React, { ReactElement, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Button, ButtonType } from '../../../../common/components/Button/Button';
import { changeProductPageAction } from '../../redux/actions';
import { selectListingPage, selectListingPageLimit, selectListingTotalCount } from '../../redux/selectors';

export interface ListingPaginationProps {
  className?: string;
}

const DIVIDER = '__DIVIDER__';

/* Check for pre and post chunks to see how many items are there. If there are too many, it should be limited.
 * That part of logic should be extended to see how long is the other part to allow more elements to be shown. */
const limitPaginationEdgeSize = (currentPart: number[]): (number | typeof DIVIDER)[] => {
  return [currentPart[0], DIVIDER, currentPart[currentPart.length - 1]];
};

const limitPaginationSize = (currentPage: number, numOfPages: number): (number | typeof DIVIDER)[] => {
  /* Let's get all pages */
  const pagesToShow = Array.from({ length: numOfPages }).map((_, index) => index + 1);

  /* In case there is only a few pages to show, let's show all of them */
  if (pagesToShow.length <= 9) {
    return pagesToShow;
  }
  /* If there is more pages to show we need to limit them. The assumptions are:
   * 1. We want to always show current page and page directly before and after that
   * 2. Both pre- and post- pages should be limited to maximum 3
   * 3. We need to always check if current page is not on the edge */
  const currentPageIndex = currentPage - 1;
  const hasPreviousChunk = currentPageIndex - 1 > 0;
  const hasNextChunk = currentPageIndex + 2 <= pagesToShow.length - 1;
  const previousPages = hasPreviousChunk ? pagesToShow.slice(0, currentPageIndex - 1) : [];
  const aroundCurrentPages = pagesToShow.slice(
    hasPreviousChunk ? currentPageIndex - 1 : 0,
    hasNextChunk ? currentPageIndex + 2 : pagesToShow.length,
  );
  const nextPages = hasNextChunk ? pagesToShow.slice(currentPageIndex + 2, pagesToShow.length) : [];
  return [...limitPaginationEdgeSize(previousPages), ...aroundCurrentPages, ...limitPaginationEdgeSize(nextPages)];
};

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

  const pagesToShow = limitPaginationSize(currentPage, numOfPages);

  return (
    <Container className={className}>
      {currentPage !== 1 ? (
        <Button onClick={handlePrevPage} buttonType={ButtonType.PLAIN}>
          ← Prev
        </Button>
      ) : (
        <span />
      )}
      <Pages>
        {pagesToShow.map((el) =>
          el === DIVIDER ? (
            <Divider>...</Divider>
          ) : (
            <Button
              key={el}
              onClick={() => handleSelectPage(el)}
              buttonType={el === currentPage ? ButtonType.PRIMARY : ButtonType.PLAIN}
            >
              {el}
            </Button>
          ),
        )}
      </Pages>
      {currentPage !== numOfPages ? (
        <Button onClick={handleNextPage} buttonType={ButtonType.PLAIN}>
          → Next
        </Button>
      ) : (
        <span />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: minmax(auto, 120px) auto minmax(auto, 120px);
`;

const Pages = styled.div`
  justify-self: center;
`;

const Divider = styled.span``;
