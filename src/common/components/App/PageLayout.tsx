import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { Colors } from '../../basics/Colors';
import { Spacing } from '../../basics/Spacing';
import { Footer } from './Footer';
import { Navigation } from './Navigation';

export interface PageLayoutProps {
  className?: string;
  children: ReactElement | ReactElement[];
}

export const PageLayout = ({ className, children }: PageLayoutProps): ReactElement => {
  return (
    <Container className={className}>
      <Navigation />
      <PageContainer>
        <div>{children}</div>
        <StyledFooter />
      </PageContainer>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const StyledFooter = styled(Footer)`
  margin-top: ${Spacing.XXL}px;
`;

const PageContainer = styled.div`
  padding: ${Spacing.L}px ${Spacing.XXL}px;
  background-color: ${Colors.dirtyWhite200};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
