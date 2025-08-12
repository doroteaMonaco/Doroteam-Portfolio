import geocontrolImg from "@/assets/projects/geocontrol.png";
import misfortuneImg from "@/assets/projects/misfortune.png";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Misfortune Game",
    description: "A game built with JavaScript, React, Node, and Express. Each card has a 'misfortune index' and the user must guess the correct index. Features a dynamic UI and engaging logic.",
  image: misfortuneImg,
    link: "https://github.com/doroteaMonaco/Misfortune-Game-Web-App-1",
    tech: ["JavaScript", "React", "Node.js", "Express"],
  },
  {
    title: "GeoControl Software",
  description: `GeoControl is a software system designed for monitoring physical and environmental variables in various contexts: from hydrogeological analyses of mountain areas to the surveillance of historical buildings, and even the control of internal parameters (such as temperature or lighting) in residential or working environments.`,
  image: geocontrolImg, 
  tech: ["TypeScript", "Docker", "MySQL", "Node.js"],
  link: "https://github.com/doroteaMonaco/GeoControl-Project-Software-Engeneering",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Projects</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">
          Here you can find a selection of projects developed both as part of my university studies and for personal interest. Each project highlights my passion for software engineering, problem solving, and modern technologies.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group rounded-xl border border-border overflow-hidden hover:shadow-xl transition-[transform,box-shadow] duration-300 will-change-transform hover:-translate-y-1"
            >
              <article>
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{p.description}</p>
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
