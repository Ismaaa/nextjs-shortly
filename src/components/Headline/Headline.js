import styles from './Headline.module.css'
import React from 'react'
import Button from '../../elements/Button'

const Headline = () => (
  <div className={styles.Headline}>
    <h1 className='title'>More than just shorter links</h1>
    <p className='paragraph paragraph--left'>
      Build your brand's recognition and get detailed insights on how your links
      are performing.
    </p>
    <div className='section'>
      <Button title='Get Started' rounded left />
    </div>
  </div>
)

export default Headline
