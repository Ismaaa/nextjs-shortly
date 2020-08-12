import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ children, left }) => (
  <p className={`Text ${left && 'Text--left'}`}>{children}</p>
);

Text.defaultProps = {
  left: false,
};

Text.propTypes = {
  children: PropTypes.string.isRequired,
  left: PropTypes.bool,
};

export default Text;
