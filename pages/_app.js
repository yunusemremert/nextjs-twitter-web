import React, { useEffect, useState } from 'react'

import StoreContext from '../store'

import '../styles/app.css'

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(null)

  // user bilgileri tut ve componente context-provider ile gönder.

  useEffect(() => {
    const theme = localStorage.getItem('THEME') || 'light'

    setTheme(theme)
  })

  const changeTheme = (theme) => {
    setTheme(theme)

    localStorage.setItem('THEME', theme)
  }

  /* Sayfa tam oluşunca */
  useEffect(() => {
    const $html = document.querySelector('html')

    $html.setAttribute('class', theme)
  }, [theme])

  return (
    <StoreContext.Provider value={{ theme, changeTheme }}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  )
}
