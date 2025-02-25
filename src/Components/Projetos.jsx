import { motion } from "framer-motion";
import project1 from "../assets/fit-mockup.jpg";
import project2 from "../assets/pet-mockup.jpg";
import project4 from "../assets/dp-mockup.jpg";
import project5 from "../assets/p-mockup.jpg";
import project6 from "../assets/therapy-mockup.jpg";
import { AiOutlineGithub } from "react-icons/ai";
import { DiReact } from "react-icons/di";
import { SiTailwindcss, SiNextdotjs, SiFigma, SiShadcnui } from "react-icons/si";
import { CiLocationArrow1 } from "react-icons/ci";

const projects = [

  {
    img: project6, // substitua com a imagem apropriada do novo projeto
    title: "Your Mind In Peace",
    description: "Uma landing page voltada para terapia e bem-estar mental, projetada para fornecer informações sobre serviços de terapia, promover o autocuidado e facilitar a conexão com profissionais da saúde mental.",
    tech: [
      { icon: DiReact, color: "text-blue-500" },
      { icon: SiTailwindcss, color: "text-teal-500" },
      { icon: SiShadcnui , color: "text-gray-500" }, 
    ],
    links: {
      site: "https://therapy-landing-kappa.vercel.app",
      github: "https://github.com/pedrinho-devv/Your-MindInPeace",
    },
  },
  




  {
    img: project1,
    title: "E-commerce - VitalModas",
    description: "Uma interface de usuário (UI) para o desenvolvimento front-end usando React e Tailwind CSS, com foco na criação de uma experiência de e-commerce responsiva e moderna.",
    tech: [
      { icon: DiReact, color: "text-blue-500" },
      { icon: SiTailwindcss, color: "text-teal-500" },
      { icon: SiFigma, color: "text-purple-500" },
    ],
    links: {
      site: "#",
      github: "https://github.com/pedrinho-devv/fitness-shop",
    },
  },
  {
    img: project2,
    title: "Landing Page - PetShop",
    description: "Uma aplicação front-end construída com Next.js e Tailwind CSS, projetada para exibir serviços de um pet shop, com uma landing page moderna e atrativa.",
    tech: [
      { icon: SiNextdotjs, color: "text-black dark:text-white" },
      { icon: SiTailwindcss, color: "text-teal-500" },
      { icon: SiFigma, color: "text-purple-500" },
    ],
    links: {
      site: "https://academia-landing-page-eight.vercel.app",
      github: "https://github.com/pedrinho-devv/Pet-Landing-page",
    },
  },
  {
    img: project4,
    title: "Landing Page - DP-Studio",
    description: "Uma plataforma de e-commerce construída com Next.js, Tailwind CSS e Figma, projetada para destacar os diversos serviços e produtos do DP-Studio.",
    tech: [
      { icon: SiNextdotjs, color: "text-black dark:text-white" },
      { icon: SiTailwindcss, color: "text-teal-500" },
      { icon: SiFigma, color: "text-purple-500" },
    ],
    links: {
      site: "https://dp-studiooficial.vercel.app",
      github: "https://github.com/pedrinho-devv/DP-STUDIO",
    },
  },
  {
    img: project5,
    title: "Meu Portfólio",
    description: "Um portfólio responsivo e amigável para dispositivos móveis, construído com React.js, exibindo meus projetos, habilidades e experiência como desenvolvedor web.",
    tech: [
      { icon: DiReact, color: "text-blue-500" },
      { icon: SiFigma, color: "text-purple-500" },
      { icon: SiTailwindcss, color: "text-teal-500" },
    ],
    links: {
      site: "https://portfolioaugustus.vercel.app",
      github: "https://github.com/pedrinho-devv/Portfolio",
    },
  },
];


const Projetos = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00D8E0] to-[#E1306C] mt-44 mb-8 relative">
        Projetos
      </h2>

      {projects.map((project, index) => (
        <motion.div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } mb-12`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="w-full md:w-1/2 p-4 relative group">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg border border-gray-700 group-hover:brightness-110"
              />
              {/* Efeito de luz animada */}
              <span className="absolute inset-0 rounded-lg border-2 border-transparent animate-border-glow" />
            </div>
          </div>

          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex space-x-2 mb-4">
              {project.tech.map(({ icon: Icon, color }, idx) => (
                <Icon key={idx} className={`text-2xl ${color}`} />
              ))}
            </div>
            <div className="flex space-x-4">
              <motion.a
                href={project.links.site}
                target="_blank"
                className="flex items-center font-bold justify-center gap-3 px-5 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-semibold shadow-lg transition-all duration-300 hover:from-teal-500 hover:to-blue-500 hover:scale-105"
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Site <CiLocationArrow1 />
              </motion.a>

              <motion.a
                href={project.links.github}
                className="relative p-2 bg-black text-white rounded-lg shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-transparent border border-gray-800 overflow-hidden"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <AiOutlineGithub className="text-2xl transition-transform duration-300 group-hover:scale-110" />

                {/* Efeito de luz nas bordas */}
                <span className="absolute inset-0 border-2 border-transparent rounded-lg animate-border-glow" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projetos;
