import { useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Home() {
  const [brightness, setBrightness] = useState(1);
  const [theme, setTheme] = useState("neon");

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const themeColors = {
    neon: "#ff0000",
    dark: "#00ffff",
    light: "#0000ff",
  };

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#000",
        filter: `brightness(${brightness})`,
        transition: "all 0.3s ease",
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            color: { value: themeColors[theme] },
            links: { enable: true, color: themeColors[theme] },
            move: { enable: true, speed: 1 },
            size: { value: 2 },
          },
        }}
        style={{ position: "absolute", top: 0, left: 0 }}
      />

      {/* Centered Logo */}
      <main
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            color: themeColors[theme],
            textShadow: `0 0 10px ${themeColors[theme]}, 0 0 20px ${themeColors[theme]}`,
            transition: "all 0.3s ease",
          }}
        >
          exmade
        </h1>

        {/* Theme Buttons */}
        <div style={{ marginTop: 20 }}>
          {Object.keys(themeColors).map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              style={{
                margin: "0 5px",
                padding: "10px 15px",
                border: "none",
                borderRadius: 5,
                cursor: "pointer",
                background: themeColors[t],
                color: "#fff",
                fontWeight: "bold",
                transform: theme === t ? "scale(1.1)" : "scale(1)",
                transition: "transform 0.2s ease, background 0.3s ease",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Brightness Slider */}
        <div style={{ marginTop: 20 }}>
          <input
            type="range"
            min="0.5"
            max="1.5"
            step="0.01"
            value={brightness}
            onChange={(e) => setBrightness(e.target.value)}
          />
        </div>
      </main>
    </div>
  );
}
