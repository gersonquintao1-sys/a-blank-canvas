import { CheckCircle, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { CTAButton } from "./HeroSection";

const objections = [
  {
    q: '"É muito caro para meu orçamento"',
    a: "R$3,70 por dia é literalmente o preço de um café. Você gasta mais com aquele delivery que te deixa inchada. E com nossa garantia, ou você elimina no mínimo 3kg em 14 dias ou devolvemos 100% do investimento.",
  },
  {
    q: '"Não tenho tempo nem para tomar banho direito"',
    a: "O método foi criado POR mães ocupadas PARA mães ocupadas. São apenas 3 ajustes simples no que você já come. Funciona em 15 minutos enquanto o jantar cozinha. Zero tempo extra, zero complicação.",
  },
  {
    q: '"Já tentei de tudo e nada funciona comigo"',
    a: 'Você nunca tentou algo específico para o metabolismo pós-maternidade. As outras dietas ignoram seu "Cadeado Hormonal". Nosso método usa a chave certa: mais de 2.897 mães já comprovaram que funciona.',
  },
  {
    q: '"Minha família não vai aceitar comida de dieta"',
    a: "As receitas são tão gostosas que seu marido vai IMPLORAR pra você continuar. São pratos normais que toda família come, só que na versão que destrava seu metabolismo. Seus filhos nem vão perceber a diferença.",
  },
];

const ObjectionsSection = () => (
  <section className="py-20 md:py-32 px-4">
    <div className="max-w-3xl mx-auto">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }}
      >
        <span className="premium-badge mb-5 inline-flex">Suas dúvidas respondidas</span>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">
          Principais Objeções <span className="text-gradient-accent">Respondidas</span>
        </h2>
      </motion.div>

      <div className="space-y-5">
        {objections.map((obj, i) => (
          <motion.div
            key={i}
            className="premium-card-hover p-7 md:p-8"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <p className="font-display font-bold text-lg text-foreground mb-4 flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-muted-foreground/50 flex-shrink-0 mt-1" />
              {obj.q}
            </p>
            <div className="flex gap-3.5 items-start ml-8">
              <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <p className="text-foreground/75 leading-[1.8]">{obj.a}</p>
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
        <CTAButton>QUERO COMEÇAR AGORA</CTAButton>
      </motion.div>
    </div>
  </section>
);

export default ObjectionsSection;
