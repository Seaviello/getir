import React from 'react';
import styled from 'styled-components';

import { Router } from '../Router/Router';
import { DefaultStyle } from './AppStyles';

export const App = () => {
  return (
    <Container>
      <DefaultStyle />
      <Router />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
`;
