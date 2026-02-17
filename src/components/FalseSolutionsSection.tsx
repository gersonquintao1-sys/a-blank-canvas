import { X } from "lucide-react";
import { motion } from "framer-motion";
import { CTAButton } from "./HeroSection";

const falseSolutions = [
  {
    title: "Dietas Restritivas Tradicionais",
    text: 'Cortar carboidrato, passar fome, contar calorias... Seu cérebro materno interpreta isso como "escassez" e produz ainda MAIS cortisol, trancando sua gordura com ainda mais força. É por isso que você perde 2kg e ganha 4 de volta.',
  },
  {
    title: "Academia e Personal Trainer",
    text: '"Sem dor, sem ganho!" Mas quem tem tempo pra academia quando mal consegue tomar banho direito? E exercício em excesso também eleva cortisol. Seu corpo de mãe precisa de recuperação, não de mais stress.',
  },
  {
    title: "Shakes e Substitutos de Refeição",
    text: 'Você até perde peso no começo (porque está passando fome), mas em 15 dias está atacando a geladeira de madrugada com mais compulsão que antes. Seu metabolismo maternal precisa de gorduras específicas, não de química em pó.',
  },
  {
    title: 'Apps de Dieta e "Reeducação Alimentar"',
    text: "Você baixa, registra algumas refeições e... esquece. Quem tem tempo pra ficar contando ponto de comida quando tem filho doente, reunião no trabalho e casa pra arrumar? Mãe precisa de simplicidade, não de mais uma tarefa.",
  },
];

const FalseSolutionsSection = () => (
  <section className="py-20 md:py-32 px-4 section-alt">
    <div className="max-w-3xl mx-auto">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }}
      >
        <span className="premium-badge mb-5 inline-flex">O que não funciona</span>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">
          Por que outras soluções <span className="text-gradient-accent">falham</span>
        </h2>
      </motion.div>

      <div className="space-y-5">
        {falseSolutions.map((sol, i) => (
          <motion.div
            key={i}
            className="premium-card-hover p-7 md:p-8 flex gap-5"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-destructive/8 flex items-center justify-center mt-0.5 border border-destructive/10">
              <X className="w-5 h-5 text-destructive/70" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2 tracking-tight">{sol.title}</h3>
              <p className="text-foreground/70 leading-[1.8]">{sol.text}</p>
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
        <CTAButton>DESCOBRIR A SOLUÇÃO QUE FUNCIONA</CTAButton>
      </motion.div>
    </div>
  </section>
);

export default FalseSolutionsSection;
