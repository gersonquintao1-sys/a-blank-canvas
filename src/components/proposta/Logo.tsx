import logoNaprati from "@/assets/proposta/logo-naprati.png";

interface LogoProps {
  size?: "sm" | "lg";
  className?: string;
}

export const Logo = ({ size = "sm", className = "" }: LogoProps) => {
  const heightClass = size === "lg" ? "h-9 md:h-11" : "h-6";

  return (
    <img
      src={logoNaprati}
      alt="NAPRATI.CA Digital"
      className={`${heightClass} w-auto ${className}`}
    />
  );
};
