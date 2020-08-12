import styles from './Subtitle.module.css'
import React from 'react';
import PropTypes from 'prop-types';

const Subtitle = ({ text }) => <h2 className={styles.Subtitle}>{text}</h2>;

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Subtitle;
