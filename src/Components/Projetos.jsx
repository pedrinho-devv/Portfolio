import { motion } from "framer-motion";
import project1 from "../assets/fit-mockup.jpg";
import project2 from "../assets/pet-mockup.jpg";
import project4 from "../assets/dp-mockup.jpg";
import project5 from "../assets/pro4.png";
import { AiOutlineGithub } from "react-icons/ai";
import { DiReact, DiJavascript1 } from "react-icons/di";
import { SiTailwindcss, SiNextdotjs, SiFigma } from "react-icons/si";
import { CiLocationArrow1 } from "react-icons/ci";

const projects = [
  {
    img: project1,
    title: "E-commerce - VitalModas",
    description: "UI for frontend development using React.",
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
    description: "A fullstack application built with Node.js and MongoDB.",
    tech: [
      { icon: SiNextdotjs, color: "text-black dark:text-white" },
      { icon: SiTailwindcss, color: "text-teal-500" },
      { icon: SiFigma, color: "text-purple-500" },
    ],
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project4,
    title: "Landing Page - DP-Studio",
    description: "An e-commerce platform with various features.",
    tech: [
      { icon: SiNextdotjs, color: "text-black dark:text-white" },
      { icon: SiTailwindcss, color: "text-teal-500" },
      { icon: SiFigma, color: "text-purple-500" },
    ],
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project5,
    title: "Project #4",
    description: "A mobile-friendly application using React Native.",
    tech: [
      { icon: DiReact, color: "text-blue-500" },
      { icon: DiJavascript1, color: "text-yellow-500" },
    ],
    links: {
      site: "#",
      github: "#",
    },
  },
];

const Projetos = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mt-44 mb-8">Projetos</h2>
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
