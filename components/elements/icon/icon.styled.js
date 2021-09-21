/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledIcon = styled.i`
  svg {
    color: ${({ color }) => color};
    font-size: ${({ size }) => size};
  }
`;
