import { useState, useCallback, type CSSProperties } from "react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const [pos, setPos] = useState({ x: "50%", y: "50%" });

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x: `${x}%`, y: `${y}%` });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      <div className="floating-orb w-96 h-96 top-20 -left-20 opacity-60"></div>
      <div className="floating-orb w-64 h-64 bottom-20 -right-20 opacity-40" style={{ animationDelay: '3s' }}></div>
      
      <div
        className="absolute inset-0 spotlight pointer-events-none"
        style={{ ["--spot-x" as any]: pos.x, ["--spot-y" as any]: pos.y } as CSSProperties}
      />
      
      <div className="container mx-auto px-4 py-20 relative z-10" onMouseMove={handleMove}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-floating mb-6">
              <div className="w-2 h-2 rounded-full bg-brand animate-pulse-glow"></div>
              <span className="text-sm font-medium text-glow">Available for Hiring</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold leading-tight mb-6">
              <span className="block">Dorotea Monaco</span>
              <span className="text-gradient block">Software Engineer</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-foreground mb-4 opacity-90">
              React • TypeScript • Node.js • Politecnico di Torino
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Computer Engineering student building <span className="text-gradient font-semibold">next-generation web applications</span>. 
              Specialized in modern tech stack with hands-on experience in scalable architecture and cloud solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
              <a href="#projects" className="w-full sm:w-auto">
                <Button variant="gradient" size="lg" className="w-full group">
                  <span>View My Work</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full">Let's Connect</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
