# Tech-Folio-Path

[![Made with React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://react.dev/) 
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/) 
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)  
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/) 
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white)](https://supabase.com/) 
[![Resend](https://img.shields.io/badge/Resend-000000?logo=resend&logoColor=white)](https://resend.com/)  
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel&logoColor=white)](https://vercel.com/) 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

Un **portfolio tecnico interattivo** sviluppato per presentare esperienze, progetti e competenze in ambito software.  
L’obiettivo è fornire uno strumento moderno, veloce e responsive, utile sia come vetrina professionale che come esercizio di sviluppo frontend con tecnologie attuali.

🌐 **Live demo:** [doroteamonaco.dev](https://doroteamonaco.dev)

---

## 🚀 Tecnologie utilizzate
- **React + TypeScript** → componenti tipizzati, scalabilità e sicurezza del codice  
- **Vite** → bundler veloce ed efficiente per lo sviluppo  
- **TailwindCSS** → design moderno e responsive con classi utility  
- **Zod** → validazione dei dati lato client per maggiore robustezza  
- **Supabase** → backend serverless, database e autenticazione  
- **Resend** → gestione e invio sicuro di email di contatto  
- **Vercel** → hosting e deploy veloce con CI/CD integrato  

---

## ✨ Caratteristiche principali
- UI responsive e ottimizzata per dispositivi desktop e mobile  
- Navigazione fluida tra sezioni del portfolio  
- Form di contatto con validazione **Zod** e invio tramite **Resend**  
- Persistenza dati e autenticazione con **Supabase**  
- Deploy rapido e continuo su **Vercel**  
- Dominio personalizzato: **doroteamonaco.dev**  

---

## 📂 Struttura del progetto


## Descrizione delle cartelle principali

- **public/**: contiene tutti gli asset statici come immagini, favicon e file pubblici.  
- **src/components/**: componenti React riutilizzabili.  
- **src/pages/**: le principali sezioni del portfolio, ad esempio Home, About, Projects, Contact.  
- **src/styles/**: configurazioni e personalizzazioni di TailwindCSS.  
- **src/utils/**: funzioni helper e validazioni (ad esempio usando Zod).  
- **src/services/**: integrazioni esterne come Supabase, Resend o altre API.  
- **App.tsx**: entry point dell’applicazione React.  
- **main.tsx**: inizializza React con Vite.  

---

## 🔧 Installazione e utilizzo

Clona la repository ed esegui il progetto in locale:

```bash
# Clona la repository
git clone https://github.com/doroteaMonaco/tech-folio-path.git
cd tech-folio-path

# Installa le dipendenze
npm install

# Avvia il server locale
npm run dev

## 🤝 Contribuire

Se vuoi contribuire a questo progetto:

1. Fai un fork della repo
2. Crea un branch per la tua feature:

```bash
git checkout -b feature/nome-feature

git commit -m "Aggiunta nuova feature"

git push origin feature/nome-feature
