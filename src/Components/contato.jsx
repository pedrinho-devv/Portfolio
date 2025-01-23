
import { motion } from "framer-motion";

const Contato = () => {
  return (
    <motion.div
      className="px-6 max-w-[1000px] mx-auto md:my-12"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid md:grid-cols-2 place-items-center">
        <div>
          <div className="text-gray-300 my-3 mt-24">
            <h3 className="text-4xl font-semibold mb-5">
              Contate-<span>Me</span>
            </h3>
            <p className="text-justify leading-7 w-11/12 mx-auto">
              Seu negócio merece um site incrível. Criei sites para diversas
              startups e posso te ajudar a alcançar seus objetivos.
            </p>
          </div>
        </div>

        <motion.form
          action="https://getform.io/f/placeYourEndpointHere"
          method="POST"
          className="max-w-6xl p-5 md:p-12"
          id="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="text-gray-100 mt-7 mb-7 text-center font-bold text-xl">
            Vamos nos Conectar!
          </p>
          <input
            type="text"
            id="name"
            placeholder="Digite seu nome ..."
            name="name"
            className="mb-2 w-full rounded-md border border-[#00D8E0] py-2 pl-2 pr-4"
          />
          <input
            type="email"
            id="email"
            placeholder="Digite seu Email ..."
            name="email"
            className="mb-2 w-full rounded-md border border-[#00D8E0] py-2 pl-2 pr-4"
          />
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="4"
            placeholder="Escreva sua mensagem ..."
            className="mb-2 w-full rounded-md border border-[#00D8E0] py-2 pl-2 pr-4"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-blue-600 hover:bg-blue-500 transition-colors"
          >
            Enviar Mensagem
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contato;