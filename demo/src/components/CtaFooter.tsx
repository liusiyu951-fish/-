import HLSVideo from "./HLSVideo";
import { motion } from "motion/react";

export default function CtaFooter() {
  return (
    <section className="relative w-full min-h-[800px] flex flex-col items-center justify-center overflow-hidden pt-32 pb-12 px-8 lg:px-16">
      {/* Background Video */}
      <HLSVideo
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlays */}
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic leading-[0.85] text-white mb-8">
          Your next website starts here.
        </h2>
        
        <p className="text-white/70 font-body font-light text-base md:text-lg mb-12 max-w-2xl">
          Book a free strategy call. See what AI-powered design can do. 
          No commitment, no pressure. Just possibilities.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6 mb-32">
          <button className="liquid-glass-strong rounded-full px-8 py-3.5 text-white font-medium hover:scale-105 transition-transform w-full sm:w-auto">
            Book a Call
          </button>
          <button className="bg-white text-black rounded-full px-8 py-3.5 font-medium hover:bg-white/90 transition-colors w-full sm:w-auto">
            View Pricing
          </button>
        </div>

        {/* Footer Bar */}
        <div className="w-full pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-xs font-body">
            © 2026 Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Contact"].map((link) => (
              <a key={link} href="#" className="text-white/40 text-xs font-body hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
