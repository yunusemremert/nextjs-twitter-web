import React from 'react'

import styles from './photo.module.css'

function Photo({
  src = 'https://pbs.twimg.com/profile_images/1288067979192696833/-0Zch6tn_400x400.jpg',
  alt,
  size = 47
}) {
  return (
    <div className={styles.photo} style={{ width: size, height: size }}>
      <img className={styles.img} src={src} alt={alt} />
    </div>
  )
}

export default Photo
