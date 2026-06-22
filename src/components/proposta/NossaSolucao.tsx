import { motion } from "framer-motion";
import { BarChart3, Cloud, Workflow, MousePointerClick } from "lucide-react";
import { SectionShell } from "./SectionShell";

const items = [
  { icon: BarChart3, title: "Estratégia Completa" },
  { icon: Cloud, title: "Lançamento Pago" },
  { icon: Workflow, title: "Mapeamento Completo" },
  { icon: MousePointerClick, title: "Resultado com Garantia" },
];

export const NossaSolucao = () => {
  return (
    <SectionShell id="solucao" eyebrow="Nossa Solução" index={2}>
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.05] mb-6">
            Nossa
            <br />
            <span className="text-red-500">Solução</span>
          </h2>
          <p className="text-white/70 leading-relaxed text-base md:text-lg">
            Desenvolver, validar e escalar um processo previsível de
            aquisição de clientes e geração de vendas por meio de
            lançamentos pagos, utilizando workshops, desafios e webinars
            como principais mecanismos de captação, relacionamento e
            conversão de clientes.
          </p>
        </motion.div>

        <div className="divide-y divide-white/10">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-5 py-6"
            >
              <item.icon className="text-red-500 shrink-0" size={28} strokeWidth={1.5} />
              <span className="font-bold text-lg md:text-xl tracking-wide">
                {item.title.toUpperCase()}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
};
