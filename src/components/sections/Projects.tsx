import geocontrolImg from "@/assets/projects/geocontrol.png";
import misfortuneImg from "@/assets/projects/misfortune.png";
import ruggineImg from "@/assets/projects/ruggine.png";
import { Badge } from "@/components/ui/badge";
import { useLanguageContext } from "@/contexts/TranslationContext";
import { Github } from "lucide-react";

export const Projects = () => {
  const { t } = useLanguageContext();

  const projects = [
    {
      title: t('projects.misfortune.title'),
      description: t('projects.misfortune.description'),
      metrics: "🎯 Responsive design • 🚀 Real-time updates • 🎮 Interactive gameplay",
      image: misfortuneImg,
      link: "https://github.com/doroteaMonaco/Misfortune-Game-Web-App-1",
      tech: ["JavaScript", "React", "Node.js", "Express"],
    },
    {
      title: t('projects.geocontrol.title'),
      description: t('projects.geocontrol.description'),
      metrics: "📊 Real-time monitoring • 🔔 Automated alerts • 🏗️ Scalable architecture",
      image: geocontrolImg, 
      tech: ["TypeScript", "Docker", "MySQL", "Node.js"],
      link: "https://github.com/doroteaMonaco/GeoControl-Project-Software-Engeneering",
    },
    {
      title: t('projects.ruggine.title'),
      description: t('projects.ruggine.description'),
      metrics: "💬 Group & private chats • 👥 Friend requests • 🦀 Native Rust performance",
      image: ruggineImg,
      tech: ["Rust", "Iced", "PostgreSQL", "Native GUI"],
      link: "https://github.com/doroteaMonaco/Ruggine",
      contributors: [
        {
          name: "Luigi Gonnella",
          github: "https://github.com/LuigiGonnella"
        }
      ]
    },
  ];
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-brand/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">{t('projects.title')}</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('projects.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((p, index) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <article className="glass-floating rounded-2xl overflow-hidden hover-glow magnetic-hover h-full">
                <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand/20 to-brand-secondary/20 relative">
                  <img 
                    src={p.image} 
                    alt={`${p.title} screenshot`} 
                    loading="lazy" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">
                    {p.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                    {p.description}
                  </p>
                  <p className="text-xs sm:text-sm text-brand font-semibold mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
                    {p.metrics}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <Badge 
                        key={t} 
                        variant="secondary" 
                        className="hover:bg-brand hover:text-brand-foreground transition-colors duration-300"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                  
                  {p.contributors && (
                    <div className="border-t border-border/50 pt-4">
                      <p className="text-xs text-muted-foreground mb-2 font-medium">Contributors:</p>
                      <div className="flex flex-wrap gap-2">
                        {p.contributors.map((contributor, idx) => (
                          <a
                            key={idx}
                            href={contributor.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted/50 hover:bg-brand/10 hover:text-brand transition-colors duration-300 text-xs"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="w-3 h-3" />
                            <span>{contributor.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
