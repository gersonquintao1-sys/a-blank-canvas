import { X } from "lucide-react";
import { motion } from "framer-motion";
import { CTAButton } from "./HeroSection";

const falseSolutions = [
  {
    title: "Grupos de WhatsApp \"Atacado\"",
    text: "Cheios de fotos repostadas e preço de varejo disfarçado de atacado. Quando você finalmente encontra algo bom, o fornecedor some depois do pagamento ou manda peça diferente da foto.",
  },
  {
    title: "Comprar Direto da China Sem Intermediário",
    text: "Pedido mínimo alto, prazo de 60 a 90 dias, impostos e nacionalização que comem a economia toda. Sem falar no risco de a peça nem passar pela alfândega.",
  },
  {
    title: "Pesquisar Fornecedor no Google",
    text: "A primeira página é dominada por quem paga anúncio — geralmente um atacadista comum, não a fábrica. Você paga o mesmo preço de tabela que qualquer concorrente iniciante paga.",
  },
  {
    title: "Comprar de Outro Lojista ou Distribuidor Regional",
    text: "A margem já vem cortada pela metade, porque tem outra pessoa lucrando entre você e a fábrica. Você nunca chega no preço de quem compra na origem.",
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
          Por que as outras formas de buscar fornecedor <span className="text-gradient-accent">falham</span>
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
        <CTAButton>QUERO A LISTA VERIFICADA</CTAButton>
      </motion.div>
    </div>
  </section>
);

export default FalseSolutionsSection;
