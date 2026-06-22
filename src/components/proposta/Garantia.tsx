import { motion } from "framer-motion";
import { Clock, Settings, CheckCircle2, Target } from "lucide-react";
import { SectionShell } from "./SectionShell";
import { garantiaCards } from "./data";

const icons = [Clock, Settings, CheckCircle2, Target];

export const Garantia = () => {
  return (
    <SectionShell id="garantia" eyebrow="Garantia" index={8}>
      <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold leading-[1.05]"
        >
          Sua
          <br />
          <span className="text-red-500">Garantia</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/70 leading-relaxed text-base md:text-lg"
        >
          No período de 6 meses, o processo de lançamento pago (venda de
          ingressos, comparecimento nas lives e venda de mentoria) precisará
          estar 100% validado e com faturamento previsível de R$ 150.000 por
          mês. Caso o objetivo de R$ 150.000 por mês não seja alcançado, o
          investimento feito é 100% extornado mediante solicitação da
          contratante.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {garantiaCards.map((card, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl border border-red-500/40 p-6"
            >
              <Icon className="text-red-500 mb-6" size={28} strokeWidth={1.5} />
              <p className="text-red-500 font-extrabold text-2xl md:text-3xl mb-2">
                {card.value}
              </p>
              <p className="text-white/60 text-sm">{card.label}</p>
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
};
