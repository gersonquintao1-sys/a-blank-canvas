import { motion } from "framer-motion";

export const CtaFinal = () => {
  return (
    <section className="relative w-full min-h-[80vh] bg-black text-white flex items-center justify-center px-6 text-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 100%, #1a0808 0%, #000 60%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-2xl"
      >
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Clique para
          <br />
          <span className="text-red-500">Preencher o Formulário</span>
        </h2>
        <p className="text-white/50 mt-6 mb-12">E seguir com os próximos passos...</p>
        <a
          href="#inicio"
          className="inline-flex items-center gap-3 rounded-full bg-white text-black font-bold px-8 py-4 hover:bg-white/90 transition-colors"
        >
          SEGUIR
        </a>
      </motion.div>
    </section>
  );
};
