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
    <section id="home" className="relative overflow-hidden">
      <div
        className="absolute inset-0 spotlight pointer-events-none"
        style={{ ["--spot-x" as any]: pos.x, ["--spot-y" as any]: pos.y } as CSSProperties}
      />
      <div className="container mx-auto px-4 pt-24 pb-20" onMouseMove={handleMove}>
        <div className="max-w-3xl">
          <p className="text-sm tracking-wide text-muted-foreground mb-3">AVAILABLE FOR HIRING</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Dorotea Monaco Software Engineer
          </h1>
          <div className="mt-8 flex items-center gap-3">
            <a href="#projects"><Button variant="gradient" size="lg">View Projects</Button></a>
            <a href="#contact"><Button variant="secondary" size="lg">Get in touch</Button></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
