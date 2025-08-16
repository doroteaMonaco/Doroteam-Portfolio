import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export const SiteFooter = () => {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <p className="text-sm text-muted-foreground w-full md:w-auto">© {new Date().getFullYear()} Dorotea Monaco. All rights reserved.</p>
        <div className="flex items-center justify-center md:justify-end gap-4 w-full md:w-auto">
          <a href="mailto:dorotea.monaco@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-foreground transition-colors"><Mail className="h-5 w-5" /></a>
          <a href="https://github.com/doroteaMonaco" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors"><Github className="h-5 w-5" /></a>
          <a href="https://www.linkedin.com/in/dorotea-monaco-0a0bba24a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRFm6%2B%2Fs5S0SKUdnILyDpcg%3D%3D" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin className="h-5 w-5" /></a>
          <a href="https://wa.me/+393348504369" aria-label="WhatsApp" className="text-muted-foreground hover:text-foreground transition-colors"><MessageCircle className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
