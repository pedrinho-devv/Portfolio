import profilepic from "../assets/perfil-photo.png";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
} from "react-icons/di";
import { Helmet } from "react-helmet";
import { SiTailwindcss } from "react-icons/si";

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
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <div className="mt-24 max-w-[1200px] mx-auto">
        {/* Container Principal */}
        <div className="md:flex md:items-center gap-6 px-4 flex-col sm:flex-row">
          {/* Texto de apresentação */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left"
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
          </motion.div>

          {/* Botões */}
          <div className="sm:flex-row flex-col items-center justify-center gap-6 p-4 md:w-[500px] mx-auto mt-8">
            {/* Botão GitHub */}
            <a
              href="https://github.com/pedrinho-devv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Acesse meu GitHub"
            >
              <button className="bg-[#00D8E0] mt-3 text-white py-2 px-6 rounded-lg w-full sm:w-auto text-center flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300">
                <FaGithub className="text-xl" />
                GitHub
              </button>
            </a>

            {/* Botão Contato */}
            <a href="#contato" aria-label="Ir para seção de contato">
              <button className="border-2 mt-4 border-[#00D8E0] text-[#00D8E0] py-2 px-6 rounded-lg w-full sm:w-auto text-center flex items-center justify-center gap-2 hover:bg-[#00D8E0] hover:text-white transition-colors duration-300">
                Contato
              </button>
            </a>
          </div>

          {/* Imagem de Perfil */}
          <div className="flex justify-center md:justify-end mt-6 md:mt-0">
            <img
              src={profilepic}
              alt="Foto de perfil de Pedro Augusto, desenvolvedor Front-End"
              className="w-[200px] h-[200px] object-cover mb-4 md:w-[400px] md:h-[400px] hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Seção com Motion e Stack de Tecnologias */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col items-center py-24"
      >
        <p className="text-gray-200 text-xl md:text-2xl mb-6">
          Minhas Habilidades
        </p>
        <div className="flex flex-row text-5xl sm:text-7xl justify-center items-center gap-6">
          <DiHtml5
            className="text-orange-600 hover:scale-110 transition-transform duration-300"
            aria-label="HTML5"
          />
          <DiCss3
            className="text-blue-600 hover:scale-110 transition-transform duration-300"
            aria-label="CSS3"
          />
          <DiJavascript1
            className="text-yellow-500 hover:scale-110 transition-transform duration-300"
            aria-label="JavaScript"
          />
          <DiReact
            className="text-blue-500 hover:scale-110 transition-transform duration-300"
            aria-label="React"
          />
          <SiTailwindcss
            className="text-teal-400 hover:scale-110 transition-transform duration-300"
            aria-label="TailwindCSS"
          />
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
