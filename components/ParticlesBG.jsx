import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles-engine";

export default function ParticlesBG() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        fpsLimit: 120,
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#ff0000" }, // Neon red
          shape: { type: "circle" },
          opacity: {
            value: 0.8,
            random: true,
            anim: { enable: true, speed: 0.5, opacity_min: 0.1 }
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: true, speed: 2, size_min: 0.5 }
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "out" },
            attract: { enable: false }
          }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
            resize: true
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 }
          }
        },
        retina_detect: true
      }}
    />
  );
}
