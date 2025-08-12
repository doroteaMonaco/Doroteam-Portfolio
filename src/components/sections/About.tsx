export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">About</h2>
          <p className="text-muted-foreground text-lg">
            I am a passionate software engineer with a strong academic background from Politecnico di Torino, where I developed solid skills in both backend and frontend development. My journey includes university projects and personal initiatives, always driven by curiosity and a desire to solve real-world problems through technology.<br /><br />
            I aspire to work on innovative web and mobile applications, combining technical excellence with user-centered design. My goal is to contribute to impactful projects, keep learning new technologies, and collaborate in dynamic, international teams.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="glass rounded-lg p-4">
            <p className="font-medium">Frontend</p>
            <p className="text-sm text-muted-foreground">React, TypeScript, Tailwind</p>
          </div>
          <div className="glass rounded-lg p-4">
            <p className="font-medium">Backend</p>
            <p className="text-sm text-muted-foreground">Node, Supabase, REST</p>
          </div>
          <div className="glass rounded-lg p-4">
            <p className="font-medium">Architecture</p>
            <p className="text-sm text-muted-foreground">Clean code, testing, DX</p>
          </div>
          <div className="glass rounded-lg p-4">
            <p className="font-medium">DevOps</p>
            <p className="text-sm text-muted-foreground">CI/CD, monitoring</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
