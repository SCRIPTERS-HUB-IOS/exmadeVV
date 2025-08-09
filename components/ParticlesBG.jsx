import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function ParticlesBG({ theme = 'red' }) {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const redPalette = ['#ff0033', '#ff66aa', '#ff1b1b']
  const bluePalette = ['#0099ff', '#66ccff', '#0055ff']

  const colors = theme === 'blue' ? bluePalette : redPalette

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'window',
          events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: false },
            resize: true
          },
          modes: { repulse: { distance: 120, duration: 0.4 } }
        },
        particles: {
          number: { value: 72, density: { enable: true, area: 900 } },
          color: { value: colors },
          links: {
            enable: true,
            distance: 140,
            color: colors[0],
            opacity: 0.12,
            width: 1
          },
          move: {
            enable: true,
            speed: 0.9,
            direction: 'none',
            outModes: { default: 'out' }
          },
          opacity: { value: 0.8, random: { enable: true, minimumValue: 0.25 }, animation: { enable: true, speed: 0.6, minimumValue: 0.2 } },
          size: { value: { min: 0.6, max: 3.2 }, random: true, animation: { enable: true, speed: 2, minimumValue: 0.6 } },
          shape: { type: 'circle' }
        },
        detectRetina: true
      }}
    />
  )
}
