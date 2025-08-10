import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const to = "your.email@example.com";
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email app", description: "If it didn't open, please email your.email@example.com" });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Contact</h2>
        <p className="text-muted-foreground max-w-2xl mb-8">Interested in working together? Send a message — I’ll reply within 24 hours.</p>
        <form onSubmit={send} className="max-w-xl grid gap-4">
          <div>
            <label className="block text-sm mb-2" htmlFor="name">Name</label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
          </div>
          <div>
            <label className="block text-sm mb-2" htmlFor="email">Email</label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" required />
          </div>
          <div>
            <label className="block text-sm mb-2" htmlFor="message">Message</label>
            <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Hi! I'd like to discuss..." rows={5} required />
          </div>
          <div>
            <Button type="submit" variant="gradient" className="w-full md:w-auto">Send message</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
