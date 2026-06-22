import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { SectionShell } from "./SectionShell";
import { resultCases } from "./data";

export const Casos = () => {
  return (
    <SectionShell id="casos" eyebrow="Cases" index={3}>
      <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.05]">
            Casos de
            <br />
            <span className="text-red-500">Sucesso</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/70 leading-relaxed space-y-4"
        >
          <p className="text-red-400 font-semibold uppercase text-sm tracking-wide">
            Desejamos que o próximo case de sucesso seja o seu, mas
            precisamos ser transparentes:
          </p>
          <p>
            Pela nossa experiência, cerca de 1 em cada 7 projetos não
            atinge o resultado esperado. Normalmente, isso ocorre pela
            falta de clareza sobre metas, objetivos, dados reais do
            negócio e projeções para os meses seguintes.
          </p>
          <p>
            Queremos que você seja nosso próximo case de sucesso. Para
            isso, a parceria precisa ser uma via de mão dupla: nós nos
            comprometemos a entregar o serviço com máxima eficiência,
            qualidade e respeito aos prazos, enquanto esperamos total
            transparência e veracidade nas informações compartilhadas.
          </p>
        </motion.div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {resultCases.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-xl border border-red-500/30 bg-gradient-to-b from-red-950/30 to-transparent p-6"
          >
            <TrendingUp className="text-red-500 mb-4" size={24} />
            <p className="text-white/50 text-sm mb-1">{c.duration}</p>
            <p className="text-white font-bold text-lg">{c.result}</p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
};
