import styles from './Footer.module.css'
import React from 'react'
import links from './links.json'

const Footer = () => {
  const renderLinks = () =>
    Object.values(links).map((link) => (
      <div key={link.title} className={styles.Footer__linkGroup}>
        <h4 className={styles.Footer__linkTitle}>{link.title}</h4>
        <div className={styles.Footer__linkChildren}>
          {link.items.map((item) => (
            <span key={item} className={styles.Footer__linkSubItem}>
              {item}
            </span>
          ))}
        </div>
      </div>
    ))

  return (
    <footer className={styles.Footer}>
      <img src='/assets/logo-white.svg' alt='Logo' className={styles.Footer__logo} />
      <div className={styles.Footer__companyLinks}>{renderLinks()}</div>
      <div className={styles.Footer__socialLinks}>
        <img src='/assets/icon-facebook.svg' alt='Facebook' />
        <img src='/assets/icon-twitter.svg' alt='Twitter' />
        <img src='/assets/icon-pinterest.svg' alt='Pinterest' />
        <img src='/assets/icon-instagram.svg' alt='Instagram' />
      </div>
    </footer>
  )
}

export default Footer
