import { useState, useEffect } from 'react';

export type Language = 'it' | 'en';

const translations = {
  it: {
    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Progetti',
    'nav.about': 'Chi Sono',
    'nav.skills': 'Competenze',
    'nav.volunteer': 'Volontariato',
    'nav.contact': 'Contatti',
    'nav.hire': 'Assumimi',
    
    // Hero Section
    'hero.role': 'Software Engineer, AI Engineer, Full Stack Developer',
    'hero.currentVolunteer': 'Volontaria AISM',
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
    'skills.interpersonal': 'Competenze Interpersonali',
    'skills.soft.communication': 'Comunicazione Efficace',
    'skills.soft.problemSolving': 'Problem Solving',
    'skills.soft.adaptability': 'Adattabilità',
    'skills.soft.criticalThinking': 'Pensiero Critico',
    'skills.soft.creativity': 'Creatività',
    'skills.soft.timeManagement': 'Gestione del Tempo',
    'skills.soft.projectManagement': 'Gestione Progetti',
    'skills.soft.teamwork': 'Lavoro di Squadra',
    
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
    
    // Volunteer Section
    'volunteer.title': 'Volontariato',
    'volunteer.subtitle': 'Un percorso di crescita personale e professionale attraverso l\'impegno sociale e la formazione di competenze trasversali.',
    'volunteer.aism.title': 'AISM - Associazione Italiana Sclerosi Multipla',
    'volunteer.aism.role': 'Volontaria attiva',
    'volunteer.aism.description': 'Durante la mia esperienza di volontariato con AISM, ho contribuito attivamente all\'organizzazione di eventi informativi, campagne di raccolta fondi e attività di sensibilizzazione nelle scuole e nelle aziende. Questa esperienza mi ha insegnato l\'importanza dell\'empatia e dell\'inclusività nel design tecnologico.',
    'volunteer.activities.events.title': 'Eventi Informativi',
    'volunteer.activities.events.description': 'Organizzazione e coordinamento di eventi per sensibilizzare sulla sclerosi multipla',
    'volunteer.activities.fundraising.title': 'Raccolta Fondi',
    'volunteer.activities.fundraising.description': 'Gestione di campagne e iniziative per il supporto alla ricerca',
    'volunteer.activities.schools.title': 'Promozione nelle Scuole',
    'volunteer.activities.schools.description': 'Attività di sensibilizzazione e educazione negli istituti scolastici',
    'volunteer.activities.companies.title': 'Aziende Partner',
    'volunteer.activities.companies.description': 'Collaborazione con aziende per iniziative di responsabilità sociale',
    'volunteer.skillsTitle': 'Competenze Acquisite',
    'volunteer.skillsDescription': 'L\'esperienza di volontariato mi ha permesso di sviluppare competenze trasversali fondamentali per il lavoro di squadra e la gestione di progetti complessi.',
    'volunteer.skills.communication': 'Comunicazione Efficace',
    'volunteer.skills.teamwork': 'Lavoro di Squadra',
    'volunteer.skills.leadership': 'Leadership',
    'volunteer.skills.empathy': 'Empatia',
    'volunteer.skills.organization': 'Organizzazione',
    'volunteer.skills.adaptability': 'Adattabilità',
    
    // Contact Section
    'contact.title': 'Mettiti in Contatto',
    'contact.subtitle': 'Sono sempre aperta a discutere nuove opportunità, progetti interessanti, o semplicemente fare una chiacchierata sulla tecnologia.',
    'contact.ready': 'Pronta per Collaborare?',
    'contact.motivation1': 'Sono sempre entusiasta di discutere nuove opportunità, progetti innovativi, o semplicemente avere una conversazione significativa sulla tecnologia e il suo impatto.',
    'contact.motivation2': 'Che tu stia cercando un membro dedicato del team, abbia un\'idea per un progetto, o voglia esplorare come possiamo creare soluzioni accessibili insieme, mi piacerebbe sentirti!',
    'contact.responseTime': 'Di solito risponde entro 24 ore',
    'contact.stats.responseTime': 'Tempo di Risposta',
    'contact.stats.commitment': 'Impegno',
    'contact.success.title': 'Messaggio Inviato con Successo!',
    'contact.success.description': 'Grazie per avermi contattato. Ti risponderò presto!',
    'contact.together': 'Creiamo Qualcosa di Straordinario Insieme',
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
    'nav.volunteer': 'Volunteer',
    'nav.contact': 'Contact',
    'nav.hire': 'Hire Me',
    
    // Hero Section
    'hero.role': 'Software Engineer, AI Engineer, Full Stack Developer',
    'hero.currentVolunteer': 'AISM Volunteer',
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
    'skills.interpersonal': 'Interpersonal Skills',
    'skills.soft.communication': 'Effective Communication',
    'skills.soft.problemSolving': 'Problem Solving',
    'skills.soft.adaptability': 'Adaptability',
    'skills.soft.criticalThinking': 'Critical Thinking',
    'skills.soft.creativity': 'Creativity',
    'skills.soft.timeManagement': 'Time Management',
    'skills.soft.projectManagement': 'Project Management',
    'skills.soft.teamwork': 'Cross-functional Teamwork',
    
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
    
    // Volunteer Section
    'volunteer.title': 'Volunteer Work',
    'volunteer.subtitle': 'A journey of personal and professional growth through social commitment and the development of cross-functional skills.',
    'volunteer.aism.title': 'AISM - Italian Multiple Sclerosis Association',
    'volunteer.aism.role': 'Active Volunteer',
    'volunteer.aism.description': 'During my volunteer experience with AISM, I actively contributed to organizing informational events, fundraising campaigns, and awareness activities in schools and companies. This experience taught me the importance of empathy and inclusivity in technological design.',
    'volunteer.activities.events.title': 'Informational Events',
    'volunteer.activities.events.description': 'Organization and coordination of events to raise awareness about multiple sclerosis',
    'volunteer.activities.fundraising.title': 'Fundraising',
    'volunteer.activities.fundraising.description': 'Management of campaigns and initiatives to support research',
    'volunteer.activities.schools.title': 'School Outreach',
    'volunteer.activities.schools.description': 'Awareness and education activities in educational institutions',
    'volunteer.activities.companies.title': 'Corporate Partners',
    'volunteer.activities.companies.description': 'Collaboration with companies for corporate social responsibility initiatives',
    'volunteer.skillsTitle': 'Skills Acquired',
    'volunteer.skillsDescription': 'The volunteer experience allowed me to develop essential cross-functional skills for teamwork and complex project management.',
    'volunteer.skills.communication': 'Effective Communication',
    'volunteer.skills.teamwork': 'Teamwork',
    'volunteer.skills.leadership': 'Leadership',
    'volunteer.skills.empathy': 'Empathy',
    'volunteer.skills.organization': 'Organization',
    'volunteer.skills.adaptability': 'Adaptability',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'I\'m always open to discussing new opportunities, interesting projects, or just having a chat about technology.',
    'contact.ready': 'Ready to Collaborate?',
    'contact.motivation1': 'I\'m always excited to discuss new opportunities, innovative projects, or just have a meaningful conversation about technology and its impact.',
    'contact.motivation2': 'Whether you\'re looking for a dedicated team member, have a project idea, or want to explore how we can create accessible solutions together, I\'d love to hear from you!',
    'contact.responseTime': 'Usually responds within 24 hours',
    'contact.stats.responseTime': 'Response Time',
    'contact.stats.commitment': 'Commitment',
    'contact.success.title': 'Message Sent Successfully!',
    'contact.success.description': 'Thanks for reaching out. I\'ll get back to you soon!',
    'contact.together': 'Let\'s Create Something Amazing Together',
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
