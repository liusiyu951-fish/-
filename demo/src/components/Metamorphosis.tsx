import HLSVideo from "./HLSVideo";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Metamorphosis() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.45], [1, 1, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0.45, 0.6, 0.9], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0.1, 0.45, 0.6], [0.8, 0.95, 1]);

  return (
    <section ref={containerRef} className="relative w-full h-[300vh] bg-black">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <HLSVideo
            src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
            className="w-full h-full object-cover opacity-30"
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 w-full max-w-5xl px-8 flex flex-col items-center">
          <motion.div style={{ scale }} className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden liquid-glass">
            {/* The Text Fragment */}
            <motion.div 
              style={{ opacity: textOpacity }}
              className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center"
            >
              <span className="liquid-glass rounded-full px-3 py-1 text-[10px] tracking-widest text-white/50 mb-6 uppercase">
                Fragment 0422
              </span>
              <p className="text-xl md:text-2xl font-pingfang font-light text-white/90 leading-loose italic max-w-2xl">
                “分不清是烛火还是什么，只记得雾里的花和泛着柔光的壳，<br />
                揉进了晃悠悠的光里”
              </p>
            </motion.div>

            {/* The Visual Metamorphosis */}
            <motion.div 
              style={{ opacity: imageOpacity }}
              className="absolute inset-0"
            >
              <img 
                src="https://raw.githubusercontent.com/liusiyu951-fish/-/main/20260418_2228_Image%20Generation_simple_compose_01kpgfvmv0fhnb838jvhjh31xz.png" 
                alt="Subconscious Manifestation" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
