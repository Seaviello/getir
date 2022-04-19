import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { Colors } from '../../basics/Colors';

export interface CardProps {
  className?: string;
  children: ReactElement | ReactElement[] | undefined;
}

export const Card = ({ className, children }: CardProps): ReactElement => {
  return <Container className={className}>{children}</Container>;
};

const Container = styled.div`
  box-shadow: 0 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
  background-color: ${Colors.white};
`;
