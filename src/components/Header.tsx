import { Leaf } from "lucide-react";

const Header = () => (
  <header className="w-full py-5 flex justify-center items-center gap-2.5 glass-surface sticky top-0 z-50">
    <div className="flex items-center gap-2.5">
      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
        <Leaf className="w-4.5 h-4.5 text-primary" />
      </div>
      <span className="font-display text-xl font-bold tracking-tight">
        Ceto<span className="text-accent">leve</span>™
      </span>
    </div>
  </header>
);

export default Header;
