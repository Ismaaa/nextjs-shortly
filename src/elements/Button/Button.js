import styles from './Button.module.css'
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({title, rounded, handleClick, small, left, alternative}) => {
  return (
    <button
      type="submit"
      className={`
        ${styles.Button}
        ${rounded ? styles['Button--rounded'] : ''}
        ${small ? styles['Button--small'] : ''}
        ${left ? styles['Button--left'] : ''}
        ${alternative ? styles['Button--alternative'] : ''}
      `}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}


Button.defaultProps = {
  rounded: false,
  small: false,
  left: false,
  alternative: false,
  handleClick: () => {
  },
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  rounded: PropTypes.bool,
  handleClick: PropTypes.func,
  small: PropTypes.bool,
  left: PropTypes.bool,
};

export default Button;
