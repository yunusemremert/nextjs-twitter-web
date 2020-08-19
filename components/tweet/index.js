import React from 'react'
import Photo from '../photo'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

import styles from './style.module.css'
import IconButton from '../icon-button'
import * as Icon from '../icons'

function Tweet({ ...props }) {
  return (
    <article className={styles.tweet}>
      {/* avatar */}
      <div className={styles.avatar}>
        <Photo src={props.user.profile_image_url_https} />
      </div>

      {/* body */}
      <div className={styles.body}>
        <header className={styles.header}>
          <span className={styles.name}>{props.user.name}</span>
          <span>@{props.user.screen_name}</span> .
          <span>{formatDistanceToNowStrict(new Date(props.created_at))}</span>
        </header>

        <div className={styles.content}>{props.text}</div>

        <footer className={styles.footer}>
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Reply />
            </IconButton>
            {false && <span>1</span>}
          </div>

          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Retweet />
            </IconButton>
            {props.retweet_count && <span>{props.retweet_count}</span>}
          </div>

          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              {props.favorited ? <Icon.LikeFill /> : <Icon.Like />}
            </IconButton>
            {props.favorite_count && <span>{props.favorite_count}</span>}
          </div>

          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Share />
            </IconButton>
          </div>
        </footer>
      </div>
    </article>
  )
}

export default Tweet
