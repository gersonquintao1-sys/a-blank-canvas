interface LogoProps {
  size?: "sm" | "lg";
  className?: string;
}

export const Logo = ({ size = "sm", className = "" }: LogoProps) => {
  const titleClass =
    size === "lg" ? "text-lg md:text-xl" : "text-sm";
  const subClass = size === "lg" ? "text-[10px]" : "text-[8px]";

  return (
    <div className={className}>
      <p
        className={`${titleClass} font-bold tracking-wide`}
        style={{
          background: "linear-gradient(90deg, #fff 0%, #d9d9d9 60%, #9c9c9c 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        NAPRATI.CA
      </p>
      <p className={`${subClass} tracking-[0.3em] text-white/40 italic -mt-1`}>
        DIGITAL
      </p>
    </div>
  );
};
