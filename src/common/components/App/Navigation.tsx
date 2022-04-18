import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { Colors } from '../../basics/Colors';
import { Spacing } from '../../basics/Spacing';

export interface NavigationProps {
  className?: string;
}

export const Navigation = ({ className }: NavigationProps): ReactElement => {
  return <Container className={className}>m a r k e t</Container>;
};

const Container = styled.div`
  height: 76px;
  background-color: ${Colors.skyBlue100};
  color: ${Colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: ${Spacing.XL}px;
  padding-right: ${Spacing.XL}px;
`;
