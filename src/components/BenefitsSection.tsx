import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { CTAButton } from "./HeroSection";
import happyMom from "@/assets/happy-mom.jpg";

const benefits = [
"Eliminar 5kg em apenas 7 dias sem pisar numa academia ou contar uma caloria sequer",
'Acabar com a "barriga de grávida" permanente que sobrou da gestação e nunca mais saiu',
"Ter energia de solteira com rotina de mãe - disposição real para brincar com seus filhos sem sentir que seu corpo é um fardo",
'Reconquistar o olhar de desejo do marido sendo vista novamente como mulher desejável, não apenas como "mãe dos filhos dele"',
"Vestir aquele vestido guardado no armário que você não usa desde antes de ser mãe, provando que é possível voltar",
'Eliminar a compulsão noturna definitivamente transformando sua "fraqueza das 22h" em aliada do emagrecimento',
"Economizar tempo e dinheiro com um método que funciona em 15 minutos por dia, sem ingredientes caros ou complicados",
"Ter paz com a comida para sempre acabando com o ciclo de culpa, compulsão e autossabotagem que te prende há anos"];


const BenefitsSection = () =>
<section className="py-20 md:py-32 px-4 section-primary-subtle">
    <div className="max-w-3xl mx-auto">
      <motion.div
      className="text-center mb-14"
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }}>

        <span className="premium-badge mb-5 inline-flex">Sua transformação</span>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">
          Ao adquirir hoje, <span className="text-gradient-accent">você vai</span>
        </h2>
      </motion.div>

      {/* Illustrative image */}
      <motion.div
      className="mb-12 premium-card overflow-hidden rounded-2xl p-0"
      initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}>

        





      </motion.div>

      <div className="space-y-3.5">
        {benefits.map((b, i) =>
      <motion.div
        key={i}
        className="premium-card-hover flex gap-5 items-start p-6"
        initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>

            <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-success/10 flex items-center justify-center mt-0.5 border border-success/15">
              <Check className="w-4 h-4 text-success" />
            </div>
            <p className="text-foreground/80 text-lg leading-[1.7]">{b}</p>
          </motion.div>
      )}
      </div>

      {/* CTA at section bottom */}
      <motion.div
      className="mt-14 text-center"
      initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>

        <CTAButton>QUERO TRANSFORMAR MINHA VIDA</CTAButton>
      </motion.div>
    </div>
  </section>;


export default BenefitsSection;