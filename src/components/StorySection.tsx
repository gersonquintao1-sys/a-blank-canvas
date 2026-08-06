import { motion } from "framer-motion";
import { Key } from "lucide-react";
import { CTAButton } from "./HeroSection";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const bulletPoints = [
  { title: "Acesso Direto à Fábrica", desc: "Pula 2 ou 3 intermediários e compra no mesmo preço que os grandes lojistas compram;" },
  { title: "Fornecedores Verificados", desc: "Mais de 150 fábricas e distribuidores testados manualmente, sem golpe e sem calote;" },
  { title: "Preço de Atacado Real", desc: "Peças a partir de R$14, com descontos de até 70% sobre o preço que você paga hoje;" },
  { title: "Ideal pra Loja de Qualquer Tamanho", desc: "Pedido mínimo baixo, aceita CPF ou MEI — não precisa ser uma rede grande para comprar como uma." },
];

const StorySection = () => (
  <section className="py-20 md:py-32 px-4">
    <div className="max-w-3xl mx-auto">
      <motion.h2
        className="font-display text-2xl md:text-4xl lg:text-[2.5rem] font-bold text-center leading-tight text-foreground mb-14"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} custom={0}
      >
        Se você já sentiu que trabalha pro fornecedor e não pro seu bolso, precisa saber:{" "}
        <span className="text-gradient-accent">o problema nunca foi o seu preço de venda.</span>
      </motion.h2>

      <motion.div
        className="premium-card p-8 md:p-12 space-y-7 text-foreground/85 text-lg leading-[1.8]"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} custom={1}
      >
        <p>
          Eram 23h de uma quinta-feira e Rafael ainda estava com a calculadora aberta no celular, tentando entender por que a loja vendia bem no Instagram, mas o lucro no fim do mês mal pagava o aluguel. Ele comprava "no atacado", pagando R$54 numa camisa que revendia por R$89 — uma margem que parecia boa, até ele ver a mesma peça, do mesmo tecido, sendo vendida por R$29 no perfil de um concorrente três vezes menor que o dele.
        </p>
        <blockquote className="border-l-4 border-accent/40 pl-6 py-2">
          <p className="text-accent font-semibold italic text-xl leading-relaxed">
            "Como ele vende por menos do que eu compro?", pensou Rafael, encarando a planilha que teimava em não fechar no verde.
          </p>
        </blockquote>
        <p>
          A resposta não estava no marketing, nem no preço de venda. Estava em quantas mãos a peça passava antes de chegar até ele — e essa descoberta está mudando a forma como centenas de lojistas de moda masculina compram hoje.
        </p>
      </motion.div>

      <div className="mt-20 md:mt-28">
        <motion.div
          className="text-center mb-12"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} custom={0}
        >
          <span className="premium-badge mb-5 inline-flex">O mecanismo</span>
          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
            A Cadeia dos Intermediários
          </h3>
          <p className="text-muted-foreground text-lg mt-2">
            Por que sua margem desaparece antes de chegar no seu bolso
          </p>
        </motion.div>

        <motion.p
          className="text-lg text-foreground/80 leading-[1.8] text-center max-w-2xl mx-auto mb-10"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} custom={1}
        >
          Depois de mapear centenas de fábricas de roupa masculina no Brasil, descobrimos que a maioria dos lojistas iniciantes não compra da fábrica — compra de um atacadista, que compra de outro atacadista, que compra da fábrica. Cada mão extra nessa corrente <strong className="text-foreground">soma de 15% a 40% no preço</strong> antes da peça chegar até você. É por isso que você trabalha o dia inteiro, mas a margem some no caminho.
        </motion.p>

        <motion.p
          className="text-center text-xl font-bold text-primary mb-14"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} custom={2}
        >
          Mas existe um jeito simples de pular direto pra fonte.
        </motion.p>
      </div>

      <motion.div
        className="premium-card p-8 md:p-12 section-primary-subtle"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} custom={0}
      >
        <h4 className="font-display text-xl md:text-2xl font-bold text-foreground mb-8 leading-tight">
          Chamamos isso de <span className="text-gradient-accent">Cofre do Lojista™</span>.
          <span className="block text-muted-foreground text-lg font-body font-normal mt-2">
            Veja o que essa "chave direta pra fábrica" é capaz de fazer:
          </span>
        </h4>
        <div className="space-y-5">
          {bulletPoints.map((item, i) => (
            <motion.div
              key={item.title}
              className="flex gap-4 items-start"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.5}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mt-0.5">
                <Key className="w-5 h-5 text-accent" />
              </div>
              <span className="text-foreground/85 text-lg leading-relaxed">
                <strong className="text-foreground">{item.title}:</strong> {item.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA at section bottom */}
      <motion.div
        className="mt-14 text-center"
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
      >
        <CTAButton>QUERO COMPRAR DIRETO DA FONTE</CTAButton>
      </motion.div>
    </div>
  </section>
);

export default StorySection;
