import styles from './LinksList.module.css'
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from "../../elements/Button";

const LinkItem = ({ link }) => {
  const [showCopiedText, setShowCopiedText] = useState(false);

  const handleCopy = () => {
    setShowCopiedText(true);

    setTimeout(() => {
      setShowCopiedText(false);
    }, 3000);
  };

  return (
    <div className={styles['LinksList__item']}>
      <span className={styles['LinksList__link']}>{link.url}</span>
      <div className={styles['LinksList__actions']}>
        <a
          className={styles['LinksList__generatedLink']}
          href={`https://rel.ink/${link.hashid}`}
          target="_blank"
          rel="noreferrer"
        >
          https://rel.ink/${link.hashid}
        </a>
        <CopyToClipboard
          onCopy={handleCopy}
          text={`https://rel.ink/${link.hashid}`}
        >
          <span className={`
            ${styles['LinksList__copyToClipboard']}
            ${showCopiedText ? styles['LinksList__copyToClipboard--copied'] : ''}
          `}>{showCopiedText ? 'Copied!' : 'Copy'}</span>
          {/*<Button*/}
          {/*  title={}*/}
          {/*  small*/}
          {/*  rectangle*/}
          {/*  alternative={showCopiedText}*/}
          {/*  handleClick={() => handleCopy()}*/}
          {/*/>*/}

        </CopyToClipboard>
      </div>
    </div>
  );
};

LinkItem.propTypes = {
  link: PropTypes.shape({
    hashid: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default LinkItem;
