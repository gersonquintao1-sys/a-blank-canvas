import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";
import sobreNosImg from "@/assets/proposta/sobre-nos.png";

export const SobreNos = () => {
  return (
    <SectionShell id="sobre" eyebrow="Sobre Nós" index={1}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/5] max-w-sm mx-auto md:mx-0"
        >
          <div
            className="absolute -inset-10 rounded-full blur-3xl opacity-60"
            style={{
              background:
                "radial-gradient(circle, #ef4444 0%, #7f1d1d 50%, transparent 75%)",
            }}
          />
          <div className="relative h-full w-full rounded-2xl border border-red-500/50 overflow-hidden">
            <img
              src={sobreNosImg}
              alt="Equipe Naprati.ca Digital"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Sobre <span className="text-red-500">Nós</span>
          </h2>
          <p className="text-white/70 leading-relaxed text-base md:text-lg">
            A Na Prática Digital é especializada em modelar e aplicar soluções
            de marketing raiz para empresas e pessoas que desejam tracionar
            seus projetos utilizando as boas práticas desenvolvidas por
            profissionais como Russell Brunson, Eugene Schwartz, Dan Kennedy,
            Todd Brown, Jon Benson, Jeff Walker, Stefan Georgi, Ryan Deiss e
            Neil Patel.
            <br />
            <br />
            Com mais de 8 anos de experiência no mercado, utilizamos apenas
            estratégias validadas (como lançamentos pagos, VSLs, webinários,
            entre outras) para gerar mais de R$ 150 milhões em faturamento
            para nossos clientes e para nossos próprios projetos internos.
          </p>
        </motion.div>
      </div>
    </SectionShell>
  );
};
