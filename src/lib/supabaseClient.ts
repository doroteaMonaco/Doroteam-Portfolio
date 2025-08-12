import { createClient } from '@supabase/supabase-js';

// Le chiavi sono ora gestite tramite variabili d'ambiente Vite (.env)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
