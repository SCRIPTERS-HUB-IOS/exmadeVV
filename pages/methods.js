import PageLayout from '@/components/PageLayout'
import ParticlesBG from '@/components/ParticlesBG'
import Link from 'next/link'
import { useEffect } from 'react'

const BUTTONS = [
  { name: 'Splunk', url: 'https://app.splunk.gg/u/exmadeGG' },
  { name: 'Injuries', url: 'https://www.logged.tg/auth/exmade' },
  { name: 'Cookie Bypasser', url: 'https://app.splunk.gg/u/exmadeGG' },
  { name: 'Hyperlink Gen', url: 'https://dsprs.vercel.app/hyperlink' },
]

export default function Methods() {
  useEffect(() => {
    // small enhancement: remove any lingering focus outline after click (improve mobile feel)
    const handler = (e) => { if (e.target) e.target.blur?.() }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <PageLayout>
      {({ brightness, onBrightness, theme }) => (
        <>
          <ParticlesBG theme={theme} />

          <section className="methods-panel">
            <Link href="/"><a className="back">← Home</a></Link>

            <h2 className="panel-title">Methods</h2>

            <nav className="method-list" aria-label="Methods">
              {BUTTONS.map((b, i) => (
                <a
                  key={b.name}
                  className="method-item"
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-animate
                >
                  <span className="num">{i + 1}.</span>
                  <span className="label">{b.name}</span>
                </a>
              ))}
            </nav>

            <div className="panel-bottom">
              <label className="control-label small">Brightness</label>
              <input className="brightness small" type="range" min="50" max="140" value={brightness} onChange={(e) => onBrightness(Number(e.target.value))} />
            </div>
          </section>
        </>
      )}
    </PageLayout>
  )
}
