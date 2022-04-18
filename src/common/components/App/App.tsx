import React from 'react';
import styled from 'styled-components';

import { Router } from '../Router/Router';
import { DefaultStyle } from './AppStyles';
import { PageLayout } from './PageLayout';

export const App = () => {
  return (
    <Container>
      <DefaultStyle />
      <PageLayout>
        <Router />
      </PageLayout>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
`;
