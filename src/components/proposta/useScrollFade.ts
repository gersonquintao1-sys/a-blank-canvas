import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export function useScrollFade<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [40, 0, 0, -40]);

  return { ref, opacity, y };
}
