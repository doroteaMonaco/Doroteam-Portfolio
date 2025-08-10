import SEO from "@/components/SEO";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Your Name — Software Engineer Portfolio"
        description="Portfolio of a software engineer: projects, skills, and contact information."
        person={{
          name: "Your Name",
          jobTitle: "Software Engineer",
          email: "your.email@example.com",
          sameAs: [
            "https://github.com/",
            "https://www.linkedin.com/",
          ],
        }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
