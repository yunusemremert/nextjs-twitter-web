import React from 'react'

import styles from './button.module.css'

function Button({ children, label, ...props }) {
  return (
    <button type="button" className={styles.button} {...props}>
      {children}
      {label}
    </button>
  )
}

export default Button
