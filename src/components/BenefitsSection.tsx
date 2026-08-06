import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { CTAButton } from "./HeroSection";

const benefits = [
  "Comprar direto de fábrica, pulando os intermediários que hoje comem sua margem antes de você ver o lucro",
  "Aumentar sua margem em até 40% sem precisar aumentar o preço de venda ao cliente final",
  "Nunca mais ficar refém de um único fornecedor — se um sumir ou atrasar, você tem outros 10 pra recorrer no mesmo dia",
  "Negociar com fábrica com confiança, sabendo exatamente o que pedir e como validar antes de fechar",
  "Parar de perder dinheiro com fornecedor calote, usando o checklist que evita isso antes de qualquer pagamento",
  "Precificar sem medo, com uma planilha que mostra sua margem real antes de você colocar a peça na vitrine",
  "Renovar seu mix de produtos com categorias novas — tênis, acessórios, linha premium — sem procurar fornecedor do zero",
  "Comprar como os grandes lojistas compram, mesmo sendo uma loja pequena, física ou só de Instagram",
];

const BenefitsSection = () => (
  <section className="py-20 md:py-32 px-4 section-primary-subtle">
    <div className="max-w-3xl mx-auto">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }}
      >
        <span className="premium-badge mb-5 inline-flex">Sua loja transformada</span>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">
          Ao adquirir hoje, <span className="text-gradient-accent">você vai</span>
        </h2>
      </motion.div>

      <div className="space-y-3.5">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            className="premium-card-hover flex gap-5 items-start p-6"
            initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-success/10 flex items-center justify-center mt-0.5 border border-success/15">
              <Check className="w-4 h-4 text-success" />
            </div>
            <p className="text-foreground/80 text-lg leading-[1.7]">{b}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA at section bottom */}
      <motion.div
        className="mt-14 text-center"
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
      >
        <CTAButton>QUERO TRANSFORMAR MINHA LOJA</CTAButton>
      </motion.div>
    </div>
  </section>
);

export default BenefitsSection;
