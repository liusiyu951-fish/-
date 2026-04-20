import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const dreams = [
  {
    image: "https://raw.githubusercontent.com/liusiyu951-fish/-/main/%E8%9D%B4%E8%9D%B6%E6%A2%A6.png",
    text: "在温润的珠光中，东方的静物正在低语。",
    tag: "Still Life",
  },
  {
    image: "https://raw.githubusercontent.com/liusiyu951-fish/-/main/Image%201.png",
    text: "被飓风惊扰的乐章，在薄荷色的房间里永恒漂浮。",
    tag: "Music Room",
  },
  {
    image: "https://raw.githubusercontent.com/liusiyu951-fish/-/main/Image%202.png",
    text: "海面上的野餐，蚌壳中藏着咸涩的时间碎片。",
    tag: "Surrealism",
  },
  {
    image: "https://raw.githubusercontent.com/liusiyu951-fish/-/main/Image%203.png",
    text: "破碎的神像与粉色云烟，是意识剥落后的余温。",
    tag: "Statue",
  },
  {
    image: "https://raw.githubusercontent.com/liusiyu951-fish/-/main/Image%204.png",
    text: "在老旧的沙龙，白兔掠过那些从未被唤醒的梦。",
    tag: "Archive",
  },
  {
    image: "https://raw.githubusercontent.com/liusiyu951-fish/-/main/Image%2010%20(1).png",
    text: "生活如盐粒苦咸，我会等待蜂蜜般的生活到来",
    tag: "Aurora",
  }
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = dreams.length;
  const stepAngle = 360 / totalItems;
  const radius = 550; // Distance of cards from center
  
  // Motion values for smooth rotation
  const rotation = useMotionValue(0);
  const rotationSpring = useSpring(rotation, { stiffness: 60, damping: 20 });
  const dragX = useMotionValue(0);

  // Sync activeIndex to the nearest multiple of stepAngle
  useEffect(() => {
    rotation.set(-activeIndex * stepAngle);
  }, [activeIndex, rotation, stepAngle]);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % totalItems);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);

  return (
    <section className="py-16 px-8 lg:px-16 bg-black overflow-hidden relative min-h-[850px] flex flex-col items-center select-none">
      <div className="flex flex-col items-center text-center mb-12 relative z-10 p-4">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-[10px] tracking-[0.2em] font-medium text-white font-body mb-4 uppercase">
          Museum of Manifestation
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9]">
          浮光画廊
        </h2>
      </div>

      {/* 3D Carousel Stage */}
      <div className="relative w-full max-w-6xl h-[600px] flex items-center justify-center [perspective:2000px]">
        {/* Continuous Drag Surface */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDrag={(_, info) => {
            // Apply drag directly to rotation for real-time feedback
            // 5px drag = 1 degree rotation
            const currentRotation = -activeIndex * stepAngle + (info.offset.x / 5);
            rotation.set(currentRotation);
          }}
          onDragEnd={(_, info) => {
            const dragThreshold = 100;
            if (info.offset.x > dragThreshold) {
              handlePrev();
            } else if (info.offset.x < -dragThreshold) {
              handleNext();
            } else {
              // Snap back to current
              rotation.set(-activeIndex * stepAngle);
            }
          }}
          className="absolute inset-0 z-30 cursor-grab active:cursor-grabbing"
        />

        <motion.div 
          style={{ rotateY: rotationSpring }}
          className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d]"
        >
          {dreams.map((dream, index) => {
            const cardAngle = index * stepAngle;
            
            return (
              <Card 
                key={index} 
                dream={dream} 
                angle={cardAngle} 
                radius={radius}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            );
          })}
        </motion.div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-12 mt-4 relative z-20">
        <button 
          onClick={handlePrev}
          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all liquid-glass"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {dreams.map((_, i) => (
            <div 
              key={i} 
              className={`h-1 transition-all duration-500 rounded-full ${i === activeIndex ? "w-8 bg-white" : "w-2 bg-white/10"}`} 
            />
          ))}
        </div>
        <button 
          onClick={handleNext}
          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all liquid-glass"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 bg-radial-gradient from-white/[0.01] to-transparent blur-[150px]" />
      </div>
    </section>
  );
}

const Card: React.FC<{ 
  dream: { image: string; text: string; tag: string }; 
  angle: number; 
  radius: number;
  isActive: boolean;
  onClick: () => void;
}> = ({ dream, angle, radius, isActive, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      style={{
        transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
        transformStyle: "preserve-3d",
      }}
      className="absolute w-[300px] md:w-[480px] aspect-[16/10] cursor-pointer group"
    >
      <div 
        className="relative w-full h-full overflow-hidden rounded-[24px] bg-white/5 transition-all duration-700"
        style={{
          filter: isActive ? "none" : "blur(10px) saturate(1.8) brightness(0.6)",
          scale: isActive ? 1.2 : 0.85,
        }}
      >
        <img
          src={dream.image}
          alt={dream.text}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        
        {/* Blur edges for particle feel */}
        {!isActive && (
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/80 pointer-events-none" />
        )}

        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute inset-x-0 bottom-0 p-8 pt-24 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col gap-2 z-20"
            >
              <span className="text-[10px] text-white/50 font-pingfang tracking-[0.3em] uppercase">
                #{dream.tag}
              </span>
              <p className="text-sm md:text-base text-white font-pingfang font-light leading-relaxed max-w-sm drop-shadow-lg">
                {dream.text}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
