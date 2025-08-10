import analyticsImg from "@/assets/projects/project-analytics.jpg";
import kanbanImg from "@/assets/projects/project-kanban.jpg";
import integrationsImg from "@/assets/projects/project-integrations.jpg";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Analytics Dashboard",
    description: "Full-stack metrics platform with real-time charts and role-based access.",
    image: analyticsImg,
    tech: ["React", "TypeScript", "Recharts"],
  },
  {
    title: "Kanban Manager",
    description: "Drag-and-drop task manager with persistence and offline support.",
    image: kanbanImg,
    tech: ["React", "Zustand", "Tailwind"],
  },
  {
    title: "API Integrations Hub",
    description: "Unified interface for multiple third-party services and webhooks.",
    image: integrationsImg,
    tech: ["Node", "Supabase", "Webhooks"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Projects</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">A selection of projects demonstrating product thinking, code quality, and UI craft.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-border overflow-hidden hover:shadow-xl transition-[transform,box-shadow] duration-300 will-change-transform hover:-translate-y-1">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
