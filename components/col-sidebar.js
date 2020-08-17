import React from 'react'

import Navigation from './navigation'

import styles from './col-sidebar.module.css'
import ThemeButton from './theme-button'
import ProfileBox from './profile-box'

function Sidebar({ flat }) {
  return (
    <div className={styles.sidebar}>
      <Navigation flat={flat} />
      <ThemeButton big full>
        Tweet
      </ThemeButton>
      <ProfileBox />
    </div>
  )
}

export default Sidebar
