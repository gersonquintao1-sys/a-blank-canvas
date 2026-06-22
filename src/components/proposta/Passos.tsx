import { motion } from "framer-motion";
import { FileSignature, Users, Rocket, Repeat } from "lucide-react";
import { SectionShell } from "./SectionShell";
import { passosInicio } from "./data";

const icons = [FileSignature, Users, Rocket, Repeat];

export const Passos = () => {
  return (
    <SectionShell id="passos" eyebrow="Início do Projeto" index={10}>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-extrabold mb-14"
      >
        Passos para <span className="text-red-500">Início do Projeto</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-5">
        {passosInicio.map((p, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={p.etapa}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-5 rounded-xl border border-red-500/30 bg-gradient-to-br from-red-950/30 to-transparent p-6"
            >
              <span className="w-12 h-12 shrink-0 rounded-full border border-red-500/50 flex items-center justify-center">
                <Icon className="text-red-500" size={20} />
              </span>
              <div>
                <p className="font-bold text-white mb-1">{p.etapa}:</p>
                <p className="text-white/65 text-sm leading-relaxed">{p.text}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
};
