/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: var(--black);
  color: var(--white);
  display: flex;
  gap: var(--space-12);
  justify-content: space-between;
  font-size: var(--text-14);
  font-weight: 500;
  padding: var(--space-12) var(--space-16);

  @media (min-width: 768px) {
    font-size: var(--text-16);
    padding: var(--space-16) var(--space-20);
  }
`;
