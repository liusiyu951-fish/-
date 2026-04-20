import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Sparkles, Calendar as CalendarIcon } from "lucide-react";
import { useState, useMemo } from "react";

// Particle component for the "My Dreams" visual
const ParticlePortal = () => {
  const imageUrl = "https://raw.githubusercontent.com/liusiyu951-fish/-/main/%E5%B0%8F%E7%BE%8A.jpg";
  
  const particles = useMemo(() => 
    Array.from({ length: 600 }).map((_, i) => ({
      id: i,
      angle: Math.random() * Math.PI * 2,
      // Particles start randomly within the core or just outside
      startDistance: Math.random() * 80,
      // Expansive dissipation
      endDistance: 150 + Math.random() * 200, 
      size: Math.random() * 1.5 + 0.2,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 12,
      opacity: Math.random() * 0.5 + 0.1,
      // Turbulence effect
      driftX: (Math.random() - 0.5) * 120,
      driftY: (Math.random() - 0.5) * 120,
      rotateSpeed: (Math.random() - 0.5) * 2
    })), []);

  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
      {/* Background Deep Grain Layer */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-screen" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} 
      />

      {/* The Dissolving Subject - No more clear outline */}
      <motion.div 
        animate={{ 
          scale: [1, 1.01, 1],
          opacity: [0.7, 0.85, 0.7]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="relative w-64 h-64 z-10 flex items-center justify-center pointer-events-none"
      >
        {/* Extreme Edge Dissolve - Using multiple layered masks */}
        <div 
          className="absolute inset-0 scale-125 blur-[1px]"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: "radial-gradient(circle at center, black 0%, rgba(0,0,0,0.8) 20%, transparent 55%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 0%, rgba(0,0,0,0.8) 20%, transparent 55%)",
            opacity: 0.6
          }}
        />
        
        {/* Core Detail - Very soft */}
        <div 
          className="relative w-48 h-48 rounded-full overflow-hidden"
          style={{
            maskImage: "radial-gradient(circle, black 0%, transparent 65%)",
            WebkitMaskImage: "radial-gradient(circle, black 0%, transparent 65%)",
          }}
        >
          <img 
            src={imageUrl} 
            alt="Dream Subject" 
            className="w-full h-full object-cover scale-110 opacity-70 contrast-[1.1]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Ambient particulate glow */}
        <div className="absolute inset-0 bg-white/5 rounded-full blur-[60px]" />
      </motion.div>

      {/* Dense Sand Dissipation System */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        {particles.map((p) => {
          const startX = Math.cos(p.angle) * p.startDistance;
          const startY = Math.sin(p.angle) * p.startDistance;
          const endX = Math.cos(p.angle) * p.endDistance + p.driftX;
          const endY = Math.sin(p.angle) * p.endDistance + p.driftY;

          return (
            <motion.div
              key={p.id}
              initial={{ x: "50%", y: "50%", opacity: 0, scale: 0 }}
              animate={{ 
                x: [`calc(50% + ${startX}px)`, `calc(50% + ${endX}px)`], 
                y: [`calc(50% + ${startY}px)`, `calc(50% + ${endY}px)`], 
                opacity: [0, p.opacity, 0],
                scale: [0.5, 1.2, 0.2],
                rotate: [0, 360 * p.rotateSpeed]
              }}
              transition={{ 
                duration: p.duration, 
                repeat: Infinity, 
                delay: p.delay, 
                ease: "easeOut" 
              }}
              className="absolute bg-white/40 shadow-[0_0_2px_rgba(255,255,255,0.5)]"
              style={{ 
                width: p.size, 
                height: p.size,
                borderRadius: Math.random() > 0.5 ? "50%" : "2px" // Mix of round and grain shapes
              }}
            />
          );
        })}
      </div>
      
      {/* Ethereal Aura - Frayed secondary edges */}
      <div 
        className="absolute w-[400px] h-[400px] opacity-[0.03] rounded-full mix-blend-overlay"
        style={{
          background: "radial-gradient(circle, white 0%, transparent 70%)",
          filter: "url(#n)" // Reusing the noise filter metaphorically via CSS
        }}
      />
    </div>
  );
};

// Mini Calendar component for "My Diary"
const MiniCalendar = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const activeDays = [3, 4, 12, 18, 19, 27]; // Mock active entries

  return (
    <div className="bg-black/40 rounded-3xl p-6 border border-white/5 w-full max-w-[280px]">
      <div className="flex items-center justify-between mb-6">
        <div className="text-white font-heading italic text-lg leading-none">December 2025</div>
        <div className="flex gap-4">
          <ChevronLeft className="w-4 h-4 text-white/40 cursor-not-allowed" />
          <ChevronRight className="w-4 h-4 text-white/40 cursor-not-allowed" />
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-2 mb-2">
        {["S", "M", "T", "W", "T", "F", "S"].map(d => (
          <div key={d} className="text-[10px] text-white/20 font-medium text-center">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-3 gap-x-2">
        {days.map(d => {
          const isActive = activeDays.includes(d);
          return (
            <div key={d} className="flex flex-col items-center gap-1">
              <span className={`text-xs font-light ${d === 4 ? 'text-white font-medium' : 'text-white/40'}`}>
                {d}
              </span>
              {isActive && (
                <motion.div 
                  layoutId={`dot-${d}`}
                  className="w-1 h-1 rounded-full bg-white shadow-[0_0_5px_white]" 
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function Archive() {
  return (
    <section className="py-16 px-8 lg:px-16 bg-black relative">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-[10px] tracking-[0.2em] font-medium text-white font-body mb-4 uppercase">
          Private Archive
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          私人档案馆
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* My Dreams Block */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="liquid-glass rounded-[40px] p-12 flex flex-col items-center justify-between min-h-[500px] cursor-pointer group relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-white/40 text-[11px] tracking-[0.15em] uppercase font-pingfang mb-4">
              <Sparkles className="w-3 h-3" />
              Collections
            </div>
            <h3 className="text-4xl lg:text-5xl font-heading italic text-white mb-2">我的梦境</h3>
            <p className="text-white/40 font-pingfang font-light text-xs tracking-wide">
              Fragments of subconscious imagery
            </p>
          </div>

          <ParticlePortal />

          <div className="relative z-10 mt-10">
            <span className="text-[10px] text-white/30 font-pingfang italic border-b border-white/10 pb-1">
              查看全部 42 个显现
            </span>
          </div>
        </motion.div>

        {/* My Diary Block */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="liquid-glass rounded-[40px] p-12 flex flex-col items-center justify-between min-h-[500px] cursor-pointer group relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-white/40 text-[11px] tracking-[0.15em] uppercase font-pingfang mb-4">
              <CalendarIcon className="w-3 h-3" />
              Chronicle
            </div>
            <h3 className="text-4xl lg:text-5xl font-heading italic text-white mb-2">我的日记</h3>
            <p className="text-white/40 font-pingfang font-light text-xs tracking-wide">
              Timeline of ineffable memories
            </p>
          </div>

          <MiniCalendar />

          <div className="relative z-10 mt-10 uppercase tracking-[0.15em] text-[10px] text-white/60 font-body flex items-center gap-2">
            进入日历 <ChevronRight className="w-3 h-3" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
