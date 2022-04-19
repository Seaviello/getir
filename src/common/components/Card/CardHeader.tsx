import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { Colors } from '../../basics/Colors';

export interface CardHeaderProps {
  className?: string;
  children?: string | ReactElement;
}

export const CardHeader = ({ className, children }: CardHeaderProps): ReactElement => {
  return <Container className={className}>{children}</Container>;
};

const Container = styled.span`
  color: ${Colors.graphiteGray100};
  font-size: 13px;
  line-height: 18px;
`;
