import { Badge } from "@/components/ui/badge";

const skills = [
  "React", "TypeScript", "Node", "Supabase", "Postgres", "Tailwind",
  "shadcn/ui", "Testing", "CI/CD", "Accessibility", "Performance",
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Skills</h2>
        <p className="text-muted-foreground max-w-2xl mb-8">Core technologies and areas I use to deliver reliable, maintainable software.</p>
        <div className="flex flex-wrap gap-3">
          {skills.map((s) => (
            <Badge key={s} variant="secondary">{s}</Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
