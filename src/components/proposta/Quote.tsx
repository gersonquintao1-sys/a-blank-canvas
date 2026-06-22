import { motion } from "framer-motion";

export const Quote = () => {
  return (
    <section className="relative w-full bg-black text-white px-6 md:px-16 py-28 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #111 0%, #050505 50%, #000 100%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <p className="text-xl md:text-3xl font-semibold leading-snug">
          "Tempo é a vida passando que não volta mais. Perder tempo é perder
          vida. Deixar de avançar por causa de medo, desconfiança, covardia,
          complexos, acomodação é desperdiçar tempo e desperdiçar vida."
        </p>
        <div className="mt-8 flex items-center gap-3 text-white/60">
          <span className="w-8 h-px bg-white/40" />
          <span>Flávio Augusto</span>
        </div>
      </motion.div>
    </section>
  );
};
