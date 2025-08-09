import PageLayout from '@/components/PageLayout'
import ParticlesBG from '@/components/ParticlesBG'
import Link from 'next/link'

export default function Home() {
  return (
    <PageLayout>
      {({ brightness, onBrightness, theme }) => (
        <>
          <ParticlesBG theme={theme} />

          <section className="hero">
            <h1 className="hero-title">exmadeW</h1>

            <div className="hero-controls" role="group" aria-label="Main controls">
              <Link href="/methods">
                <a className="btn primary" data-animate>Methods</a>
              </Link>

              <div className="control-inline">
                <label className="control-label">Brightness</label>
                <input
                  className="brightness"
                  type="range"
                  min="50"
                  max="140"
                  value={brightness}
                  onChange={(e) => onBrightness(Number(e.target.value))}
                />
              </div>
            </div>
          </section>
        </>
      )}
    </PageLayout>
  )
}
