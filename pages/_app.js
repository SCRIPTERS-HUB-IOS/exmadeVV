import '@/styles/globals.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  // load last saved brightness + theme early (avoid flash)
  useEffect(() => {
    const b = localStorage.getItem('exmade_brightness')
    const t = localStorage.getItem('exmade_theme')
    if (b) document.body.style.filter = `brightness(${b}%)`
    if (t) document.documentElement.setAttribute('data-theme', t)
  }, [])

  return <Component {...pageProps} />
}
