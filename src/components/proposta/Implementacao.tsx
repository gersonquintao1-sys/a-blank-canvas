import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";
import { cicloImplementacao } from "./data";

export const Implementacao = () => {
  return (
    <SectionShell id="implementacao" eyebrow="Implementação" index={6}>
      <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold leading-[1.05]"
        >
          O Ciclo de
          <br />
          <span className="text-red-500">Implementação</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/70 leading-relaxed text-base md:text-lg"
        >
          O primeiro lançamento pago será implementado em até 20 dias
          corridos, contemplando: planejamento estratégico, produção dos
          materiais, venda de ingressos, realização do evento e abertura do
          carrinho da oferta principal. O objetivo desta primeira ação é
          validar a oferta e obter dados para escalar as próximas campanhas.
        </motion.p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute top-[10px] left-0 right-0 h-1 rounded-full bg-gradient-to-r from-orange-600 via-red-600 to-pink-400" />
        <div className="grid md:grid-cols-4 gap-10 md:gap-6">
          {cicloImplementacao.map((step, i) => (
            <motion.div
              key={step.semana}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <p className="text-red-500 font-bold text-xs tracking-widest mb-3">
                {step.semana.toUpperCase()}
              </p>
              <div className="hidden md:block w-3 h-3 rounded-full bg-white border-4 border-black mb-3" />
              <p className="font-bold text-lg">{step.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
};
