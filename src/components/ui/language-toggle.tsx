import { Button } from "./button";
import { useLanguageContext } from "../../contexts/TranslationContext";
import { Language } from "../../hooks/useTranslation";

export const LanguageToggle = () => {
  const { language, changeLanguage, t } = useLanguageContext();

  const toggleLanguage = () => {
    const newLanguage: Language = language === 'it' ? 'en' : 'it';
    changeLanguage(newLanguage);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="font-medium"
    >
      {language === 'it' ? t('language.english') : t('language.italian')}
    </Button>
  );
};
