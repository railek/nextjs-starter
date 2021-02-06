import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  padding: var(--space-0) var(--space-24);
  width: 100%;

  @media (min-width: 768px) {
    padding: var(--space-0) var(--space-32);
  }

  @media (min-width: 1024px) {
    padding: var(--space-0) var(--space-48);
  }
`;
export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}
