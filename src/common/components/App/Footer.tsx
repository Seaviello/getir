import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { Colors } from '../../basics/Colors';
import { Spacing } from '../../basics/Spacing';

export interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps): ReactElement => {
  return (
    <Container className={className}>
      <span>©2019 Market</span>
      <span>•</span>
      <span>Privacy Policy</span>
    </Container>
  );
};

const Container = styled.div`
  color: ${Colors.skyBlue100};
  display: flex;
  justify-content: center;
  padding-bottom: ${Spacing.XXXL}px;

  span + span {
    margin-left: ${Spacing.M}px;
  }
`;
