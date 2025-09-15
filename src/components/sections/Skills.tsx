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
  "Data Science & AI": {
    icon: "🤖",
    skills: ["PyTorch", "Pandas", "NumPy", "Matplotlib", "LLM", "Machine Learning"]
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
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of <span className="text-brand font-semibold">modern technologies</span> and 
            interpersonal skills honed through academic excellence and practical experience.
          </p>
        </div>
        
        {/* Technical Skills */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
              <span className="text-lg">💻</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Technical Arsenal</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {Object.entries(technicalSkills).map(([category, data], index) => (
              <div 
                key={category} 
                className="glass-floating rounded-2xl p-6 hover-glow group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                    {data.icon}
                  </div>
                  <h4 className="font-bold text-lg text-foreground group-hover:text-gradient transition-all duration-300">
                    {category}
                  </h4>
                </div>
                
                <div className="space-y-3">
                  {data.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill} 
                      className="flex items-center gap-3 group/skill"
                      style={{ animationDelay: `${(index * 150) + (skillIndex * 50)}ms` }}
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-primary group-hover/skill:scale-150 transition-transform duration-300"></div>
                      <span className="text-sm text-muted-foreground group-hover/skill:text-foreground group-hover/skill:font-medium transition-all duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
              <span className="text-lg">🤝</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Interpersonal Skills</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <Badge 
                key={skill} 
                variant="outline" 
                className="text-sm px-4 py-2 rounded-full border-brand/30 text-brand bg-brand/5 hover:bg-brand hover:text-brand-foreground hover:scale-105 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
