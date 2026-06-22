import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionShellProps {
  id: string;
  eyebrow: string;
  index: number;
  children: ReactNode;
  className?: string;
}

export const SectionShell = ({ id, eyebrow, index, children, className = "" }: SectionShellProps) => {
  return (
    <section
      id={id}
      className={`relative w-full bg-black text-white px-6 md:px-16 py-24 md:py-32 overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between text-[11px] md:text-xs tracking-[0.25em] uppercase text-white/40 mb-16"
        >
          <span>{eyebrow}</span>
          <span className="hidden sm:inline">Proposta Comercial</span>
        </motion.div>
        {children}
      </div>
      <div className="absolute bottom-6 right-6 text-xs text-white/20 font-semibold">
        {String(index).padStart(2, "0")}
      </div>
    </section>
  );
};

export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};
