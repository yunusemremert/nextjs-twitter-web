import React from 'react'

import styles from './col-extra.module.css'

function Extra({ children }) {
  return <div className={styles.extra}>{children}</div>
}

export default Extra
