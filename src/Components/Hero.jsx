
import profilepic from "../assets/perfil-photo.png";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Helmet } from "react-helmet";
import Particles from 'react-tsparticles';

const Hero = () => {

  return (
    <>
      {/* Meta Tags para SEO */}
      <Helmet>
        <title>Pedro Augusto | Desenvolvedor Front-End</title>
        <meta
          name="description"
          content="Desenvolvo soluções digitais inovadoras com design intuitivo e usabilidade excepcional."
        />
        <link rel="icon" href="./assets/PAfavicon.svg" />
      </Helmet>

      {/* Componente de Partículas no fundo */}
      <Particles
        id="tsparticles"
        params={{
          particles: {
            color: {
              value: "#00D8E0"
            },
            line_linked: {
              color: {
                value: "#ffffff"
              }
            },
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

      {/* Conteúdo do Hero */}
      <div className="mt-24 max-w-[1200px] mx-auto relative">
        <div className="md:flex md:items-center gap-6 px-4 flex-col sm:flex-row">
          {/* Texto e Botões */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left md:w-1/2"
          >
            <p className="text-[18px] text-gray-300 mt-5">Olá, eu sou</p>
            <h1 className="text-[52px] sm:text-[59px] text-gray-200 font-bold leading-snug sm:leading-tight">
              <TypeAnimation
                sequence={[
                  "Programador Front-End",
                  1000,
                  "UX/UI Designer",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
                className="font-bold text-[#00D8E0] text-xl md:text-5xl italic mb-4"
              />
            </h1>
            <p className="text-[18px] text-gray-300 mt-4 sm:mt-8 leading-relaxed">
              Desenvolvo soluções digitais que unem design inovador e
              usabilidade excepcional, criando conexões únicas entre pessoas e
              experiências.
            </p>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4 sm:gap-6 p-4 mt-8">
              {/* Botão GitHub */}
              <a
                href="https://github.com/pedrinho-devv"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acesse meu GitHub"
                className="w-full sm:w-auto"
              >
                <button className="bg-[#00D8E0] text-white py-2 px-6 rounded-lg text-center flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
                  <FaGithub className="text-xl" />
                  GitHub
                </button>
              </a>

              {/* Botão Contato */}
              <a
                href="#contato"
                aria-label="Ir para seção de contato"
                className="w-full sm:w-auto"
              >
                <button className="border-2 border-[#00D8E0] text-[#00D8E0] py-2 px-6 rounded-lg text-center flex items-center justify-center gap-2 hover:bg-[#00D8E0] hover:text-white transition-colors duration-300 w-full sm:w-auto">
                  Contato
                </button>
              </a>
            </div>
          </motion.div>

          {/* Imagem de Perfil */}
          <div className="flex justify-center md:justify-end mt-6 md:mt-0">
            <img
              src={profilepic}
              alt="Foto de perfil de Pedro Augusto, desenvolvedor Front-End"
              className="w-[240px] h-[240px] object-cover mb-4 md:w-[400px] md:h-[400px] hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;