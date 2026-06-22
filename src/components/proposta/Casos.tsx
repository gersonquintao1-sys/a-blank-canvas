import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";
import { resultCases } from "./data";
import caso1 from "@/assets/proposta/caso-1.png";
import caso2 from "@/assets/proposta/caso-2.png";
import caso3 from "@/assets/proposta/caso-3.png";
import caso4 from "@/assets/proposta/caso-4.png";

const casoImages = [caso1, caso2, caso3, caso4];

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
            Em nossa experiência, cerca de um em cada sete projetos tende a
            não alcançar o resultado desejado. Isso não acontece por falhas
            na nossa execução, mas, na maioria das vezes, pela falta de
            clareza do contratante em relação às metas, aos objetivos e aos
            dados reais disponíveis, bem como pelas projeções e ações
            previstas para os próximos meses.
          </p>
          <p>
            Queremos muito que você seja o nosso próximo case de sucesso.
            Para isso, nossa relação precisa ser uma via de mão dupla: nós
            nos comprometemos a prestar o serviço com o máximo de
            eficiência, qualidade e respeito aos prazos, enquanto esperamos
            da sua parte total transparência e veracidade nas informações
            compartilhadas.
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
            className="rounded-xl border border-red-500/30 bg-gradient-to-b from-red-950/30 to-transparent overflow-hidden"
          >
            <img
              src={casoImages[i]}
              alt={c.result}
              className="w-full aspect-[9/16] object-cover"
            />
            <div className="p-4">
              <p className="text-white/50 text-sm mb-1">{c.duration}</p>
              <p className="text-white font-bold text-lg">{c.result}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
};
