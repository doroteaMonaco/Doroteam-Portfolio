// @ts-ignore - Deno runtime, non Node.js
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// @ts-ignore - Deno global
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") || "re_Uto5kVV1_6MgcQPyt1xg9UBVDqHSqBiFN";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
    });
  }

  try {    
    // Validate method
    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Method not allowed" }),
        { 
          status: 405,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // Parse request body
    const { name, email, message }: ContactForm = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { 
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // Check if Resend API key is configured
    if (!RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "Email configuration not found" }),
        { 
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // Solo email di notifica per te (il proprietario del portfolio)
    const notificationEmail = {
      from: "Portfolio Contact <noreply@resend.dev>",
      to: ["dorotea.monaco@gmail.com"],
      subject: `Nuovo messaggio da ${name} - Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #2d7d45 0%, #d97706 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; text-align: center;">Nuovo Messaggio dal Portfolio</h1>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #2d7d45; margin-top: 0;">Dettagli del Contatto</h2>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #2d7d45;">${email}</a></p>
            <p><strong>Data:</strong> ${new Date().toLocaleString('it-IT')}</p>
            
            <h3 style="color: #2d7d45; margin-top: 30px;">Messaggio:</h3>
            <div style="background-color: white; padding: 20px; border-radius: 6px; border-left: 4px solid #2d7d45; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:${email}?subject=Re: Messaggio dal portfolio&body=Ciao ${name},%0A%0AGrazie per avermi contattato..." 
               style="background: linear-gradient(135deg, #2d7d45 0%, #d97706 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Rispondi Direttamente
            </a>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #dee2e6;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            Email automatica dal sistema di contatto del portfolio
          </p>
        </div>
      `,
    };

    // Invio singola email di notifica
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(notificationEmail),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("❌ Failed to send notification email:", result);
      throw new Error("Failed to send notification email");
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Message received! I'll get back to you soon.",
        notificationId: result.id,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

  } catch (error) {
    console.error("Errore nella funzione send-contact-email:", error);
    return new Response(
      JSON.stringify({ 
        error: "Internal server error",
        message: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
});
