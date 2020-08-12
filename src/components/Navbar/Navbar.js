import styles from './Navbar.module.css'
import React from 'react'
import Button from '../../elements/Button'

const Navbar = () => (
  <nav className={styles.Navbar}>
    <img src='/assets/logo.svg' alt='Shortly' className='Navbar__logo' />
    <div className={styles.Navbar__links}>
      <div className={styles.Navbar__navigation}>
        <div className={styles.Navbar__navigationItem}>Features</div>
        <div className={styles.Navbar__navigationItem}>Pricing</div>
        <div className={styles.Navbar__navigationItem}>Resources</div>
      </div>
      <div className={styles.Navbar__auth}>
        <div className={styles.Navbar__navigationItem}>Login</div>
        <Button title='Sign Up' rounded small />
      </div>
    </div>
    <div className={styles.Navbar__burger}>
      <span className={styles['Navbar__burger-slice']} />
      <span className={styles['Navbar__burger-slice']} />
      <span className={styles['Navbar__burger-slice']} />
    </div>
  </nav>
)

export default Navbar
