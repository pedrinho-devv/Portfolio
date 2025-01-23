import { FaGithubSquare, FaInstagram } from "react-icons/fa";
import logo from "../assets/logoPA.png";

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12">
      <div className="space-y-4">
        {/* Exibindo a logo como imagem */}
        <img src={logo} alt="Logo principal" className="w-16" />

        <div className="flex flex-row gap-6 text-gray-400 text-4xl">
          {/* Ícones com links de redes sociais */}
          <a
            href="https://github.com/pedrinho-devv"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <p className="text-gray-400">@2024 Pedrinho.dev</p>
    </div>
  );
};

export default Footer;