import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const LinkItem = ({ link }) => {
  const [showCopiedText, setShowCopiedText] = useState(false);

  const handleCopy = () => {
    setShowCopiedText(true);

    setTimeout(() => {
      setShowCopiedText(false);
    }, 3000);
  };

  return (
    <div className="LinksList__item">
      <span className="LinksList__link">{link.url}</span>
      <div className="LinksList__actions">
        <a
          className="LinksList__generatedLink"
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
          <button
            className={`Button Button--small ${
              showCopiedText && 'Button--alternative'
            } Button--rectangle`}
            type="button"
          >
            {showCopiedText ? 'Copied!' : 'Copy'}
          </button>
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
