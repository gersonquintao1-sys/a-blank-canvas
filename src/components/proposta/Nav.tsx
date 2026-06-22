import { useEffect, useState } from "react";
import { navSections } from "./data";
import { Logo } from "./Logo";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 h-16 flex items-center justify-between">
        <button onClick={() => goTo("inicio")}>
          <Logo />
        </button>

        <nav className="hidden lg:flex items-center gap-6 text-xs text-white/60 tracking-wide">
          {navSections.map((s) => (
            <button
              key={s.id}
              onClick={() => goTo(s.id)}
              className="hover:text-white transition-colors"
            >
              {s.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-white text-sm border border-white/20 rounded-full px-4 py-1.5"
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-black/95 border-t border-white/10 px-6 py-4 flex flex-col gap-3">
          {navSections.map((s) => (
            <button
              key={s.id}
              onClick={() => goTo(s.id)}
              className="text-left text-white/70 text-sm py-1"
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
