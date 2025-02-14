import { FaGithubSquare, FaInstagram } from "react-icons/fa";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <div className="  text-white p-6 md:p-10 mt-12">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Logo e Redes Sociais */}
        <div className="space-y-4 text-center md:text-left">
          <img
            src={logo}
            alt="Logo principal"
            className="w-24 md:w-28 transition-all duration-200 hover:opacity-80"
          />
          <div className="flex justify-center md:justify-start gap-6 text-gray-400 text-3xl">
            {/* Ícones com links de redes sociais */}
            <a
              href="https://github.com/pedrinho-devv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-[#00D8E0] transition-all duration-300"
            >
              <FaGithubSquare />
            </a>
            <a
              href="https://www.instagram.com/pedrinho.dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[#E1306C] transition-all duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-center md:text-left text-sm md:text-lg mt-4">
          © 2025 Pedrinho.dev. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
