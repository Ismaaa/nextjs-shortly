import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, rounded, handleClick, small, left }) => (
  <button
    type="submit"
    className={`Button ${rounded && 'Button--rounded'} ${
      small && 'Button--small'
    } ${left && 'Button--left'}`}
    onClick={handleClick}
  >
    {title}
  </button>
);

Button.defaultProps = {
  rounded: false,
  small: false,
  left: false,
  handleClick: () => {},
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  rounded: PropTypes.bool,
  handleClick: PropTypes.func,
  small: PropTypes.bool,
  left: PropTypes.bool,
};

export default Button;
