import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabaseClient";
import { ContactForm, ContactResponse } from "@/types/contact";
import { useLanguageContext } from "@/contexts/TranslationContext";
import { Mail, Send, CheckCircle } from "lucide-react";

export const Contact = () => {
  const { t } = useLanguageContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const npsend = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const formData: ContactForm = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    };

    // Validazione base
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      const response = data as ContactResponse;

      if (response.success) {
        setIsSuccess(true);
        toast({
          title: "✅ Message sent successfully!",
          description: "I've received your message and sent you a confirmation email. I'll get back to you within 24 hours!",
        });
        
        // Reset del form
        setName("");
        setEmail("");
        setMessage("");
        
        // Reset success state dopo 5 secondi
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error(response.message || "Error sending message");
      }
    } catch (error: any) {
      toast({
        title: "❌ Sending error",
        description: error.message || "An error occurred. Please try again later or contact me directly at dorotea.monaco@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">{t('contact.title')}</h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mb-8">{t('contact.subtitle')}</p>
        <form onSubmit={npsend} className="w-full max-w-xl grid gap-4 mx-auto">
          <div>
            <label className="block text-sm mb-2" htmlFor="name">{t('contact.form.name')}</label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
          </div>
          <div>
            <label className="block text-sm mb-2" htmlFor="email">{t('contact.form.email')}</label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" required />
          </div>
          <div>
            <label className="block text-sm mb-2" htmlFor="message">{t('contact.form.message')}</label>
            <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Hi! I'd like to discuss..." rows={5} required />
          </div>
          <div>
            <Button 
              type="submit" 
              variant="gradient" 
              className="w-full" 
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Mail className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  {t('contact.form.send')}
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
