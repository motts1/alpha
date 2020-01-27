import React from 'react';
import styled from 'styled-components';
import loadable from '@loadable/component';

import Layout from './../components/Layout';

const StyledContainer = styled.div`
  height: 350px;

  @media (min-width: 520px) {
    height: 400px;
  }

  @media (min-width: 1400px) {
    height: 500px;
  }
`;

const Index = () => (
  <Layout>
    <StyledContainer>
      
    </StyledContainer>
  </Layout>
);

export default Index;
