import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { Colors } from '../../basics/Colors';

export interface PriceProps {
  className?: string;
  children: ReactElement | string | number;
}

export const Price = ({ className, children }: PriceProps): ReactElement => {
  return <Container className={className}>₺ {children}</Container>;
};

const Container = styled.span`
  font-weight: bold;
  color: ${Colors.skyBlue100};
`;
