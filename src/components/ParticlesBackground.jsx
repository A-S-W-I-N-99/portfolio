import Particles from "@tsparticles/react";

function ParticlesBackground() {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },

        fpsLimit: 120,

        particles: {
          number: {
            value: 80,
          },

          color: {
            value: "#3b82f6",
          },

          links: {
            enable: true,
            color: "#3b82f6",
            distance: 150,
            opacity: 0.2,
          },

          move: {
            enable: true,
            speed: 1,
          },

          opacity: {
            value: 0.4,
          },

          size: {
            value: { min: 1, max: 4 },
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },

          modes: {
            grab: {
              distance: 200,
            },
          },
        },
      }}

      className="fixed inset-0 -z-10"
    />
  );
}

export default ParticlesBackground;