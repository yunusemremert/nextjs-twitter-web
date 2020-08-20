import React from 'react'

import Photo from '../photo'
import ThemeButton from '../theme-button'
import IconButton from '../icon-button'
import { Close } from '../icons'

import styles from './style.module.css'
import Stack from '../stack'

function TweetModal({ onClick = () => {} }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* avatar */}
        <div className={styles.avatar}>
          <Photo />
        </div>

        {/* body */}
        <div className={styles.body}>
          <div>
            <textarea
              className={styles.textarea}
              name=""
              rows="5"
              placeholder="Ne düşününüyorsun?"
            />
          </div>
          <Stack gap={20} className={styles.footer}>
            <IconButton className={styles.close} onClick={onClick}>
              <Close />
            </IconButton>
            <ThemeButton>Tweet</ThemeButton>
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default TweetModal
