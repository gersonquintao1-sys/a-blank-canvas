import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { CTAButton } from "./HeroSection";

const testimonials = [
  { text: "Eu achava que meu metabolismo tinha morrido depois da segunda cesárea. Em 7 dias perdi 6kg e finalmente consegui fechar a calça jeans. Meu marido até perguntou se eu tinha feito algum procedimento!", name: "Marina", info: "mãe de 2, São Paulo" },
  { text: "A compulsão noturna era meu maior inimigo. Agora como queijo à noite e acordo mais magra! Parece mágica, mas é só biologia funcionando a meu favor.", name: "Carla", info: "34 anos, Belo Horizonte" },
  { text: "Estava gastando R$800 por mês com nutricionista e personal. O Cetoleve custou menos que uma consulta e me deu resultados que nunca consegui antes.", name: "Juliana", info: "mãe de 3, Rio de Janeiro" },
  { text: "Em 5 dias já tinha energia pra brincar com meus filhos. Em 2 semanas, 8kg a menos. Hoje visto aquele vestido que estava guardado há 4 anos.", name: "Fernanda", info: "35 anos, Curitiba" },
  { text: "Resultado em 7 dias que outras dietas prometiam em meses. E o melhor: comendo coisas gostosas, sem passar fome.", name: "Patrícia", info: "mãe de 1, Salvador" },
  { text: "Melhor investimento da minha vida. Economizei mais em delivery e doces do que gastei com o método. E ainda ganhei minha autoestima de volta.", name: "Ana", info: "32 anos, Brasília" },
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
          O que nossos clientes <span className="text-gradient-accent">dizem</span>
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
