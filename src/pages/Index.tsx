import SEO from "@/components/SEO";
import { TranslationProvider } from "@/contexts/TranslationContext";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Volunteer from "@/components/sections/Volunteer";
import Contact from "@/components/sections/Contact";
import { Chatbot } from "@/components/ui/chatbot";

const Index = () => {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-background text-foreground">
        <SEO
          title="Dorotea Monaco — Software Engineer Portfolio"
          description="Portfolio di Dorotea Monaco, ingegnere software: progetti innovativi, competenze tecniche e informazioni di contatto."
          person={{
            name: "Dorotea Monaco",
            jobTitle: "Software Engineer",
            email: "dorotea.monaco@gmail.com",
            sameAs: [
              "https://github.com/doroteaMonaco",
              "https://www.linkedin.com/in/dorotea-monaco-0a0bba24a",
            ],
          }}
        />
        <SiteHeader />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <About />
          <Volunteer />
          <Contact />
        </main>
        <SiteFooter />
        <Chatbot />
      </div>
    </TranslationProvider>
  );
};

export default Index;
