import React, { ReactElement } from 'react';
import styled from 'styled-components';

export interface ListingBrandFilterProps {
  className?: string;
}

export const ListingBrandFilter = ({ className }: ListingBrandFilterProps): ReactElement => {
  return <Container className={className}></Container>;
};

const Container = styled.div``;
