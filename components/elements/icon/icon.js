import React from 'react';
import * as Icons from 'react-icons/fa';
import PropTypes from 'prop-types';

import { StyledIcon } from './icon.styled';

export default function Icon({ name, size, color }) {
  const TagName = Icons[name];

  return (
    <StyledIcon size={size} color={color}>
      <TagName />
    </StyledIcon>
  );
}

Icon.defaultProps = {
  name: 'FaStar',
  size: 'var(--text-16)',
  color: 'var(--black)',
};

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};
