import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaDiscord, FaMoon, FaSun } from 'react-icons/fa'

export default function PageLayout({ children }) {
  const [brightness, setBrightness] = useState(100)
  const [theme, setTheme] = useState('red')

  useEffect(() => {
    const b = localStorage.getItem('exmade_brightness')
    const t = localStorage.getItem('exmade_theme')
    if (b) { setBrightness(Number(b)); document.body.style.filter = `brightness(${b}%)` }
    if (t) { setTheme(t); document.documentElement.setAttribute('data-theme', t) }
  }, [])

  const onBrightness = (v) => {
    setBrightness(v)
    document.body.style.filter = `brightness(${v}%)`
    localStorage.setItem('exmade_brightness', String(v))
  }

  const toggleTheme = () => {
    const next = theme === 'red' ? 'blue' : 'red'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('exmade_theme', next)
  }

  return (
    <div className="root">
      <header className="header">
        <div className="brand">
          <span className="brand-neon">exmade</span>
        </div>

        <div className="header-controls">
          <button className="icon-btn theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'red' ? <FaMoon /> : <FaSun />}
          </button>

          <a className="discord-link" href="https://discord.gg/skDSzwCScu" target="_blank" rel="noreferrer" aria-label="Our Discord">
            <FaDiscord /> <span className="discord-text">Our Discord</span>
          </a>
        </div>
      </header>

      <main className="main">{children({ brightness, onBrightness, theme })}</main>

      <style jsx>{`
        /* local styles for layout can remain minimal; main styles are in globals.css */
      `}</style>
    </div>
  )
}
