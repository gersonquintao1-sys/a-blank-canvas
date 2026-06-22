import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionShell } from "./SectionShell";
import { escopoProjeto, entregas1, entregas2 } from "./data";

export const Escopo = () => {
  return (
    <SectionShell id="escopo" eyebrow="Escopo e Entregas" index={4}>
      <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.05]">
            Escopo do
            <br />
            <span className="text-red-500">Projeto</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {escopoProjeto.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-4 rounded-xl p-5 bg-gradient-to-r from-red-950/40 to-transparent border border-red-900/40"
            >
              <Check className="text-white shrink-0 mt-1" size={22} strokeWidth={3} />
              <div>
                <p className="text-red-400 font-bold text-sm tracking-wide mb-1">
                  {item.title.toUpperCase()}
                </p>
                <p className="text-white/70 text-sm leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <EntregasBlock title="Escopo e Entregas: 1" items={entregas1} />
      <div className="h-16" />
      <EntregasBlock title="Escopo e Entregas: 2" items={entregas2} />
    </SectionShell>
  );
};

const EntregasBlock = ({
  title,
  items,
}: {
  title: string;
  items: { title: string; text: string }[];
}) => (
  <div>
    <motion.h3
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-2xl md:text-3xl font-extrabold mb-8"
    >
      {title.split(":")[0]}: <span className="text-red-500">{title.split(":")[1]}</span>
    </motion.h3>
    <div className="border border-white/10 rounded-2xl overflow-hidden divide-y divide-white/10">
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
          className="grid md:grid-cols-[260px_1fr] gap-4 p-6 hover:bg-white/[0.02] transition-colors"
        >
          <p className="font-bold text-white">{item.title}</p>
          <p className="text-white/60 text-sm leading-relaxed">{item.text}</p>
        </motion.div>
      ))}
    </div>
  </div>
);
