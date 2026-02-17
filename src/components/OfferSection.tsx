import { Flame, Play, Zap, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { CTAButton } from "./HeroSection";
import ketoFood from "@/assets/keto-food.jpg";

const modules = [
  { icon: Flame, title: "Módulo 1: Ativação da Cetose Bio-Idêntica", time: "7 min", desc: "O protocolo exato para neutralizar o cortisol pós-parto em 72h e destrancar o cadeado da sua gordura. Você aprende os 3 ajustes alimentares que fazem seu corpo queimar gordura antiga 24 horas por dia." },
  { icon: Flame, title: "Módulo 2: Cardápio da Mãe Ocupada", time: "9 min", desc: "17 refeições práticas que cabem na sua rotina maluca e mantêm a queima acelerada. De café da manhã com bacon a jantares que toda família ama - sem precisar cozinhar separado." },
  { icon: Flame, title: "Módulo 3: SOS Compulsão Noturna", time: "9 min", desc: 'Como transformar sua "fraqueza das 22h" no seu maior aliado de emagrecimento. Aprenda a "enganar" seu cérebro com as gorduras certas e eliminar a fome desesperada do final do dia.' },
  { icon: Flame, title: "Módulo 4: Próximos Passos", time: "10 min", desc: "Seu plano de continuidade para manter os resultados para sempre, sem nunca mais voltar ao peso anterior." },
];

const metaItems = [
  { icon: Play, label: "Formato", value: "Aulas em vídeo de alta qualidade" },
  { icon: Zap, label: "Acesso", value: "Imediato via plataforma exclusiva" },
  { icon: MessageSquare, label: "Suporte", value: "Comunidade privada no Telegram" },
];

const OfferSection = () => (
  <section className="py-20 md:py-32 px-4 section-alt">
    <div className="max-w-3xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }}
      >
        <span className="premium-badge mb-5 inline-flex">O que está incluso</span>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-3">
          Você vai receber
        </h2>
        <p className="font-display text-xl md:text-2xl font-bold text-gradient-accent">
          SISTEMA CETOLEVE™
        </p>
        <p className="text-muted-foreground text-lg mt-2">
          O Primeiro Método de Desbloqueio Metabólico Pós-Maternidade
        </p>
      </motion.div>

      {/* Food image */}
      <motion.div
        className="mb-12 premium-card overflow-hidden rounded-2xl p-0"
        initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
      >
        <img
          src={ketoFood}
          alt="Refeições saudáveis e saborosas do método Cetoleve"
          className="w-full h-56 md:h-72 object-cover"
          loading="lazy"
        />
      </motion.div>

      <div className="space-y-4">
        {modules.map((mod, i) => (
          <motion.div
            key={i}
            className="premium-card-hover p-7 md:p-8"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mt-0.5 border border-accent/10">
                <mod.icon className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                  <h3 className="font-display font-bold text-lg text-foreground tracking-tight">{mod.title}</h3>
                  <span className="text-xs font-semibold tracking-wider uppercase bg-primary/8 text-primary px-3 py-1.5 rounded-full border border-primary/10">
                    {mod.time}
                  </span>
                </div>
                <p className="text-foreground/70 leading-[1.8]">{mod.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4"
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
      >
        {metaItems.map((item) => (
          <div key={item.label} className="premium-card p-5 text-center">
            <item.icon className="w-5 h-5 text-accent mx-auto mb-2.5" />
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">{item.label}</p>
            <p className="text-sm text-foreground/80 font-medium">{item.value}</p>
          </div>
        ))}
      </motion.div>

      {/* CTA at section bottom */}
      <motion.div
        className="mt-14 text-center"
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
      >
        <CTAButton>GARANTIR MINHA VAGA AGORA</CTAButton>
      </motion.div>
    </div>
  </section>
);

export default OfferSection;
