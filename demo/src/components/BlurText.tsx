import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  gap?: string;
}

export default function BlurText({
  text,
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "bottom",
  gap = "0.2em",
}: BlurTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const elements = animateBy === "words" ? text.split(" ") : text.split("");

  return (
    <div ref={ref} className={`flex flex-wrap ${className}`}>
      {elements.map((element, index) => (
        <motion.span
          key={index}
          initial={{ filter: "blur(10px)", opacity: 0, y: direction === "bottom" ? 50 : -50 }}
          animate={
            isInView
              ? { filter: "blur(0px)", opacity: 1, y: 0 }
              : { filter: "blur(10px)", opacity: 0, y: direction === "bottom" ? 50 : -50 }
          }
          transition={{
            duration: 0.35,
            delay: (index * delay) / 1000,
            ease: "easeOut",
          }}
          className="inline-block"
          style={{ marginRight: gap }}
        >
          {element === " " ? "\u00A0" : element}
        </motion.span>
      ))}
    </div>
  );
}
