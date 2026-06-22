import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";

export const Investimento = () => {
  return (
    <SectionShell id="investimento" eyebrow="Investimento" index={9}>
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold leading-[1.05]"
        >
          Seu
          <br />
          <span className="text-red-500">Investimento</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-white/70 leading-relaxed mb-10">
            Existem opções de forma de pagamento para esse valor, podendo
            ser à vista no Pix, parcelado em até 12 vezes no cartão, entrada
            mais parcelamento no Pix, entrada mais pagamento após o término
            do contrato ou entrada mais participação sobre o lucro do
            projeto no período de seis meses.
          </p>

          <p className="text-xs tracking-[0.25em] text-white/50 mb-2">
            VALOR TOTAL
          </p>
          <p className="text-5xl md:text-6xl font-extrabold text-red-500 mb-8">
            R$ 85.000
          </p>

          <div className="h-px bg-white/15 mb-8" />

          <p className="text-xs tracking-[0.2em] text-white/50 mb-2">
            RETORNO MENSAL APÓS ESTRUTURAÇÃO DE 8 MESES
          </p>
          <p className="text-4xl md:text-5xl font-extrabold">R$150.000</p>
        </motion.div>
      </div>
    </SectionShell>
  );
};
