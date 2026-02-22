import { CTAButton } from "./HeroSection";
import { Check, Coffee, UtensilsCrossed, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const includedItems = [
  "Sistema Completo Cetoleve™",
  "Protocolo Cetose Bio-Idêntica (72h)",
  "Cardápio da Mãe Ocupada (17 receitas)",
  "Bônus 1: Lista de Mercado Econômica",
  'Bônus 2: Calculadora "Olho Mágico"',
  "Bônus 3: Protocolo Fim de Semana",
  "Comunidade Exclusiva no Telegram",
];

const PricingSection = () => (
  <section id="oferta" className="py-20 md:py-32 px-4 relative">
    {/* Subtle radial bg */}
    <div className="absolute inset-0 pointer-events-none" style={{
      background: "radial-gradient(ellipse at center, hsl(25 85% 55% / 0.04), transparent 60%)"
    }} />

    <div className="max-w-xl mx-auto text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }}
      >
        <span className="premium-badge mb-5 inline-flex">Oferta exclusiva</span>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-2">
          Oferta Especial
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Comece sua transformação agora. Investimento menor que um cafezinho por dia.
        </p>
      </motion.div>

      <motion.div
        className="relative rounded-3xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
      >
        {/* Accent border glow */}
        <div className="absolute -inset-[1px] rounded-3xl" style={{
          background: "linear-gradient(135deg, hsl(25 85% 55% / 0.3), hsl(25 85% 55% / 0.1), hsl(152 45% 28% / 0.1))",
        }} />

        <div className="relative bg-card rounded-3xl p-8 md:p-12 glow-accent">
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-sm font-bold px-5 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4" />
            MAIS VENDIDO
          </div>

          <div className="mb-8">
            <p className="text-muted-foreground line-through text-lg">De R$ 197,00</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 mt-1">POR APENAS</p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-2xl font-bold text-foreground/60">R$</span>
              <span className="font-display text-7xl md:text-8xl font-black text-gradient-accent leading-none">9</span>
              <span className="font-display text-3xl md:text-4xl font-black text-gradient-accent">,90</span>
            </div>
            <p className="text-muted-foreground text-sm mt-3">
              Garantia de 14 dias. Risco Zero.
            </p>
          </div>

          <div className="text-left space-y-3 mb-10 bg-background/40 rounded-2xl p-6 border border-border/30">
            {includedItems.map((item, i) => (
              <p key={i} className="flex items-center gap-3 text-foreground/85">
                <span className="w-5 h-5 rounded-full bg-success/12 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-success" />
                </span>
                <span className="text-sm">{item}</span>
              </p>
            ))}
          </div>

          <CTAButton className="w-full text-center block">
            👉 QUERO PERDER 5KG EM 7 DIAS
          </CTAButton>

          <p className="text-xs text-muted-foreground mt-5">
            Oferta expira em breve • Vagas limitadas
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Coffee className="w-3 h-3" /> Menos que um café</span>
            <span className="flex items-center gap-1"><UtensilsCrossed className="w-3 h-3" /> Menos que um delivery</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
