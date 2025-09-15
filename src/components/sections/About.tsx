import { useLanguageContext } from "@/contexts/TranslationContext";

export const About = () => {
  const { t } = useLanguageContext();

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-brand-tertiary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">{t('about.title')}</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('about.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Story */}
            <div className="space-y-6">
              <div className="glass-floating rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-gradient">{t('about.journey')}</h3>
                <div className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                  {t('about.content')}
                </div>
              </div>
            </div>

            {/* Right Column - Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: t('skills.programming'),
                  content: "Python, JavaScript, TypeScript, Java, C, Rust",
                  icon: "⚡",
                  gradient: "from-brand to-brand-secondary"
                },
                {
                  title: t('skills.web'),
                  content: "React, Node.js, HTML5, CSS3, REST APIs",
                  icon: "🌐",
                  gradient: "from-brand-secondary to-brand-tertiary"
                },
                {
                  title: t('skills.database'),
                  content: "SQL, MySQL, System Architecture, Cloud Solutions",
                  icon: "🗄️",
                  gradient: "from-brand-tertiary to-brand"
                },
                {
                  title: t('skills.tools'),
                  content: "Software Engineering, Data Science, Cybersecurity, AI Engineering",
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
