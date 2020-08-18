import React from 'react'
import { useRouter } from 'next/router'

import { MENU } from '../constants'

import NavigationButton from './navigation-button'
import TextTitle from './text-title'

import styles from './navigation.module.css'

function Navigation({ flat = false }) {
  const router = useRouter()
  const ShowTitle = !flat

  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        const selected = router.pathname === menu.path

        return (
          <NavigationButton
            key={menu.key}
            notify={menu.notify}
            selected={selected}
            href={menu.path}
            className={styles.navButton}
          >
            {selected ? menu.iconSelected : menu.icon}
            {ShowTitle && menu.title.length > 0 && (
              <TextTitle>{menu.title}</TextTitle>
            )}
          </NavigationButton>
        )
      })}
    </nav>
  )
}

export default Navigation
