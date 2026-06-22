import { motion } from "framer-motion";
import { FileBarChart, Settings, Handshake } from "lucide-react";
import { SectionShell } from "./SectionShell";

const icons = [FileBarChart, Settings, Handshake];

export const Metas = () => {
  return (
    <SectionShell id="metas" eyebrow="Metas e Objetivos" index={7}>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold leading-[1.05] mb-12"
          >
            Metas e
            <br />
            <span className="text-red-500">Objetivos</span>
          </motion.h2>

          <div className="divide-y divide-white/15">
            {["Lançamento pago validado", "Estrutura validada", "Método replicável"].map(
              (label, i) => {
                const Icon = icons[i];
                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex items-center gap-5 py-5"
                  >
                    <Icon className="text-white" size={24} strokeWidth={1.5} />
                    <span className="font-bold tracking-wide">
                      {label.toUpperCase()}
                    </span>
                  </motion.div>
                );
              }
            )}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <p className="text-xs tracking-[0.3em] text-white/50 mb-4">
            META DE FATURAMENTO MENSAL
          </p>
          <p className="text-6xl md:text-7xl font-extrabold">R$150.000</p>
        </motion.div>
      </div>
    </SectionShell>
  );
};
