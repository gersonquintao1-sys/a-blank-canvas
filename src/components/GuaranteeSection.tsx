import guaranteeSeal from "@/assets/guarantee-seal.png";
import { CTAButton } from "./HeroSection";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

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
        <img
          src={guaranteeSeal}
          alt="Selo de Garantia 14 Dias"
          className="w-28 h-28 mx-auto mb-8 animate-float drop-shadow-lg"
          loading="lazy"
        />
        <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-5 tracking-tight">
          GARANTIA INCONDICIONAL DE 14 DIAS
        </h3>
        <p className="text-foreground/75 leading-[1.8] mb-5">
          Se você não eliminar no mínimo 3kg em 14 dias seguindo nosso método, devolvemos 100% do seu investimento.
        </p>
        <p className="text-foreground font-semibold mb-5">
          Sem perguntas. Sem burocracia. Sem complicação.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Assumimos todo o risco porque sabemos que o Sistema Cetoleve™ funciona. Mais de 2.897 mães brasileiras já comprovaram. Agora é sua vez.
        </p>
      </motion.div>

      <motion.div
        className="mt-14"
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
      >
        <CTAButton>SIM, QUERO DESTRANCAR MEU METABOLISMO AGORA</CTAButton>
        <p className="text-muted-foreground text-sm mt-5">
          De R$ 197 por apenas <strong className="text-accent">R$ 9,90</strong> (O preço de 1 delivery que te deixa inchada)
        </p>
        <p className="text-xs text-muted-foreground/70 mt-2">
          ✓ Acesso Imediato &nbsp;|&nbsp; ✓ Garantia Incondicional &nbsp;|&nbsp; ✓ Suporte Incluído
        </p>
      </motion.div>
    </div>
  </section>
);

export default GuaranteeSection;
