export const About = () => {
  return (
    <section id="about" className="py-12 md:py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">About</h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-4">
            I'm <strong>Dorotea Monaco</strong>, currently pursuing a Master's degree in Computer Engineering at <strong>Politecnico di Torino</strong>, specializing in software engineering, web applications, information systems, and data science.
          </p>
          <p className="text-muted-foreground text-base sm:text-lg mb-4">
            I completed my Bachelor's degree in Computer Engineering at the same university, developing strong skills in programming, databases, and system architectures. During my studies, I gained practical experience through an internship at the Municipality of Turin, focusing on digital support, electronic archiving, and website maintenance.
          </p>
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span className="text-sm">Proficient in multiple programming languages (C, Python, Java, JavaScript, TypeScript, Rust)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span className="text-sm">Experience with databases (SQL, MySQL) and system architectures</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span className="text-sm">Strong communication skills and team collaboration abilities</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span className="text-sm">Problem-solving mindset and excellent time management</span>
            </div>
          </div>
          <p className="text-muted-foreground text-base sm:text-lg">
            I'm particularly interested in opportunities that allow me to integrate and consolidate my knowledge, preferably in innovative environments where I can actively contribute to <strong>software development</strong> projects.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="glass rounded-lg p-4 text-center">
            <p className="font-medium">Languages</p>
            <p className="text-sm text-muted-foreground">Python, JavaScript, TypeScript, Java, C, Rust</p>
          </div>
          <div className="glass rounded-lg p-4 text-center">
            <p className="font-medium">Web Development</p>
            <p className="text-sm text-muted-foreground">React, Node.js, HTML, CSS, REST APIs</p>
          </div>
          <div className="glass rounded-lg p-4 text-center">
            <p className="font-medium">Databases</p>
            <p className="text-sm text-muted-foreground">SQL, MySQL, Data Management</p>
          </div>
          <div className="glass rounded-lg p-4 text-center">
            <p className="font-medium">Focus Areas</p>
            <p className="text-sm text-muted-foreground">Software Engineering, Data Science, Cybersecurity</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
