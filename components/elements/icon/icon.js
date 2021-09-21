import React from 'react';
import * as Icons from 'react-icons/fa';

import { StyledIcon } from './icon.styled';

export default function Icon({ name = 'FaStar', size = 'var(--text-16)', color = 'var(--black)' }) {
  const TagName = Icons[name];

  return (
    <StyledIcon size={size} color={color}>
      <TagName />
    </StyledIcon>
  );
}
