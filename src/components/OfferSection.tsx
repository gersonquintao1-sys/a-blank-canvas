import { Factory, Handshake, Calculator, ShieldCheck, Play, Zap, MessageSquare, Shirt, Layers, Footprints, Boxes, Gem, Crown } from "lucide-react";
import { motion } from "framer-motion";
import { CTAButton } from "./HeroSection";

const modules = [
  { icon: Factory, title: "Módulo 1: O Mapa do Cofre", time: "6 min", desc: "Como navegar pela lista de mais de 150 fornecedores e escolher os certos pro seu tipo de loja, seja física, online ou no Instagram." },
  { icon: Handshake, title: "Módulo 2: Negociação Blindada", time: "11 min", desc: "O passo a passo pra falar com a fábrica sem parecer amador: como pedir amostra, negociar preço, prazo e frete — mesmo comprando pouco." },
  { icon: Calculator, title: "Módulo 3: Precificação Sem Medo", time: "9 min", desc: "A planilha e o método pra calcular seu markup ideal, sem chutar preço e sem vender no prejuízo achando que está lucrando." },
  { icon: ShieldCheck, title: "Módulo 4: Checklist Anti-Calote", time: "8 min", desc: "As perguntas e verificações que você faz ANTES de pagar qualquer fornecedor novo, pra nunca mais cair em golpe." },
];

const categories = [
  { icon: Shirt, name: "Camisas" },
  { icon: Layers, name: "Jaquetas" },
  { icon: Footprints, name: "Tênis" },
  { icon: Boxes, name: "Calças" },
  { icon: Gem, name: "Acessórios" },
  { icon: Crown, name: "Linha Social" },
];

const metaItems = [
  { icon: Play, label: "Formato", value: "PDF do Cofre + vídeo-aulas curtas" },
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
          COFRE DO LOJISTA™
        </p>
        <p className="text-muted-foreground text-lg mt-2">
          A Lista + o Curso Que Ensina a Comprar Como os Grandes Lojistas
        </p>
      </motion.div>

      {/* Category grid */}
      <motion.div
        className="mb-12 premium-card p-6 md:p-8 grid grid-cols-3 md:grid-cols-6 gap-4"
        initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
      >
        {categories.map((cat) => (
          <div key={cat.name} className="flex flex-col items-center gap-2 text-center">
            <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/10 flex items-center justify-center">
              <cat.icon className="w-5 h-5 text-accent" />
            </div>
            <span className="text-xs text-muted-foreground font-medium">{cat.name}</span>
          </div>
        ))}
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
        <CTAButton>GARANTIR MEU ACESSO AGORA</CTAButton>
      </motion.div>
    </div>
  </section>
);

export default OfferSection;
