import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../elements/Button';
import Input from '../elements/Input';
import API from '../../config/contants/api';
import { apiRequest } from '../../store/ducks/api';
import isValidUrl from '../../utils/validators/isValidUrl';

const ShortenerBox = () => {
  const [link, setLink] = useState(null);
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidUrl(link)) {
      return setShowError(true);
    }

    setShowError(false);

    return dispatch(
      apiRequest('POST', `${API.shortener}`, {
        url: link,
      }),
    );
  };

  return (
    <div className="ShortenerBox">
      <form className="ShortenerBox__box" action="/">
        <Input
          id="link"
          name="url"
          type="url"
          placeholder="Shorten a link here..."
          value={link}
          handleChange={(event) => setLink(event.target.value)}
          error={showError}
        />
        <span className="ShortenerBox__feedback">
          {showError && 'Please add a link'}
        </span>
        <Button title="Shorten it!" handleClick={handleSubmit} />
      </form>
    </div>
  );
};

export default ShortenerBox;
