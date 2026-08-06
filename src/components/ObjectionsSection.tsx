import { CheckCircle, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { CTAButton } from "./HeroSection";

const objections = [
  {
    q: '"Minha loja é pequena, acho que não vou conseguir comprar dos mesmos fornecedores dos grandes"',
    a: "A maioria dos fornecedores da lista trabalha com pedido mínimo baixo e aceita CPF ou MEI. Você não precisa ser uma rede grande — precisa é comprar na fonte certa, do mesmo jeito que os grandes fazem.",
  },
  {
    q: '"Já tenho fornecedor, não preciso disso"',
    a: "A lista serve justamente pra comparar preços e nunca mais ficar refém de um fornecedor só. Se ele atrasar, subir o preço ou sumir, você tem para onde ir no mesmo dia — sem perder venda.",
  },
  {
    q: '"Lista de fornecedor sempre é golpe ou coisa desatualizada"',
    a: "Cada fornecedor do Cofre é verificado manualmente: CNPJ ativo, testado por outros lojistas e revisado a cada atualização. Nada de contato genérico copiado da internet.",
  },
  {
    q: '"Não entendo nada de negociar com fábrica, só uma lista não resolve"',
    a: "Por isso o Cofre vem com o mini-curso de Negociação Blindada: como pedir amostra, negociar preço e prazo, e validar um fornecedor antes de pagar qualquer coisa.",
  },
];

const ObjectionsSection = () => (
  <section className="py-20 md:py-32 px-4">
    <div className="max-w-3xl mx-auto">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }}
      >
        <span className="premium-badge mb-5 inline-flex">Suas dúvidas respondidas</span>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">
          Principais Objeções <span className="text-gradient-accent">Respondidas</span>
        </h2>
      </motion.div>

      <div className="space-y-5">
        {objections.map((obj, i) => (
          <motion.div
            key={i}
            className="premium-card-hover p-7 md:p-8"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <p className="font-display font-bold text-lg text-foreground mb-4 flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-muted-foreground/50 flex-shrink-0 mt-1" />
              {obj.q}
            </p>
            <div className="flex gap-3.5 items-start ml-8">
              <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <p className="text-foreground/75 leading-[1.8]">{obj.a}</p>
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
        <CTAButton>QUERO COMEÇAR AGORA</CTAButton>
      </motion.div>
    </div>
  </section>
);

export default ObjectionsSection;
