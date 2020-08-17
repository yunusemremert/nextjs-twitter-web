import React from 'react'

import Photo from './photo'
import { ArrowBottom } from './icons'

import styles from './profile-box.module.css'

import Button from './button'
import TextBody from './text-body'

function ProfileBox({
  flat = false,
  name = 'Yunus Emre MERT',
  slug = 'yunusemremert'
}) {
  return (
    <Button className={styles.box}>
      <Photo size={39} />
      {!flat && (
        <>
          <div className={styles.body}>
            <TextBody bold>{name}</TextBody>
            <TextBody className={styles.slug}>@{slug}</TextBody>
          </div>
          <ArrowBottom className={styles.icon} />
        </>
      )}
    </Button>
  )
}

export default ProfileBox
