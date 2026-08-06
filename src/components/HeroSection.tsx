import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Shirt, Layers, Footprints, Boxes, Gem, Crown } from "lucide-react";

const categories = [
  { icon: Shirt, name: "Camisas & Camisetas", count: "38 fornecedores" },
  { icon: Layers, name: "Jaquetas & Moletons", count: "24 fornecedores" },
  { icon: Footprints, name: "Tênis & Calçados", count: "19 fornecedores" },
  { icon: Boxes, name: "Calças & Bermudas", count: "27 fornecedores" },
  { icon: Gem, name: "Acessórios & Relógios", count: "15 fornecedores" },
  { icon: Crown, name: "Linha Premium & Social", count: "12 fornecedores" },
];

const CTAButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <a
    href="#oferta"
    className={`group relative inline-flex items-center justify-center font-bold text-lg md:text-xl px-10 py-5 rounded-2xl text-accent-foreground overflow-hidden transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] animate-pulse-glow ${className}`}
    style={{
      background: "linear-gradient(135deg, hsl(43 74% 52%), hsl(35 70% 44%))",
      boxShadow: "0 4px 20px -4px hsl(43 74% 52% / 0.4), inset 0 1px 0 hsl(0 0% 100% / 0.15)",
    }}
  >
    <span className="relative z-10">{children}</span>
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" style={{ backgroundSize: "200% 100%" }} />
  </a>
);

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % categories.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 2600);
    return () => clearInterval(timer);
  }, [next]);

  const Active = categories[current].icon;

  return (
    <section className="relative overflow-hidden py-16 md:py-28 px-4">
      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(43 74% 52% / 0.08), transparent 70%)" }}
      />

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="premium-badge mb-6 inline-flex">Acesso Imediato · Atualizado 2026</span>

          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] text-foreground mb-4 tracking-tight">
            Pare de Comprar Caro. Descubra os{" "}
            <span className="text-gradient-accent">Fornecedores que os Grandes Lojistas</span>
            <br className="hidden md:block" /> de Moda Masculina Escondem a Sete Chaves.
          </h1>
          <p className="text-muted-foreground italic text-xl md:text-2xl font-display mt-3 mb-10">
            (Mesmo Vendendo Pelo Instagram, Sem Fábrica Própria e Sem CNPJ de Grande Empresa)
          </p>
        </motion.div>

        {/* Category showcase */}
        <motion.div
          className="my-12 max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative rounded-2xl overflow-hidden premium-card p-10 md:p-12 flex flex-col items-center justify-center min-h-[220px]">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/15 flex items-center justify-center mb-5">
                <Active className="w-8 h-8 text-accent" />
              </div>
              <p className="font-display text-xl font-bold text-foreground">{categories[current].name}</p>
              <p className="text-muted-foreground text-sm mt-1.5">{categories[current].count} verificados</p>
            </motion.div>
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2.5 mt-6">
            {categories.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-500 ${i === current ? "bg-accent w-8" : "bg-border/80 w-2 hover:bg-muted-foreground/40"}`}
                aria-label={`Categoria ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <CTAButton>DESBLOQUEAR O COFRE POR R$27</CTAButton>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
export { CTAButton };
