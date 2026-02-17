import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import testimonial3 from "@/assets/testimonial-3.webp";
import testimonial4 from "@/assets/testimonial-4.webp";
import testimonial5 from "@/assets/testimonial-5.webp";
import testimonial6 from "@/assets/testimonial-6.webp";
import testimonial7 from "@/assets/testimonial-7.webp";
import testimonial8 from "@/assets/testimonial-8.webp";
import testimonial9 from "@/assets/testimonial-9.webp";

const images = [testimonial3, testimonial4, testimonial5, testimonial6, testimonial7, testimonial8, testimonial9];

const CTAButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <a
    href="#oferta"
    className={`group relative inline-flex items-center justify-center font-bold text-lg md:text-xl px-10 py-5 rounded-2xl text-accent-foreground overflow-hidden transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] animate-pulse-glow ${className}`}
    style={{
      background: "linear-gradient(135deg, hsl(25 85% 55%), hsl(20 80% 48%))",
      boxShadow: "0 4px 20px -4px hsl(25 85% 55% / 0.4), inset 0 1px 0 hsl(0 0% 100% / 0.15)",
    }}
  >
    <span className="relative z-10">{children}</span>
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" style={{ backgroundSize: "200% 100%" }} />
  </a>
);

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative overflow-hidden py-16 md:py-28 px-4">
      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(25 85% 55% / 0.08), transparent 70%)" }}
      />

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="premium-badge mb-6 inline-flex">Método Exclusivo</span>

          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] text-foreground mb-4 tracking-tight">
            Como Eliminar <span className="text-gradient-accent">5kg em 7 Dias</span>
            <br />
            Desbloqueando Seu Metabolismo
            <br className="hidden md:block" /> Pós-Maternidade
          </h1>
          <p className="text-muted-foreground italic text-xl md:text-2xl font-display mt-3 mb-10">
            (Mesmo Comendo Bacon no Café da Manhã)
          </p>
        </motion.div>

        {/* Auto carousel */}
        <motion.div
          className="my-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] premium-card" style={{ padding: 0 }}>
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Resultado antes e depois ${i + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out ${i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
                loading={i === 0 ? "eager" : "lazy"}
              />
            ))}
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2.5 mt-6">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-500 ${i === current ? "bg-accent w-8" : "bg-border/80 w-2 hover:bg-muted-foreground/40"}`}
                aria-label={`Imagem ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <CTAButton>DESTRAVE SEU METABOLISMO AGORA</CTAButton>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
export { CTAButton };
