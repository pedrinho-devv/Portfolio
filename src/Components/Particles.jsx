
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Portfolio = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="portfolio-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 5,
                size_min: 0.1,
              },
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
              },
            },
            move: {
              enable: true,
              speed: 3,
              direction: "bottom",
              random: true,
              straight: false,
              outModes: {
                default: "out",
              },
            },
          },
        }}
      />
      <div className="content">
        {/* Seu conteúdo do portfólio */}
      </div>
    </div>
  );
};

export default Portfolio;
