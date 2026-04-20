import HLSVideo from "./HLSVideo";
import { motion } from "motion/react";

export default function StartSection() {
  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden py-24">
      {/* Background Video */}
      <HLSVideo
        src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlays */}
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl px-6">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-8">
          How It Works
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] text-white mb-6">
          You dream it. We ship it.
        </h2>
        
        <p className="text-white/60 font-body font-light text-sm md:text-base mb-10 max-w-xl">
          Share your vision. Our AI handles the rest—wireframes, design, code, launch. 
          All in days, not quarters.
        </p>

        <button className="liquid-glass-strong rounded-full px-8 py-3 text-white font-medium hover:scale-105 transition-transform">
          Get Started
        </button>
      </div>
    </section>
  );
}
