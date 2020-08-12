import styles from './Subtitle.module.css'
import React from 'react';
import PropTypes from 'prop-types';

const Subtitle = ({ text }) => <h1 className={styles.Subtitle}>{text}</h1>;

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Subtitle;
