import React, { ReactElement, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Button, ButtonType } from '../../../../common/components/Button/Button';
import { changeProductPageAction } from '../../redux/actions';
import { selectListingPage, selectListingPageLimit, selectListingTotalCount } from '../../redux/selectors';

const MAX_PAGING_ITEMS = 9;

export interface ListingPaginationProps {
  className?: string;
}

const DIVIDER = '__DIVIDER__';

const limitPages = (pages: number[], otherPart: number[]): (number | typeof DIVIDER)[] => {
  const otherPartLength = otherPart.length;
  /* In case "tail" is short or pages.length is short already */
  if (Math.min(otherPartLength, 3) + pages.length <= 6) {
    return pages;
  }
  return [pages[0], DIVIDER, pages[pages.length - 1]];
};

const mapPagesToShowToElements = (currentPage: number, numOfPages: number): (number | typeof DIVIDER)[] => {
  const pagesToShow = Array.from({ length: numOfPages }).map((_, index) => index + 1);
  if (pagesToShow.length <= MAX_PAGING_ITEMS) {
    return pagesToShow;
  }
  const currentPageIndex = currentPage - 1;
  const hasPre = currentPageIndex - 1 > 0;
  const hasPost = currentPageIndex + 2 <= pagesToShow.length - 1;
  const prePages = hasPre ? pagesToShow.slice(0, currentPageIndex - 1) : [];
  const aroundPages = pagesToShow.slice(
    hasPre ? currentPageIndex - 1 : 0,
    hasPost ? currentPageIndex + 2 : pagesToShow.length,
  );
  const postPages = hasPost ? pagesToShow.slice(currentPageIndex + 2, pagesToShow.length) : [];
  return [...limitPages(prePages, postPages), ...aroundPages, ...limitPages(postPages, prePages)];
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

  const pagesToShow = mapPagesToShowToElements(currentPage, numOfPages);

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
