import { Badge } from "@/components/ui/badge";

const technicalSkills = {
  "Frontend": {
    icon: "🎨",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "Tailwind CSS"]
  },
  "Backend": {
    icon: "⚙️",
    skills: ["Node.js", "Express", "REST APIs", "MySQL", "Supabase"]
  },
  "Tools & DevOps": {
    icon: "🛠️",
    skills: ["Git", "Docker", "CI/CD", "Testing", "Jest", "Vite"]
  },
  "Languages": {
    icon: "💻",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C", "SQL", "Rust"]
  }
};

const softSkills = [
  "Problem Solving", "Team Collaboration", "Critical Thinking", "Adaptability", 
  "Communication", "Time Management", "Attention to Detail", "Continuous Learning",
  "Project Management", "Cross-functional Teamwork"
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Skills</h2>
        <p className="text-muted-foreground max-w-2xl mb-8">
          Technical expertise combined with strong interpersonal skills to deliver impactful solutions in collaborative environments.
        </p>
        
        {/* Technical Skills */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-8 text-foreground">💻 Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(technicalSkills).map(([category, data]) => (
              <div key={category} className="glass rounded-xl p-6 border border-border/50 hover:border-border transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{data.icon}</span>
                  <h4 className="font-semibold text-base text-foreground">{category}</h4>
                </div>
                <div className="space-y-2">
                  {data.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                      <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-foreground">🤝 Soft Skills</h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill) => (
              <Badge key={skill} variant="outline" className="text-sm border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100 dark:border-blue-800 dark:text-blue-300 dark:bg-blue-950 dark:hover:bg-blue-900">{skill}</Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
