import { Badge } from "@/components/ui/badge";
import { useLanguageContext } from "@/contexts/TranslationContext";

export const Volunteer = () => {
  const { t } = useLanguageContext();

  const activities = [
    {
      icon: "📢",
      key: "events",
    },
    {
      icon: "💰",
      key: "fundraising",
    },
    {
      icon: "🏫",
      key: "schools",
    },
    {
      icon: "🏢",
      key: "companies",
    }
  ];

  const softSkills = [
    "volunteer.skills.communication",
    "volunteer.skills.teamwork", 
    "volunteer.skills.leadership",
    "volunteer.skills.empathy",
    "volunteer.skills.organization",
    "volunteer.skills.adaptability"
  ];

  return (
    <section id="volunteer" className="py-12 md:py-20 lg:py-32 relative">
      <div className="absolute top-20 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-brand/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="text-gradient">{t('volunteer.title')}</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            {t('volunteer.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* AISM Experience */}
          <div className="glass-floating rounded-3xl p-6 md:p-8 lg:p-12 mb-12 hover-glow">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6 md:mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-2xl mx-auto sm:mx-0 flex-shrink-0">
                🤝
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                  {t('volunteer.aism.title')}
                </h3>
                <p className="text-brand font-semibold text-sm sm:text-base">
                  {t('volunteer.aism.role')}
                </p>
              </div>
            </div>
            
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              {t('volunteer.aism.description')}
            </p>

            {/* Activities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
              {activities.map((activity, index) => (
                <div 
                  key={activity.key}
                  className="bg-background/50 rounded-xl p-4 md:p-6 border border-border/50 hover:border-brand/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-2xl md:text-3xl mb-3 md:mb-4 text-center">{activity.icon}</div>
                  <h4 className="font-semibold text-foreground mb-2 text-center text-sm md:text-base">
                    {t(`volunteer.activities.${activity.key}.title`)}
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground text-center leading-relaxed">
                    {t(`volunteer.activities.${activity.key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Acquired */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 md:mb-8">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                <span className="text-lg">✨</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                {t('volunteer.skillsTitle')}
              </h3>
            </div>
            
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              {t('volunteer.skillsDescription')}
            </p>

            <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl mx-auto px-4">
              {softSkills.map((skill, index) => (
                <Badge 
                  key={skill} 
                  variant="outline" 
                  className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border-brand/30 text-brand bg-brand/5 hover:bg-brand hover:text-brand-foreground hover:scale-105 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {t(skill)}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;