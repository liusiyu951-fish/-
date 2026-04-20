import { Zap, Palette, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Days, Not Months",
    description: "Concept to launch at a pace that redefines fast. Because waiting isn't a strategy.",
  },
  {
    icon: Palette,
    title: "Obsessively Crafted",
    description: "Every detail considered. Every element refined. Design so precise, it feels inevitable.",
  },
  {
    icon: BarChart3,
    title: "Built to Convert",
    description: "Layouts informed by data. Decisions backed by performance. Results you can measure.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 px-8 lg:px-16 bg-black">
      <div className="flex flex-col items-center text-center mb-20">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
          Why Us
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          The difference is everything.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="liquid-glass rounded-2xl p-8 space-y-6 hover:translate-y-[-4px] transition-transform duration-300">
            <div className="liquid-glass-strong rounded-full w-12 h-12 flex items-center justify-center">
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-heading italic text-white">{feature.title}</h3>
            <p className="text-white/60 font-body font-light text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
