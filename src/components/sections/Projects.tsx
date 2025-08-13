import geocontrolImg from "@/assets/projects/geocontrol.png";
import misfortuneImg from "@/assets/projects/misfortune.png";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Misfortune Game",
    description: "Interactive web game with dynamic scoring system. Features real-time card evaluation, responsive UI, and engaging game mechanics. Built with full-stack architecture supporting multiple concurrent players.",
    metrics: "🎯 Responsive design • 🚀 Real-time updates • 🎮 Interactive gameplay",
    image: misfortuneImg,
    link: "https://github.com/doroteaMonaco/Misfortune-Game-Web-App-1",
    tech: ["JavaScript", "React", "Node.js", "Express"],
  },
  {
    title: "GeoControl Software",
    description: "Enterprise monitoring system for environmental data collection. Handles real-time sensor data processing, automated alerts, and comprehensive reporting for critical infrastructure monitoring.",
    metrics: "📊 Real-time monitoring • 🔔 Automated alerts • 🏗️ Scalable architecture",
    image: geocontrolImg, 
    tech: ["TypeScript", "Docker", "MySQL", "Node.js"],
    link: "https://github.com/doroteaMonaco/GeoControl-Project-Software-Engeneering",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Projects</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">
          Here you can find a selection of projects developed both as part of my university studies and for personal interest. Each project highlights my passion for software engineering, problem solving, and modern technologies.
        </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group rounded-xl border border-border overflow-hidden hover:shadow-xl transition-[transform,box-shadow] duration-300 will-change-transform hover:-translate-y-1 min-h-[340px]"
            >
              <article>
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3">{p.description}</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mb-4 font-medium">{p.metrics}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <Badge key={t} variant="secondary">{t}</Badge>
                    ))}
                  </div>
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
