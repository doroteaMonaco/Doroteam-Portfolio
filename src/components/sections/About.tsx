export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-brand-tertiary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">About Me</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about creating <span className="text-brand font-semibold">innovative solutions</span> through 
              technology and continuous learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Story */}
            <div className="space-y-6">
              <div className="glass-floating rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-gradient">My Journey</h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  I'm <span className="text-foreground font-semibold">Dorotea Monaco</span>, currently pursuing a Master's degree in Computer Engineering at 
                  <span className="text-brand font-semibold"> Politecnico di Torino</span>, where I specialize in cutting-edge technologies including 
                  software engineering, web applications, information systems, and data science.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  My academic foundation was built through a Bachelor's degree in Computer Engineering, where I developed expertise in 
                  programming, databases, and system architectures. I gained real-world experience through an internship at the 
                  <span className="text-brand font-semibold"> Municipality of Turin</span>, focusing on digital transformation and modern web technologies.
                </p>
                
                <div className="space-y-3">
                  {[
                    "Multi-language expertise: C, Python, Java, JavaScript, TypeScript, Rust",
                    "Advanced database design and system architecture knowledge", 
                    "Excellent communication and cross-functional team collaboration",
                    "Strategic problem-solving with efficient time management"
                  ].map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="glass-card rounded-2xl p-6 text-center">
                <p className="text-base text-muted-foreground leading-relaxed">
                  I'm actively seeking opportunities in <span className="text-gradient font-semibold">innovative environments</span> where 
                  I can contribute to impactful software development projects and continue growing as a technology professional.
                </p>
              </div>
            </div>

            {/* Right Column - Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Programming Languages",
                  content: "Python, JavaScript, TypeScript, Java, C, Rust",
                  icon: "⚡",
                  gradient: "from-brand to-brand-secondary"
                },
                {
                  title: "Web Technologies",
                  content: "React, Node.js, HTML5, CSS3, REST APIs",
                  icon: "🌐",
                  gradient: "from-brand-secondary to-brand-tertiary"
                },
                {
                  title: "Data & Infrastructure",
                  content: "SQL, MySQL, System Architecture, Cloud Solutions",
                  icon: "🗄️",
                  gradient: "from-brand-tertiary to-brand"
                },
                {
                  title: "Specializations",
                  content: "Software Engineering, Data Science, Cybersecurity",
                  icon: "🎯",
                  gradient: "from-brand to-brand-tertiary"
                }
              ].map((skill, index) => (
                <div 
                  key={index} 
                  className="glass-floating rounded-xl p-6 hover-glow group text-center"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${skill.gradient} flex items-center justify-center text-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <h4 className="font-bold text-lg text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
                    {skill.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
