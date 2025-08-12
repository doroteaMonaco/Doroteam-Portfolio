export const About = () => {
  return (
    <section id="about" className="py-12 md:py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">About</h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            I am a passionate software engineer with a strong academic background from Politecnico di Torino, where I developed solid skills in both backend and frontend development. My journey includes university projects and personal initiatives, always driven by curiosity and a desire to solve real-world problems through technology.<br /><br />
            I aspire to work on innovative web and mobile applications, combining technical excellence with user-centered design. My goal is to contribute to impactful projects, keep learning new technologies, and collaborate in dynamic, international teams.
          </p>
        </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="glass rounded-lg p-4 text-center">
            <p className="font-medium">Frontend</p>
            <p className="text-sm text-muted-foreground">React, TypeScript, HTML, CSS</p>
          </div>
          <div className="glass rounded-lg p-4 text-center">
            <p className="font-medium">Backend</p>
            <p className="text-sm text-muted-foreground">Node.js, Express, REST API, MySQL</p>
          </div>
          <div className="glass rounded-lg p-4 text-center">
            <p className="font-medium">DevOps</p>
            <p className="text-sm text-muted-foreground">Docker, Git, CI/CD</p>
          </div>
          <div className="glass rounded-lg p-4 text-center">
            <p className="font-medium">Testing</p>
            <p className="text-sm text-muted-foreground">Jest, Unit & Integration Testing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
