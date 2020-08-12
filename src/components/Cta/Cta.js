import styles from './Cta.module.css'
import React from 'react';
import PropTypes from 'prop-types';
import Button from "../../elements/Button";

const Cta = ({ text }) => (
  <div className={styles.Cta}>
    <h2 className={styles.Cta__title}>{text}</h2>
    <Button title="Get Started" rounded />
  </div>
);

Cta.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Cta;
