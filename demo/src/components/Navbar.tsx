import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <span className="text-xl font-heading italic tracking-tighter text-white">STUDIO</span>
      </div>

      <div className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1 gap-1">
        {["Home", "Dream", "Diary"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="px-3 py-2 text-sm font-medium text-foreground/90 font-body hover:text-white transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      <div>
        <Button className="bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-medium hover:bg-white/90 transition-all flex items-center gap-1">
          Get Started
          <ArrowUpRight className="w-4 h-4" />
        </Button>
      </div>
    </nav>
  );
}
