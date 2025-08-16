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

    // Notification email for you (portfolio owner)
    const notificationEmail = {
      from: "Portfolio Contact <noreply@resend.dev>",
      to: ["dorotea.monaco@gmail.com"],
      subject: `New message from ${name} - Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #2d7d45 0%, #d97706 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; text-align: center;">New Message from Portfolio</h1>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #2d7d45; margin-top: 0;">Contact Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #2d7d45;">${email}</a></p>
            <p><strong>Date:</strong> ${new Date().toLocaleString('en-US')}</p>
            
            <h3 style="color: #2d7d45; margin-top: 30px;">Message:</h3>
            <div style="background-color: white; padding: 20px; border-radius: 6px; border-left: 4px solid #2d7d45; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:${email}?subject=Re: Portfolio message&body=Hi ${name},%0A%0AThank you for contacting me..." 
               style="background: linear-gradient(135deg, #2d7d45 0%, #d97706 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Reply Directly
            </a>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #dee2e6;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            Automated email from portfolio contact system
          </p>
        </div>
      `,
    };

    // Confirmation email for the sender
    const confirmationEmail = {
      from: "Dorotea Monaco <noreply@resend.dev>",
      to: [email],
      subject: "Thanks for reaching out! 🌟",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #2d7d45 0%, #d97706 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; text-align: center;">Thank you for your message!</h1>
          </div>
          
          <div style="padding: 20px;">
            <p style="font-size: 18px; color: #2d7d45;">Hi ${name}! 👋</p>
            
            <p>I've received your message and will get back to you <strong>within 24 hours</strong>.</p>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #2d7d45;">Your message:</h3>
              <div style="background-color: white; padding: 15px; border-radius: 6px; border-left: 4px solid #2d7d45;">
                ${message.replace(/\n/g, '<br>')}
              </div>
              <p style="color: #666; font-size: 12px; margin-bottom: 0;">
                Sent on ${new Date().toLocaleString('en-US')}
              </p>
            </div>
            
            <p>In the meantime, feel free to:</p>
            <ul style="color: #555;">
              <li>Explore my <a href="#" style="color: #2d7d45;">projects</a> on the portfolio</li>
              <li>Connect with me on <a href="https://linkedin.com/in/dorotea-monaco-0a0bba24a" style="color: #2d7d45;">LinkedIn</a></li>
              <li>Check out my <a href="https://github.com/doroteaMonaco" style="color: #2d7d45;">GitHub</a></li>
            </ul>
            
            <div style="background: linear-gradient(135deg, #2d7d45 0%, #d97706 100%); padding: 20px; border-radius: 8px; margin: 30px 0; text-align: center;">
              <p style="color: white; margin: 0; font-size: 16px;">
                🚀 <strong>I'm always looking for new opportunities and interesting collaborations!</strong>
              </p>
            </div>
            
            <p style="margin-top: 30px;">
              Talk soon,<br>
              <strong style="color: #2d7d45;">Dorotea Monaco</strong><br>
              <span style="color: #666; font-size: 14px;">Full Stack Developer</span>
            </p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #dee2e6;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            This is an automated confirmation email. For further communication, simply reply to this email.
          </p>
        </div>
      `,
    };

    // Send both emails
    const [notificationResponse, confirmationResponse] = await Promise.all([
      // Notification email for you
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(notificationEmail),
      }),
      // Confirmation email for the sender
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(confirmationEmail),
      }),
    ]);

    const [notificationResult, confirmationResult] = await Promise.all([
      notificationResponse.json(),
      confirmationResponse.json(),
    ]);

    // Check if at least the notification email was sent
    if (!notificationResponse.ok) {
      console.error("❌ Failed to send notification email:", notificationResult);
      throw new Error("Failed to send notification email");
    }

    // Log warning if confirmation email fails, but don't block the process
    if (!confirmationResponse.ok) {
      console.error("⚠️ Failed to send confirmation email:", confirmationResult);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Message received! I'll get back to you soon.",
        notificationId: notificationResult.id,
        confirmationId: confirmationResponse.ok ? confirmationResult.id : null,
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
    console.error("Error in send-contact-email function:", error);
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
