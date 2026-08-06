import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { CTAButton } from "./HeroSection";

const testimonials = [
  { text: "Eu achava que minha margem tinha um teto. Troquei 2 fornecedores pela lista do Cofre e minha camisa que custava R$52 passou a custar R$31. Só nisso já paguei o material 20 vezes.", name: "Rodrigo", info: "loja física, São Paulo" },
  { text: "O checklist anti-calote sozinho já valeu o investimento. Ia fechar pedido com um 'fornecedor' que sumiu com o dinheiro de outros dois lojistas do meu bairro.", name: "Thiago", info: "loja no Instagram, Belo Horizonte" },
  { text: "Eu estava pagando o mesmo preço de quem compra 5 peças. Descobri fábrica que vende direto, sem MOQ absurdo, e ainda manda amostra. Mudou o jogo da minha loja.", name: "Fernando", info: "e-commerce, Rio de Janeiro" },
  { text: "Sempre tive medo de negociar com fábrica achando que ia parecer amador. O módulo de negociação me deu o script certo e hoje já fechei com 4 fornecedores novos.", name: "Lucas", info: "loja de bairro, Curitiba" },
  { text: "Comprei achando que era só uma lista de contato. Vim descobrir que o curso de precificação sozinho resolveu um problema que eu tinha há 2 anos: eu vendia achando que lucrava, e não lucrava.", name: "Diego", info: "multimarcas, Salvador" },
  { text: "Melhor R$27 que já gastei na loja. Economizei mais no primeiro pedido com um fornecedor novo do que gastei com o Cofre inteiro.", name: "Marcelo", info: "loja física, Brasília" },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-32 px-4">
    <div className="max-w-4xl mx-auto">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }}
      >
        <span className="premium-badge mb-5 inline-flex">Resultados reais</span>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">
          O que outros lojistas <span className="text-gradient-accent">dizem</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="premium-card-hover p-7 flex flex-col"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <div className="flex items-center justify-between mb-4">
              <Quote className="w-7 h-7 text-accent/20" />
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-accent fill-accent" />
                ))}
              </div>
            </div>
            <p className="text-foreground/80 leading-[1.8] flex-1 italic">"{t.text}"</p>
            <div className="mt-5 pt-5 border-t border-border/40 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center">
                <span className="text-primary font-bold text-sm">{t.name[0]}</span>
              </div>
              <div>
                <p className="font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.info}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA at section bottom */}
      <motion.div
        className="mt-14 text-center"
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
      >
        <CTAButton>QUERO TER ESSES RESULTADOS</CTAButton>
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;
