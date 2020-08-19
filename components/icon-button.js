import React from 'react'
import cn from 'classnames'

import Button from './button'

import styles from './icon-button.module.css'

function IconButton({ children, className, ...props }) {
  return (
    <Button className={cn(styles.iconButton, className)} {...props}>
      {children}
    </Button>
  )
}

export default IconButton
