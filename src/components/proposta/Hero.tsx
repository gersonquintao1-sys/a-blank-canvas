import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

export const Hero = () => {
  const scrollToNext = () => {
    document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen bg-black text-white flex items-center px-6 md:px-16 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #050505 45%, #000000 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "linear-gradient(115deg, transparent 55%, #111 56%, #000 100%)",
        }}
      />

      {/* concentric rings */}
      <div className="absolute right-[6%] top-1/2 -translate-y-1/2 hidden md:block">
        {[260, 200, 140, 80].map((size, i) => (
          <div
            key={size}
            className="absolute rounded-full border border-white/10"
            style={{
              width: size,
              height: size,
              left: -size / 2,
              top: -size / 2,
            }}
          />
        ))}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute w-16 h-16 -left-8 -top-8 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #ef4444, #7f1d1d)",
          }}
        >
          <ArrowUpRight className="text-white" size={26} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-2xl"
      >
        <div className="mb-10">
          <Logo size="lg" />
        </div>
        <h1 className="font-extrabold leading-[0.95] text-5xl sm:text-6xl md:text-7xl">
          <span className="text-white">PROPOSTA</span>
          <br />
          <span className="text-white/50">COMERCIAL</span>
        </h1>
        <button
          onClick={scrollToNext}
          className="mt-12 inline-flex items-center gap-3 rounded-full bg-white text-black font-semibold pl-6 pr-2 py-2 hover:bg-white/90 transition-colors"
        >
          Conheça
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #ef4444, #7f1d1d)" }}
          >
            <ArrowUpRight size={18} className="text-white" />
          </span>
        </button>
      </motion.div>
    </section>
  );
};
