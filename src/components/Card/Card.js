import styles from './Card.module.css'
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ image, title, description, line }) => (
  <div className={styles.Card}>
    <div className={styles['Card__imageContainer']}>
      <img className={styles['Card__image']} src={image} alt="icon" />
    </div>
    <h3 className={styles['Card__title']}>{title}</h3>
    <p className={`paragraph ${styles['Card__description']}`}>{description}</p>
    {line && <hr className={styles['Card__line']} />}
  </div>
);

Card.defaultProps = {
  line: false,
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  line: PropTypes.bool,
};

export default Card;
