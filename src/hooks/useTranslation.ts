import { useState, useEffect } from 'react';

export type Language = 'it' | 'en';

const translations = {
  it: {
    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Progetti',
    'nav.about': 'Chi Sono',
    'nav.skills': 'Competenze',
    'nav.contact': 'Contatti',
    'nav.hire': 'Assumimi',
    
    // Hero Section
    'hero.role': 'Software Engineer',
    'hero.description': 'Specializzata nello sviluppo full-stack con React, TypeScript e tecnologie moderne. Appassionata di creare soluzioni innovative.',
    'hero.viewProjects': 'Vedi Progetti',
    'hero.letsConnect': 'Connettiamoci',
    'hero.downloadCV': 'Scarica CV',
    
    // About Section
    'about.title': 'Chi Sono',
    'about.subtitle': 'Appassionata di creare soluzioni innovative attraverso la tecnologia e l\'apprendimento continuo.',
    'about.journey': 'Il Mio Percorso',
    'about.content': 'Sono una studentessa di Ingegneria Informatica al Politecnico di Torino con una passione per lo sviluppo software. Mi specializzo nella creazione di applicazioni web moderne utilizzando tecnologie all\'avanguardia.\n\nIl mio viaggio nella programmazione è iniziato con la curiosità e si è evoluto in un profondo apprezzamento per il codice pulito, l\'esperienza utente e le soluzioni innovative. Amo affrontare problemi complessi e trasformare le idee in realtà attraverso il codice.\n\nQuando non sto programmando, mi troverai ad esplorare nuove tecnologie, contribuire a progetti open-source, o imparare le ultime tendenze nell\'ingegneria del software.',
    'about.opportunity': 'Sto attivamente cercando opportunità in <span class="text-gradient font-semibold">ambienti innovativi</span> dove posso contribuire a progetti di sviluppo software di impatto e continuare a crescere come professionista della tecnologia.',
    
    // Skills Section
    'skills.title': 'Competenze & Expertise',
    'skills.subtitle': 'Un toolkit completo di tecnologie moderne e competenze interpersonali affinate attraverso l\'eccellenza accademica e l\'esperienza pratica.',
    'skills.programming': 'Linguaggi di Programmazione',
    'skills.web': 'Tecnologie Web',
    'skills.database': 'Database e Backend',
    'skills.tools': 'Strumenti e Platform',
    
    // Projects Section
    'projects.title': 'Progetti in Evidenza',
    'projects.subtitle': 'Una vetrina di soluzioni innovative che combinano tecnologie moderne con design accurato. Ogni progetto dimostra capacità di problem-solving e competenza tecnica.',
    'projects.viewProject': 'Vedi Progetto',
    'projects.techStack': 'Stack Tecnologico',
    'projects.misfortune.title': 'Misfortune Tracker',
    'projects.misfortune.description': 'Un\'applicazione completa per le statistiche di gioco con visualizzazione dei dati in tempo reale, analisi degli utenti e monitoraggio delle prestazioni. Costruita con React e tecnologie moderne per un\'esperienza utente fluida.',
    'projects.geocontrol.title': 'GeoControl',
    'projects.geocontrol.description': 'Sistema avanzato di gestione basato sulla posizione per l\'elaborazione di dati geografici, mappatura e analisi spaziale. Integra API moderne per fornire insight geografici accurati.',
    'projects.ruggine.title': 'Ruggine',
    'projects.ruggine.description': 'Applicazione di chat moderna sviluppata in Rust con interfaccia grafica nativa. Supporta chat di gruppo, messaggi privati, inviti ai gruppi e richieste di amicizia per una comunicazione fluida e sicura.',
    
    // Contact Section
    'contact.title': 'Mettiti in Contatto',
    'contact.subtitle': 'Sono sempre aperta a discutere nuove opportunità, progetti interessanti, o semplicemente fare una chiacchierata sulla tecnologia.',
    'contact.form.title': 'Invia un Messaggio',
    'contact.form.name': 'Nome',
    'contact.form.email': 'Email',
    'contact.form.message': 'Messaggio',
    'contact.form.namePlaceholder': 'Il tuo nome',
    'contact.form.emailPlaceholder': 'tu@azienda.com',
    'contact.form.messagePlaceholder': 'Ciao! Vorrei discutere...',
    'contact.form.send': 'Invia Messaggio',
    'contact.form.sending': 'Invio in corso...',
    'contact.form.sent': 'Messaggio inviato!',
    'contact.info.title': 'Informazioni di Contatto',
    
    // CV Dropdown
    'cv.english': 'Scarica CV (Inglese)',
    'cv.italian': 'Scarica CV (Italiano)',
    
    // Language
    'language.italian': 'Italiano',
    'language.english': 'Inglese',
    
    // Footer
    'footer.rights': 'Tutti i diritti riservati.'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'nav.hire': 'Hire Me',
    
    // Hero Section
    'hero.role': 'Software Engineer',
    'hero.description': 'Specialized in full-stack development with React, TypeScript, and modern technologies. Passionate about creating innovative solutions.',
    'hero.viewProjects': 'View Projects',
    'hero.letsConnect': 'Let\'s Connect',
    'hero.downloadCV': 'Download CV',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Passionate about creating innovative solutions through technology and continuous learning.',
    'about.journey': 'My Journey',
    'about.content': 'I\'m a Computer Engineering student at Politecnico di Torino with a passion for software development. I specialize in creating modern web applications using cutting-edge technologies.\n\nMy journey in programming started with curiosity and has evolved into a deep appreciation for clean code, user experience, and innovative solutions. I love tackling complex problems and turning ideas into reality through code.\n\nWhen I\'m not coding, you\'ll find me exploring new technologies, contributing to open-source projects, or learning about the latest trends in software engineering.',
    'about.opportunity': 'I\'m actively seeking opportunities in <span class="text-gradient font-semibold">innovative environments</span> where I can contribute to impactful software development projects and continue growing as a technology professional.',
    
    // Skills Section
    'skills.title': 'Skills & Expertise',
    'skills.subtitle': 'A comprehensive toolkit of modern technologies and interpersonal skills honed through academic excellence and practical experience.',
    'skills.programming': 'Programming Languages',
    'skills.web': 'Web Technologies',
    'skills.database': 'Database & Backend',
    'skills.tools': 'Tools & Platforms',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'A showcase of innovative solutions combining modern technologies with thoughtful design. Each project demonstrates problem-solving skills and technical expertise.',
    'projects.viewProject': 'View Project',
    'projects.techStack': 'Tech Stack',
    'projects.misfortune.title': 'Misfortune Tracker',
    'projects.misfortune.description': 'A comprehensive gaming statistics application featuring real-time data visualization, user analytics, and performance tracking. Built with React and modern technologies for a seamless user experience.',
    'projects.geocontrol.title': 'GeoControl',
    'projects.geocontrol.description': 'Advanced location-based management system for geographical data processing, mapping, and spatial analysis. Integrates modern APIs to provide accurate geographical insights.',
    'projects.ruggine.title': 'Ruggine',
    'projects.ruggine.description': 'Modern chat application built with Rust featuring native GUI interface, developed in collaboration with Luigi Gonnella 💜. Supports group chats, private messaging, group invitations, and friend requests for seamless and secure communication.',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'I\'m always open to discussing new opportunities, interesting projects, or just having a chat about technology.',
    'contact.form.title': 'Send a Message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.emailPlaceholder': 'you@company.com',
    'contact.form.messagePlaceholder': 'Hi! I\'d like to discuss...',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.sent': 'Message sent!',
    'contact.info.title': 'Contact Information',
    
    // CV Dropdown
    'cv.english': 'Download CV (English)',
    'cv.italian': 'Download CV (Italian)',
    
    // Language
    'language.italian': 'Italian',
    'language.english': 'English',
    
    // Footer
    'footer.rights': 'All rights reserved.'
  }
};

export const useTranslation = () => {
  const [language, setLanguage] = useState<Language>('it');

  useEffect(() => {
    // Carica la lingua salvata dal localStorage
    const savedLanguage = localStorage.getItem('portfolio-language') as Language;
    if (savedLanguage && (savedLanguage === 'it' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('portfolio-language', newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return {
    language,
    changeLanguage,
    t
  };
};
