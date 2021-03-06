import React from 'react'

import CONST from '../constants'

import useWindowSize from '../hooks/useWindowSize'

import Sidebar from './col-sidebar'
import Main from './col-main'
import Extra from './col-extra'

import styles from './layout.module.css'

function Layout({ children }) {
  const size = useWindowSize()

  return (
    <div className={styles.layout}>
      <Sidebar flat={size.width < CONST.DESKTOP_SIZE}>Sidebar</Sidebar>
      <Main>{children}</Main>
      {size.width > CONST.TABLET_SIZE && (
        <Extra>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 30,
              fontSize: 20
            }}
          >
            !Tweet gönderim kapalı.
          </div>
        </Extra>
      )}
    </div>
  )
}

export default Layout
