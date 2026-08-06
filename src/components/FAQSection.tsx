import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "Como recebo o acesso ao Cofre?", a: "Imediatamente após a confirmação do pagamento, você recebe login e senha para nossa plataforma exclusiva, com a lista de fornecedores e o curso liberados. Pode começar em 2 minutos." },
  { q: "Os fornecedores realmente vendem pra loja pequena?", a: "Sim. A grande maioria trabalha com pedido mínimo baixo e aceita CPF ou MEI. O Cofre é organizado justamente pra lojistas que estão começando ou querem ampliar sua base de fornecedores." },
  { q: "E se eu não gostar ou achar que não é pra mim?", a: "Você tem 7 dias de garantia incondicional. Se não fizer sentido pra sua loja, devolvemos 100% do seu investimento, sem perguntas." },
  { q: "A lista é atualizada ou fica desatualizada rápido?", a: "O Cofre passa por atualizações trimestrais, com fornecedores novos entrando e os que pararam de responder saindo da lista." },
  { q: "Terei suporte se tiver dúvidas na hora de negociar?", a: "Sim! Comunidade exclusiva no Telegram com suporte direto da nossa equipe e outros lojistas passando pelo mesmo processo de compra." },
  { q: "Preciso ter loja física ou CNPJ grande para comprar?", a: "Não. O Cofre foi montado para lojistas de todos os tamanhos — loja física, e-commerce ou perfil de vendas no Instagram." },
];

const FAQItem = ({ q, a, index }: { q: string; a: string; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="premium-card overflow-hidden"
      initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left gap-4 hover:bg-muted/30 transition-colors duration-300"
      >
        <span className="font-display font-bold text-foreground flex items-center gap-3">
          <HelpCircle className="w-4 h-4 text-accent/50 flex-shrink-0" />
          {q}
        </span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground/60 transition-transform duration-300 flex-shrink-0 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0 ml-7">
              <p className="text-foreground/70 leading-[1.8]">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => (
  <section className="py-20 md:py-32 px-4">
    <div className="max-w-3xl mx-auto">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }}
      >
        <span className="premium-badge mb-5 inline-flex">Tire suas dúvidas</span>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">
          Perguntas <span className="text-gradient-accent">Frequentes</span>
        </h2>
      </motion.div>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default FAQSection;
