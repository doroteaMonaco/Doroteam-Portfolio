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
    <header className="sticky top-0 z-40 w-full bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between flex-wrap gap-y-2">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <span className="text-gradient">Dorotea Monaco</span>
            <span className="sr-only">Home</span>
          </a>

          <nav className="hidden md:flex items-center gap-4 lg:gap-6" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <a href="https://github.com/doroteaMonaco" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/dorotea-monaco-0a0bba24a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRFm6%2B%2Fs5S0SKUdnILyDpcg%3D%3D" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:dorotea.monaco@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-5 w-5" />
            </a>
            <a href="#contact">
              <Button variant="gradient" size="sm">Contact Me</Button>
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-2" aria-label="Mobile">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-base py-2 px-2 rounded text-muted-foreground hover:text-foreground hover:bg-accent transition-colors" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)}>
                <Button className="w-full mt-2" variant="gradient">Contact Me</Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default SiteHeader;
