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
    'hero.role': 'Software Engineer, AI Engineer, Full Stack Developer',
    'hero.description': 'Il mio obiettivo è costruire soluzioni che vadano oltre le prestazioni, creando tecnologie che fanno davvero la differenza nella vita quotidiana delle persone. Sono particolarmente motivata a sviluppare strumenti e applicazioni che migliorano l\'accessibilità e supportano le persone con disabilità, aiutandole a superare le sfide e a raggiungere l’indipendenza.',
    'hero.viewProjects': 'Vedi Progetti',
    'hero.letsConnect': 'Connettiamoci',
    'hero.downloadCV': 'Scarica CV',
    
    // About Section
    'about.title': 'Chi Sono',
    'about.subtitle': 'Appassionata di creare soluzioni innovative attraverso la tecnologia e l\'apprendimento continuo.',
    'about.journey': 'Il Mio Percorso',
    'about.content': '🎓 Sono una studentessa di Magistrale in Ingegneria del Software al Politecnico di Torino, appassionata di tecnologia, innovazione e apprendimento continuo. La mia fascinazione risiede nell\'AI, software e tecnologie cloud, e nel loro potenziale di trasformare le vite.\n\n💡 Mi specializzo nella creazione di applicazioni web moderne utilizzando tecnologie all\'avanguardia, con un forte focus su codice pulito, esperienza utente e soluzioni innovative. Sono motivata a costruire software che va oltre le prestazioni, progettando strumenti che migliorano l\'accessibilità e danno potere agli individui, incluse le persone con disabilità.\n\n🤝 La mia esperienza di volontariato con AISM (Associazione Italiana Sclerosi Multipla) ha plasmato il mio approccio, insegnandomi a combinare competenza tecnica con empatia per sviluppare soluzioni incentrate sull\'umano che sono pratiche e significative.\n\n🌱 Mi piace affrontare problemi complessi, trasformare idee in realtà attraverso il codice ed esplorare nuove tecnologie. Quando non sto programmando, contribuisco a progetti open-source e mi tengo aggiornata sulle ultime tendenze nell\'ingegneria del software.\n\n🚀 Sto cercando opportunità in ambienti innovativi e di impatto, dove posso contribuire a progetti di sviluppo software che uniscono tecnologia e impatto sociale mentre continuo a crescere come professionista nell\'industria tech.',
    
    
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
    'projects.ruggine.description': 'Applicazione di chat moderna sviluppata in Rust con interfaccia grafica nativa, sviluppata in collaborazione con Luigi Gonnella 💜. Utilizza WebSocket e Redis per supportare chat di gruppo, messaggi privati, inviti ai gruppi e richieste di amicizia per una comunicazione fluida e sicura.',
  'projects.pacman.title': 'Pacman',
  'projects.pacman.description': 'Un clone di Pacman sviluppato per la scheda Landtiger LPC1768, programmato in Assembly ARM. Gameplay classico, grafica retrò e intelligenza artificiale per i fantasmi.',
  'projects.recapp.title': 'RecApp',
  'projects.recapp.description': 'Forum di ricette sviluppato con React Router, Prisma, PostgreSQL, Redis, Supabase, Vercel, React e JavaScript. ⚠️ Progetto ancora in fase di sviluppo: l\'interfaccia utente e le funzionalità social devono essere implementate.',
    
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
    'hero.role': 'Software Engineer, AI Engineer, Full Stack Developer',
    'hero.description': 'My goal is to build solutions that go beyond performance, creating technologies that truly make a difference in people\'s daily lives. I am especially motivated to develop tools and applications that improve accessibility and support individuals with disabilities, helping them overcome challenges and gain independence.',
    'hero.viewProjects': 'View Projects',
    'hero.letsConnect': 'Let\'s Connect',
    'hero.downloadCV': 'Download CV',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Passionate about creating innovative solutions through technology and continuous learning.',
    'about.journey': 'My Journey',
    'about.content': '🎓 I am a Master\'s student in Software Engineering at Politecnico di Torino, passionate about technology, innovation, and continuous learning. My fascination lies in AI, software, and cloud technologies, and their potential to transform lives.\n\n💡 I specialize in creating modern web applications using cutting-edge technologies, with a strong focus on clean code, user experience, and innovative solutions. I am motivated to build software that goes beyond performance, designing tools that improve accessibility and empower individuals, including those with disabilities.\n\n🤝 My volunteer experience with AISM (Associazione Italiana Sclerosi Multipla) has shaped my approach, teaching me to combine technical expertise with empathy to develop human-centered solutions that are practical and meaningful.\n\n🌱 I enjoy tackling complex problems, turning ideas into reality through code, and exploring new technologies. When I\'m not coding, I contribute to open-source projects and stay up-to-date with the latest trends in software engineering.\n\n🚀 I am seeking opportunities in innovative and impactful environments, where I can contribute to software development projects that merge technology with social impact while continuing to grow as a professional in the tech industry.',
    
    
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
    'projects.ruggine.description': 'Modern chat application built with Rust featuring native GUI interface, developed in collaboration with Luigi Gonnella 💜. Uses WebSocket and Redis to support group chats, private messaging, group invitations, and friend requests for seamless and secure communication.',
  'projects.pacman.title': 'Pacman',
  'projects.pacman.description': 'A Pacman clone developed for the Landtiger LPC1768 board, programmed in ARM assembly. Features classic gameplay, retro graphics, and AI-driven ghosts.',
  'projects.recapp.title': 'RecApp',
  'projects.recapp.description': 'Recipe forum built with React Router, Prisma, PostgreSQL, Redis, Supabase, Vercel, React and JavaScript. ⚠️ Project under active development: UI and social features are still to be implemented.',
    
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
