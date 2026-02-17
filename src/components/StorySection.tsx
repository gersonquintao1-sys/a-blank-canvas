import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { CTAButton } from "./HeroSection";
import storyMirror from "@/assets/story-mirror.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const bulletPoints = [
  { title: "Destravamento Rápido", desc: 'Abre o "cadeado hormonal" do seu corpo em apenas 72 horas;' },
  { title: "Resultados Imediatos", desc: "Um método validado que já permitiu que mais de 2.897 mães brasileiras eliminassem 5kg logo na primeira semana;" },
  { title: "Sem Passar Fome", desc: "Você continua comendo coisas gostosas que te deixam satisfeita, sem dietas restritivas;" },
  { title: "Ideal para Rotinas Agitadas", desc: "Funciona especialmente com mães ocupadas, transformando sua rotina maluca no combustível perfeito para o derretimento de gordura 24 horas por dia." },
];

const StorySection = () => (
  <section className="py-20 md:py-32 px-4">
    <div className="max-w-3xl mx-auto">
      <motion.h2
        className="font-display text-2xl md:text-4xl lg:text-[2.5rem] font-bold text-center leading-tight text-foreground mb-14"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} custom={0}
      >
        Se você se reconheceu nessa cena, precisa saber:{" "}
        <span className="text-gradient-accent">O problema nunca foi sua falta de força de vontade.</span>
      </motion.h2>

      {/* Illustrative image */}
      <motion.div
        className="my-10 max-w-md mx-auto"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} custom={0.5}
      >
        <div className="premium-card overflow-hidden rounded-2xl p-0">
          <img
            src={storyMirror}
            alt="Mulher refletindo sobre sua jornada"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </motion.div>

      <motion.div
        className="premium-card p-8 md:p-12 space-y-7 text-foreground/85 text-lg leading-[1.8]"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} custom={1}
      >
        <p>
          Era 6h45 da manhã de uma segunda-feira qualquer. Fernanda entrou no banheiro evitando o reflexo no espelho, como sempre fazia há meses. Mas algo a fez parar. Era aquele vestido vermelho pendurado atrás da porta — o mesmo que usou no aniversário de casamento há 5 anos, quando ainda se sentia <em className="text-foreground">mulher</em>, não apenas <em className="text-foreground">"a mãe do Pedro e da Sofia"</em>.
        </p>
        <blockquote className="border-l-4 border-accent/40 pl-6 py-2">
          <p className="text-accent font-semibold italic text-xl leading-relaxed">
            "Quando foi que eu desisti de mim?", pensou, enquanto lágrimas escorreram pelo rosto inchado de mais uma noite mal dormida.
          </p>
        </blockquote>
        <p>
          Essa descoberta está mudando a vida de milhares de mães brasileiras que, assim como Fernanda, sentiam que estavam lutando uma batalha perdida.
        </p>
      </motion.div>

      <div className="mt-20 md:mt-28">
        <motion.div
          className="text-center mb-12"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} custom={0}
        >
          <span className="premium-badge mb-5 inline-flex">O mecanismo</span>
          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
            O "Cadeado Hormonal"
          </h3>
          <p className="text-muted-foreground text-lg mt-2">
            Por que você pode viver de alface e a barriga não muda
          </p>
        </motion.div>

        <motion.p
          className="text-lg text-foreground/80 leading-[1.8] text-center max-w-2xl mx-auto mb-10"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} custom={1}
        >
          Após anos estudando o metabolismo feminino pós-maternidade, descobrimos que depois da gravidez, seu corpo desenvolve um excesso de cortisol que literalmente <strong className="text-foreground">tranca sua gordura em um cofre e joga a chave fora</strong>. É por isso que você pode se matar na academia, mas os resultados simplesmente não aparecem.
        </motion.p>

        <motion.p
          className="text-center text-xl font-bold text-primary mb-14"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} custom={2}
        >
          Mas existe uma solução científica para isso.
        </motion.p>
      </div>

      <motion.div
        className="premium-card p-8 md:p-12 section-primary-subtle"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} custom={0}
      >
        <h4 className="font-display text-xl md:text-2xl font-bold text-foreground mb-8 leading-tight">
          Chamamos isso de <span className="text-gradient-accent">Cetose Bio-Idêntica Feminina</span>.
          <span className="block text-muted-foreground text-lg font-body font-normal mt-2">
            Veja o que essa "Chave Mestra Biológica" é capaz de fazer:
          </span>
        </h4>
        <div className="space-y-5">
          {bulletPoints.map((item, i) => (
            <motion.div
              key={item.title}
              className="flex gap-4 items-start"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.5}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mt-0.5">
                <Flame className="w-5 h-5 text-accent" />
              </div>
              <span className="text-foreground/85 text-lg leading-relaxed">
                <strong className="text-foreground">{item.title}:</strong> {item.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA at section bottom */}
      <motion.div
        className="mt-14 text-center"
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
      >
        <CTAButton>QUERO DESTRAVAR MEU METABOLISMO</CTAButton>
      </motion.div>
    </div>
  </section>
);

export default StorySection;
