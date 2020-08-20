import React from 'react'

import Photo from '../photo'
import ThemeButton from '../theme-button'
import IconButton from '../icon-button'
import { Close } from '../icons'

import styles from './style.module.css'
import Stack from '../stack'

function TweetModal({ onModalClose = () => {}, onClick = () => {} }) {
  const [tweet, setTweet] = React.useState('')

  const onSubmit = async () => {
    try {
      const response = await fetch('/api/new', {
        method: 'POST',
        /* GÖNDERMEK İÇİN AÇ..
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer',
        */
        body: JSON.stringify({ tweet })
      })

      if (response.status !== 200) throw '!Tweet gönderilemedi.'

      setTweet('')
      onModalClose()
    } catch (e) {
      console.log(e)
    }
  }

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
              value={tweet}
              onChange={(e) => setTweet(e.target.value)}
            />
          </div>
          <Stack gap={20} className={styles.footer}>
            <IconButton className={styles.close} onClick={onClick}>
              <Close />
            </IconButton>
            <ThemeButton onClick={onSubmit}>Tweet</ThemeButton>
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default TweetModal
