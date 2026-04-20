import { motion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";
import BlurText from "./BlurText";

export default function Hero() {
  return (
    <section className="relative overflow-visible h-screen min-h-[800px] flex flex-col items-center text-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://raw.githubusercontent.com/liusiyu951-fish/-/main/4%E6%9C%8820%E6%97%A5.mp4" type="video/mp4" />
      </video>

      {/* Overlays for Readability & Transition */}
      {/* 1. Global Readability Mask (Semi-transparent black) */}
      <div className="absolute inset-0 bg-black/30 z-[1] pointer-events-none" />
      
      {/* 2. Bottom Transition Overflow (Gradient fade to next section) */}
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-black via-black/40 to-transparent z-[2] pointer-events-none" />

      {/* Top Spacer - Adjusted to move content up into the 'green box' area */}
      <div className="h-[20vh] min-h-[160px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl px-6">
        <div className="flex flex-col items-center mb-6 text-center">
          <BlurText
            text="梦的痕迹"
            animateBy="letters"
            className="text-6xl md:text-7xl lg:text-[6.5rem] font-heading italic text-foreground leading-[1] tracking-tight justify-center"
            delay={80}
            gap="0.05em"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <BlurText
              text="我们为你显现"
              animateBy="letters"
              className="text-6xl md:text-7xl lg:text-[6.5rem] font-heading italic text-foreground leading-[1] tracking-tight justify-center"
              delay={80}
              gap="0.05em"
            />
          </motion.div>
        </div>

        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-xs md:text-sm text-white/80 font-pingfang font-light leading-relaxed max-w-2xl mb-8 tracking-wide"
        >
          提取潜意识的碎片，依托前沿 AI 视觉算法，将无法言说的记忆、日记与书摘，渲染为永恒的数字巨物
        </motion.p>

        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center gap-6"
        >
          <button className="liquid-glass-strong rounded-full px-5 py-2.5 flex items-center gap-2 text-white font-medium hover:scale-105 transition-transform">
            Get Started
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 text-white font-medium hover:text-white/80 transition-colors">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Play className="w-4 h-4 fill-white" />
            </div>
            Watch the Film
          </button>
        </motion.div>
      </div>

    </section>
  );
}
