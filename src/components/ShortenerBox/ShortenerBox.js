import styles from './ShortenerBox.module.css'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useAnalytics} from "../../../services/GoogleAnalytics";
import Button from '../../elements/Button';
import Input from '../../elements/Input';
import API from '../../config/contants/api';
import {apiRequest} from "../../../store/ducks/api";
import isValidUrl from '../../utils/validators/isValidUrl';

const ShortenerBox = () => {
  const dispatch = useDispatch();
  const { trackEvent } = useAnalytics();
  const [link, setLink] = useState(null);
  const [showError, setShowError] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidUrl(link)) {
      trackEvent({
        action: "Submit incorrect link",
        category: 'ShortenerBox',
        label: link
      });
      return setShowError(true);
    }

    setShowError(false);

    trackEvent({
      action: "Submit correct link",
      category: 'ShortenerBox',
      label: link
    });

    return dispatch(
      apiRequest('POST', `${API.shortener}`, {
        url: link,
      }),
    );
  };

  return (
    <div className={styles.ShortenerBox}>
      <form className={styles['ShortenerBox__box']} action="/">
        <Input
          id="link"
          name="url"
          type="url"
          placeholder="Shorten a link here..."
          value={link}
          handleChange={(event) => setLink(event.target.value)}
          error={showError}
        />
        <span className={styles['ShortenerBox__feedback']}>
          {showError && 'Please add a link'}
        </span>
        <Button title="Shorten it!" handleClick={handleSubmit} />
      </form>
    </div>
  );
};

export default ShortenerBox;
