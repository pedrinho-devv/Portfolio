import profilepic from "../assets/perfil-photo.png";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto">
    {/* Container Principal */}
    <div className="md:flex md:items-center gap-6 px-4">
      {/* Texto de apresentação */}
      <div className="text-center md:text-left">
        <p className="text-[18px] text-gray-500 mt-7">Olá, eu sou</p>
        <h1 className="text-[52px] text-gray-200 font-bold leading-tight">
          Programador <span className="text-[#00D8E0]">Front-End</span>.
        </h1>
        <p className="text-[18px] text-gray-500 sm:mt-8">
          Desenvolvo soluções digitais que unem design inovador e usabilidade
          excepcional, criando conexões únicas entre pessoas e experiências
        </p>
      </div>
  
      <div className="flex justify-center md:justify-end mt-6 md:mt-0">
        <img
          src={profilepic}
          alt="Minha imagem"
          className="w-[300px] h-[300px] object-cover mb-4 md:w-[400px] md:h-[400px]"
        />
      </div>
    </div>
  </div>
  
  );
};

export default Hero;
