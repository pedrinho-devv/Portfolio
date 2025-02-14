// Approach.jsx

import ApproachCard from './ApproachCard';

const Approach = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00D8E0] to-[#E1306C] text-center mb-12">
        Minha Abordagem
      </h2>

      <div className="flex justify-between items-center space-x-8">
        {/* Card UX/UI */}
        <ApproachCard
          title="UX/UI Design"
          description="Criação de interfaces intuitivas e funcionais."
          color1="00D8E0"
          color2="E1306C"
          iconNumber="1"
        />

        {/* Card Desenvolvimento */}
        <ApproachCard
          title="Desenvolvimento Front-End"
          description="Desenvolvimento de código limpo e otimizado."
          color1="E1306C"
          color2="00D8E0"
          iconNumber="2"
        />

        {/* Card Deploy */}
        <ApproachCard
          title="Deploy e Manutenção"
          description="Implantação do projeto e monitoramento contínuo."
          color1="00D8E0"
          color2="E1306C"
          iconNumber="3"
        />
      </div>
    </div>
  );
};

export default Approach;
