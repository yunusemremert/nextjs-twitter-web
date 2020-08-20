import React from 'react'

import Navigation from './navigation'
import ThemeButton from './theme-button'
import ProfileBox from './profile-box'
import TweetModal from './tweet-modal'
import { Tweet } from './icons'

import styles from './col-sidebar.module.css'

function Sidebar({ flat }) {
  const [isShowModal, setIsShowModal] = React.useState(false)

  const onModalClose = () => {
    setIsShowModal(false)
  }

  return (
    <div className={styles.sidebar}>
      <Navigation flat={flat} />

      <div className={styles.tweet}>
        <ThemeButton big full={!flat} onClick={() => setIsShowModal(true)}>
          {flat ? <Tweet /> : 'Tweet'}
        </ThemeButton>
      </div>

      {/* Tweet Popup */}
      {isShowModal && (
        <TweetModal onModalClose={onModalClose} onClick={() => onModalClose} />
      )}

      <div className={styles.profile}>
        <ProfileBox flat={flat} />
      </div>
    </div>
  )
}

export default Sidebar
