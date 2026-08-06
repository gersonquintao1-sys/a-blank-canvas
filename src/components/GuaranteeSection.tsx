import { CTAButton } from "./HeroSection";
import { motion } from "framer-motion";
import { Shield, ShieldCheck } from "lucide-react";

const GuaranteeSection = () => (
  <section className="py-20 md:py-32 px-4 section-primary-subtle">
    <div className="max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }}
      >
        <span className="premium-badge mb-5 inline-flex"><Shield className="w-3 h-3" /> Risco zero</span>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-12">
          Nossa <span className="text-gradient-accent">Garantia</span>
        </h2>
      </motion.div>

      <motion.div
        className="premium-card p-10 md:p-14 max-w-xl mx-auto"
        initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
      >
        <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center animate-float">
          <ShieldCheck className="w-12 h-12 text-accent" />
        </div>
        <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-5 tracking-tight">
          GARANTIA INCONDICIONAL DE 7 DIAS
        </h3>
        <p className="text-foreground/75 leading-[1.8] mb-5">
          Se você acessar o Cofre do Lojista™ e sentir que não é pra você, devolvemos 100% do seu investimento em até 7 dias.
        </p>
        <p className="text-foreground font-semibold mb-5">
          Sem perguntas. Sem burocracia. Sem complicação.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Assumimos todo o risco porque sabemos que a lista funciona. Centenas de lojistas de moda masculina já compraram direto da fonte com o Cofre. Agora é sua vez.
        </p>
      </motion.div>

      <motion.div
        className="mt-14"
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
      >
        <CTAButton>SIM, QUERO DESBLOQUEAR O COFRE AGORA</CTAButton>
        <p className="text-muted-foreground text-sm mt-5">
          De R$ 197 por apenas <strong className="text-accent">R$ 27</strong> (o preço de uma camiseta básica)
        </p>
        <p className="text-xs text-muted-foreground/70 mt-2">
          ✓ Acesso Imediato &nbsp;|&nbsp; ✓ Garantia Incondicional &nbsp;|&nbsp; ✓ Suporte Incluído
        </p>
      </motion.div>
    </div>
  </section>
);

export default GuaranteeSection;
