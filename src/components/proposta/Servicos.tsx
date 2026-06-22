import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";
import { servicosInclusos } from "./data";

export const Servicos = () => {
  return (
    <SectionShell id="servicos" eyebrow="Comparativo" index={5}>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-extrabold text-center mb-14"
      >
        Serviços <span className="text-red-500">Inclusos</span>
      </motion.h2>

      <div className="rounded-2xl overflow-hidden border border-white/10">
        <div className="grid grid-cols-2 bg-white text-black font-bold text-sm md:text-base">
          <div className="px-6 py-4">Serviços</div>
          <div className="px-6 py-4 text-right md:text-center">Limites</div>
        </div>
        {servicosInclusos.map((s, i) => (
          <motion.div
            key={s.servico}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="grid grid-cols-2 border-t border-white/10"
            style={{ background: "linear-gradient(90deg, #1a0a14, #0a0a0a)" }}
          >
            <div className="px-6 py-5 font-bold text-red-400 text-sm md:text-base">
              {s.servico}
            </div>
            <div className="px-6 py-5 text-white/70 text-sm md:text-base text-right md:text-center">
              {s.limite}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
};
