import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  quickReplies?: string[];
}

const faqs = [
  {
    id: 'about',
    question: 'Tell me about yourself',
    answer: `Hi! I'm Dorotea Monaco, a Computer Engineering student at Politecnico di Torino. I specialize in full-stack development using React, TypeScript, Node.js, and modern databases.`,
    keywords: ['about', 'who', 'yourself', 'dorotea', 'background'],
    quickReplies: ['Skills', 'Projects', 'Experience']
  },
  {
    id: 'skills',
    question: 'What are your technical skills?',
    answer: `My technical stack includes:

🖥️ Frontend: React, TypeScript, Next.js, TailwindCSS
⚙️ Backend: Node.js, Express, Python
🗄️ Databases: PostgreSQL, MongoDB, Supabase
☁️ Cloud: Docker, AWS, Vercel, Git

I'm always eager to learn new technologies!`,
    keywords: ['skills', 'technologies', 'stack', 'programming'],
    quickReplies: ['Projects', 'Experience', 'Contact']
  },
  {
    id: 'projects',
    question: 'What projects have you worked on?',
    answer: `Here are some of my key projects:

🎮 Misfortune Tracker: Gaming statistics with real-time visualization
🌍 GeoControl: Location-based management system

You can view detailed information in the Projects section!`,
    keywords: ['projects', 'work', 'portfolio', 'built'],
    quickReplies: ['View Projects', 'Skills', 'Contact']
  },
  {
    id: 'contact',
    question: 'How can I contact you?',
    answer: `I'd love to hear from you!

📧 Email: dorotea.monaco@gmail.com
💼 LinkedIn: Professional networking
🐙 GitHub: Latest code and contributions
💬 WhatsApp: Quick messaging

I typically respond within 24 hours!`,
    keywords: ['contact', 'email', 'reach', 'connect'],
    quickReplies: ['Send Message', 'LinkedIn', 'GitHub', 'WhatsApp']
  }
];

const defaultQuickReplies = ['About yourself', 'Your skills', 'Your projects', 'Contact info'];

export const SimpleChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: '1',
        type: 'bot',
        content: `Hi there! 👋 I'm Dorotea's AI assistant.

I can help you learn about:
• Her background and experience
• Technical skills and expertise  
• Portfolio projects
• Contact information

What would you like to know?`,
        timestamp: new Date(),
        quickReplies: defaultQuickReplies
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const findBestMatch = (userMessage: string) => {
    const lowercaseMessage = userMessage.toLowerCase();
    
    const directMatch = faqs.find(faq => 
      faq.question.toLowerCase().includes(lowercaseMessage) || 
      lowercaseMessage.includes(faq.question.toLowerCase())
    );
    
    if (directMatch) return directMatch;

    const keywordMatch = faqs.find(faq =>
      faq.keywords.some(keyword => lowercaseMessage.includes(keyword))
    );

    return keywordMatch;
  };

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const matchedFAQ = findBestMatch(message);
      
      let botResponse: Message;
      
      if (matchedFAQ) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          content: matchedFAQ.answer,
          timestamp: new Date(),
          quickReplies: matchedFAQ.quickReplies || defaultQuickReplies
        };
      } else {
        botResponse = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          content: `I don't have specific information about that topic, but I'd be happy to help with questions about Dorotea's background, skills, projects, or experience. You can also reach out directly using the contact form!`,
          timestamp: new Date(),
          quickReplies: [...defaultQuickReplies, 'Contact info']
        };
      }

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickReply = (reply: string) => {
    switch (reply) {
      case 'View Projects':
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
        break;
      case 'Send Message':
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
        break;
      case 'LinkedIn':
        window.open('https://linkedin.com/in/dorotea-monaco-0a0bba24a', '_blank');
        break;
      case 'GitHub':
        window.open('https://github.com/doroteaMonaco', '_blank');
        break;
      case 'WhatsApp':
        window.open('https://wa.me/+393456789012', '_blank');
        break;
      default:
        handleSendMessage(reply);
    }
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 bg-gradient-to-r from-brand to-brand-secondary hover:scale-110 transition-all duration-300"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <>
          {/* Overlay per chiudere cliccando fuori */}
          <div 
            className="fixed inset-0 z-40 bg-black/20" 
            onClick={() => setIsOpen(false)}
          />
          
          <Card className="fixed bottom-6 right-6 w-96 h-[500px] z-50 shadow-2xl border-2 border-brand/20 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-brand to-brand-secondary text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bot className="h-6 w-6" />
                <div>
                  <CardTitle className="text-lg font-semibold">Dorotea's Assistant</CardTitle>
                  <p className="text-sm opacity-90">Ask me anything!</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  console.log('Closing chatbot');
                  setIsOpen(false);
                }}
                className="h-8 w-8 text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-0 flex flex-col h-full">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.type === 'user'
                          ? 'bg-brand text-white'
                          : 'bg-muted'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.type === 'bot' && (
                          <Bot className="h-4 w-4 mt-0.5 text-brand" />
                        )}
                        {message.type === 'user' && (
                          <User className="h-4 w-4 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <p className="text-sm whitespace-pre-line">{message.content}</p>
                          {message.quickReplies && message.type === 'bot' && (
                            <div className="mt-3 flex flex-wrap gap-2">
                              {message.quickReplies.map((reply, index) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className="cursor-pointer hover:bg-brand hover:text-white transition-colors text-xs"
                                  onClick={() => handleQuickReply(reply)}
                                >
                                  {reply}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <Bot className="h-4 w-4 text-brand" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-brand rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-brand rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <div className="w-2 h-2 bg-brand rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div ref={messagesEndRef} />
            </ScrollArea>

            <div className="border-t p-4">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything..."
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage(inputValue);
                    }
                  }}
                  className="flex-1"
                />
                <Button
                  onClick={() => handleSendMessage(inputValue)}
                  size="icon"
                  className="bg-brand hover:bg-brand/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        </>
      )}
    </>
  );
};

export default SimpleChatbot;
