import HLSVideo from "./HLSVideo";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function EntryPoint() {
  return (
    <section className="relative w-full min-h-[900px] flex flex-col items-center justify-center overflow-hidden py-16 px-8 lg:px-16">
      {/* Background Video */}
      <HLSVideo
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlays */}
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-black to-transparent z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-black to-transparent z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic leading-[0.85] text-white mb-10">
          入梦接口
        </h2>
        
        <p className="text-white/70 font-pingfang font-light text-sm md:text-base mb-16 max-w-2xl leading-relaxed">
          写下你昨夜留下的痕迹。无论是一个模糊的背影，一段支离破碎的对话，还是那片永不落下的夕阳。
        </p>

        <div className="w-full max-w-xl group">
          <div className="liquid-glass rounded-full px-8 py-1.5 flex items-center transition-all duration-500 focus-within:scale-[1.02] focus-within:shadow-[0_0_50px_rgba(255,255,255,0.1)]">
            <input 
              type="text" 
              placeholder="输入你昨夜留下的痕迹..."
              className="flex-1 bg-transparent border-none py-4 text-white placeholder:text-white/20 focus:outline-none font-pingfang font-light text-sm"
            />
            <button className="liquid-glass-strong rounded-full p-2.5 text-white ml-2 hover:scale-110 transition-transform">
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="w-full mt-40 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-[10px] font-pingfang uppercase tracking-widest">
            © 2026 Archive of Subconscious. All rights reserved.
          </div>
          <div className="flex items-center gap-8">
            {["Privacy", "Collector's Terms", "Contact"].map((link) => (
              <a key={link} href="#" className="text-white/40 text-[10px] font-pingfang uppercase tracking-widest hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
