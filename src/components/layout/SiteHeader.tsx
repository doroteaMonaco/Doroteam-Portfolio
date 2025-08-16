import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const navItems = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-floating border-b border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between flex-wrap gap-y-2">
          <a href="#home" className="flex items-center gap-3 font-bold group">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="text-gradient text-xl hidden sm:block">Dorotea Monaco</span>
            <span className="sr-only">Home</span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {navItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className="text-sm font-medium text-muted-foreground hover:text-gradient transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a 
                href="https://github.com/doroteaMonaco" 
                aria-label="GitHub" 
                className="w-10 h-10 rounded-lg bg-background/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-brand/50 hover:bg-brand/10 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/dorotea-monaco-0a0bba24a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRFm6%2B%2Fs5S0SKUdnILyDpcg%3D%3D" 
                aria-label="LinkedIn" 
                className="w-10 h-10 rounded-lg bg-background/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-brand/50 hover:bg-brand/10 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:dorotea.monaco@gmail.com" 
                aria-label="Email" 
                className="w-10 h-10 rounded-lg bg-background/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-brand/50 hover:bg-brand/10 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            
            <a href="#contact">
              <Button variant="gradient" size="sm" className="ml-2">
                <span className="hidden lg:inline">💼 Hire Me</span>
                <span className="lg:hidden">Hire</span>
              </Button>
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-xl hover:bg-accent/50 focus:outline-none focus:ring-2 focus:ring-brand transition-all duration-300"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {open && (
          <div className="md:hidden pb-6 border-t border-border/20 mt-4 pt-4">
            <nav className="flex flex-col gap-3" aria-label="Mobile">
              {navItems.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  className="text-base py-3 px-4 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-300 font-medium" 
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              <div className="flex items-center justify-center gap-3 py-4">
                <a href="https://github.com/doroteaMonaco" aria-label="GitHub" className="w-10 h-10 rounded-lg bg-background/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-brand/50 transition-all duration-300">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/dorotea-monaco-0a0bba24a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRFm6%2B%2Fs5S0SKUdnILyDpcg%3D%3D" aria-label="LinkedIn" className="w-10 h-10 rounded-lg bg-background/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-brand/50 transition-all duration-300">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:dorotea.monaco@gmail.com" aria-label="Email" className="w-10 h-10 rounded-lg bg-background/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-brand/50 transition-all duration-300">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
              
              <a href="#contact" onClick={() => setOpen(false)}>
                <Button className="w-full" variant="gradient">💼 Hire Me</Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default SiteHeader;
