import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabaseClient";
import { ContactForm, ContactResponse } from "@/types/contact";
import { useLanguageContext } from "@/contexts/TranslationContext";
import { Mail, Send, CheckCircle, User, MessageSquare, ArrowRight, Sparkles, Heart } from "lucide-react";

export const Contact = () => {
  const { t } = useLanguageContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [hasStartedTyping, setHasStartedTyping] = useState({
    name: false,
    email: false,
    message: false
  });
  
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleFieldFocus = (fieldName: string) => {
    setFocusedField(fieldName);
    setHasStartedTyping(prev => ({ ...prev, [fieldName]: true }));
  };
  
  const handleFieldBlur = () => {
    setFocusedField(null);
  };
  
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  const getFieldValidation = (field: string, value: string) => {
    if (!hasStartedTyping[field as keyof typeof hasStartedTyping]) return null;
    
    switch (field) {
      case 'name':
        return value.length >= 2 ? 'valid' : 'invalid';
      case 'email':
        return isValidEmail(value) ? 'valid' : 'invalid';
      case 'message':
        return value.length >= 10 ? 'valid' : 'invalid';
      default:
        return null;
    }
  };

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
    <section id="contact" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-brand/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-floating mb-6">
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="text-sm font-medium">{t('contact.together')}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">{t('contact.title')}</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Contact Info & Motivation */}
            <div className="space-y-8">
              <div className="glass-floating rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">{t('contact.ready')}</h3>
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    {t('contact.motivation1')}
                  </p>
                  <p className="leading-relaxed">
                    {t('contact.motivation2')}
                  </p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border/50">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>{t('contact.responseTime')}</span>
                  </div>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-floating rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-brand mb-1">24h</div>
                  <div className="text-sm text-muted-foreground">{t('contact.stats.responseTime')}</div>
                </div>
                <div className="glass-floating rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-brand mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">{t('contact.stats.commitment')}</div>
                </div>
              </div>
            </div>

            {/* Right Side - Enhanced Form */}
            <div className="glass-floating rounded-2xl p-6 md:p-8 relative">
              {isSuccess && (
                <div className="absolute inset-0 bg-green-500/10 rounded-2xl border-2 border-green-500/20 flex items-center justify-center z-10">
                  <div className="text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-green-500 mb-2">{t('contact.success.title')}</h3>
                    <p className="text-muted-foreground">{t('contact.success.description')}</p>
                  </div>
                </div>
              )}
              
              <form ref={formRef} onSubmit={npsend} className="space-y-6">
                <div className="space-y-6">
                  {/* Name Field */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-medium mb-3" htmlFor="name">
                      <User className="w-4 h-4" />
                      {t('contact.form.name')}
                      {getFieldValidation('name', name) === 'valid' && <CheckCircle className="w-4 h-4 text-green-500" />}
                    </label>
                    <div className="relative">
                      <Input 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => handleFieldFocus('name')}
                        onBlur={handleFieldBlur}
                        placeholder={t('contact.form.namePlaceholder')}
                        className={`
                          transition-all duration-300 bg-background/50 border-border/50 
                          focus:border-brand focus:ring-2 focus:ring-brand/20 
                          ${focusedField === 'name' ? 'scale-[1.02] shadow-lg' : ''}
                          ${getFieldValidation('name', name) === 'valid' ? 'border-green-500/50' : ''}
                          ${getFieldValidation('name', name) === 'invalid' ? 'border-red-500/50' : ''}
                        `}
                        required 
                      />
                      {focusedField === 'name' && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand rounded-full animate-ping"></div>
                      )}
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-medium mb-3" htmlFor="email">
                      <Mail className="w-4 h-4" />
                      {t('contact.form.email')}
                      {getFieldValidation('email', email) === 'valid' && <CheckCircle className="w-4 h-4 text-green-500" />}
                    </label>
                    <div className="relative">
                      <Input 
                        id="email" 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => handleFieldFocus('email')}
                        onBlur={handleFieldBlur}
                        placeholder={t('contact.form.emailPlaceholder')}
                        className={`
                          transition-all duration-300 bg-background/50 border-border/50 
                          focus:border-brand focus:ring-2 focus:ring-brand/20 
                          ${focusedField === 'email' ? 'scale-[1.02] shadow-lg' : ''}
                          ${getFieldValidation('email', email) === 'valid' ? 'border-green-500/50' : ''}
                          ${getFieldValidation('email', email) === 'invalid' ? 'border-red-500/50' : ''}
                        `}
                        required 
                      />
                      {focusedField === 'email' && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand rounded-full animate-ping"></div>
                      )}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-medium mb-3" htmlFor="message">
                      <MessageSquare className="w-4 h-4" />
                      {t('contact.form.message')}
                      {getFieldValidation('message', message) === 'valid' && <CheckCircle className="w-4 h-4 text-green-500" />}
                    </label>
                    <div className="relative">
                      <Textarea 
                        id="message" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)}
                        onFocus={() => handleFieldFocus('message')}
                        onBlur={handleFieldBlur}
                        placeholder={t('contact.form.messagePlaceholder')}
                        rows={5}
                        className={`
                          transition-all duration-300 bg-background/50 border-border/50 
                          focus:border-brand focus:ring-2 focus:ring-brand/20 resize-none
                          ${focusedField === 'message' ? 'scale-[1.02] shadow-lg' : ''}
                          ${getFieldValidation('message', message) === 'valid' ? 'border-green-500/50' : ''}
                          ${getFieldValidation('message', message) === 'invalid' ? 'border-red-500/50' : ''}
                        `}
                        required 
                      />
                      {focusedField === 'message' && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand rounded-full animate-ping"></div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  variant="gradient" 
                  className="w-full group relative overflow-hidden py-6 text-lg font-semibold transition-all duration-300 hover:scale-[1.02] disabled:hover:scale-100" 
                  disabled={isLoading || isSuccess}
                >
                  {isLoading ? (
                    <>
                      <Mail className="mr-2 h-5 w-5 animate-spin" />
                      {t('contact.form.sending')}
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle className="mr-2 h-5 w-5" />
                      {t('contact.form.sent')}
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      {t('contact.form.send')}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
