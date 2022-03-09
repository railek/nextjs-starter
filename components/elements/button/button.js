import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../loader';

import { StyledButton } from './button.styled';

export default function Button({ type, label, event, loading }) {
  return (
    <StyledButton onClick={event} type={type}>
      {loading ? 'Loading...' : label}
      {loading && <Loader />}
    </StyledButton>
  );
}

Button.defaultProps = {
  type: 'button',
  event: null,
  loading: false,
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  label: PropTypes.string.isRequired,
  event: PropTypes.func,
  loading: PropTypes.bool,
};
