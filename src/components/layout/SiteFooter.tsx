import { Github, Linkedin, Mail } from "lucide-react";

export const SiteFooter = () => {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="mailto:your.email@example.com" aria-label="Email" className="text-muted-foreground hover:text-foreground transition-colors"><Mail className="h-5 w-5" /></a>
          <a href="https://github.com/" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors"><Github className="h-5 w-5" /></a>
          <a href="https://www.linkedin.com/" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
