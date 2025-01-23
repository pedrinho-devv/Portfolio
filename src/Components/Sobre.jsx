import profilepic from "../assets/photoabout.jpg";

const About = () => {
    return (
      <section
        id="skills"
        className="w-full py-16 bg-gray-900 text-gray-200"
      >
        <div className="max-w-[1300px] mx-auto px-8">
          <h2 className="text-4xl font-bold mb-6 text-center">Sobre Mim</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Foto ou Ilustração */}
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
              <img
                            src={profilepic}
                            alt="Foto de perfil de Pedro Augusto, desenvolvedor Front-End"
                            className="w-[300px] h-[300px] object-cover mb-4 md:w-[400px] md:h-[400px] hover:scale-105 transition-transform duration-300"
                          />
            </div>
  
            {/* Texto Sobre Mim */}
            <div className="text-center md:text-left space-y-4">
              <p className="text-lg leading-relaxed">
                Olá! 👋 Sou <span className="font-semibold">Pedro Augusto</span>, um Desenvolvedor Web de 20 anos. 
                Moro em Pedro II, Piauí, e sou apaixonado por criar interfaces modernas 
                e componentes reutilizáveis.
              </p>
              <p className="text-lg leading-relaxed">
                Trabalho com tecnologias como <span className="font-semibold">React.js</span>, 
                <span className="font-semibold"> HTML</span>, <span className="font-semibold">JavaScript</span>, 
                <span className="font-semibold"> CSS</span>, e muitas outras. Tenho um olhar atento para 
                detalhes de design e uma paixão por explorar soluções inovadoras.
              </p>
              <p className="text-lg leading-relaxed">
                Além disso, sou comunicativo, colaborativo e gosto de ensinar, tornando o trabalho 
                em equipe algo natural para mim. Quando não estou desenvolvendo, adoro ler, ouvir metal, 
                escrever poemas e me desafiar em projetos criativos.
              </p>
              <p className="text-lg leading-relaxed font-semibold">
                Vamos criar algo incrível juntos? 🚀
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  