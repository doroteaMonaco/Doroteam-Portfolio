import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  ChevronDown,
  ExternalLink,
  Mail,
  Github,
  Linkedin
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  quickReplies?: string[];
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
  quickReplies?: string[];
}

const faqs: FAQ[] = [
  {
    id: 'about',
    question: 'Tell me about yourself',
    answer: `Hi! I'm Dorotea Monaco, a Computer Engineering student at Politecnico di Torino. I'm passionate about building modern web applications with focus on scalable architecture and cloud solutions. I specialize in full-stack development using technologies like React, TypeScript, Node.js, and various databases.`,
    keywords: ['about', 'who', 'yourself', 'dorotea', 'background', 'introduction'],
    quickReplies: ['Skills', 'Projects', 'Experience']
  },
  {
    id: 'skills',
    question: 'What are your technical skills?',
    answer: `My technical stack includes:
    
🖥️ **Frontend**: React, TypeScript, Next.js, TailwindCSS, HTML5, CSS3
⚙️ **Backend**: Node.js, Express, Python, API development
🗄️ **Databases**: MongoDB, Supabase
☁️ **Cloud & DevOps**: Docker, Vercel, Git, GitHub Actions
🛠️ **Tools**: VS Code, Postman, Linux

I'm always eager to learn new technologies and stay updated with industry trends!`,
    keywords: ['skills', 'technologies', 'stack', 'programming', 'languages', 'tech'],
    quickReplies: ['Projects', 'Experience', 'Contact']
  },
  {
    id: 'projects',
    question: 'What projects have you worked on?',
    answer: `Here are some of my key projects:

🎮 **Misfortune Tracker**: A web application for tracking gaming statistics with real-time data visualization
🌍 **GeoControl**: A location-based management system with interactive mapping features

Both projects showcase my full-stack development skills and attention to user experience. You can view detailed information and source code in the Projects section of my portfolio.`,
    keywords: ['projects', 'work', 'portfolio', 'built', 'developed', 'misfortune', 'geocontrol'],
    quickReplies: ['View Projects', 'Skills', 'Contact']
  },
  {
    id: 'experience',
    question: 'What is your work experience?',
    answer: `I'm currently a Computer Engineering student at Politecnico di Torino, where I'm building strong foundations in software engineering, algorithms, and system design. 

Through my studies and personal projects, I've gained hands-on experience in:
- Full-stack web development
- Database design and optimization
- Cloud deployment and DevOps practices
- Agile development methodologies

I'm actively seeking internship and entry-level opportunities to apply my skills in real-world projects!`,
    keywords: ['experience', 'work', 'job', 'internship', 'career', 'university', 'education'],
    quickReplies: ['Contact', 'Skills', 'Availability']
  },
  {
    id: 'contact',
    question: 'How can I contact you?',
    answer: `I'd love to hear from you! Here are the best ways to reach me:

📧 **Email**: dorotea.monaco@gmail.com
💼 **LinkedIn**: Connect with me for professional networking
🐙 **GitHub**: Check out my latest code and contributions
📝 **Contact Form**: Use the contact section below for project inquiries

I typically respond within 24 hours. Looking forward to connecting!`,
    keywords: ['contact', 'email', 'reach', 'connect', 'hire', 'collaborate'],
    quickReplies: ['Send Message', 'LinkedIn', 'GitHub']
  },
  {
    id: 'availability',
    question: 'Are you available for work?',
    answer: `Yes, I'm actively looking for opportunities! I'm available for:

🎯 **Internships**: Summer 2025 and beyond
💼 **Part-time roles**: While completing my studies
🚀 **Freelance projects**: Web development and consulting
🤝 **Collaborations**: Open source and personal projects

I'm particularly interested in roles involving modern web technologies, full-stack development, and innovative projects. Let's discuss how I can contribute to your team!`,
    keywords: ['available', 'hire', 'job', 'work', 'freelance', 'internship', 'opportunity'],
    quickReplies: ['Contact', 'CV Download', 'Skills']
  },
  {
    id: 'location',
    question: 'Where are you located?',
    answer: `I'm based in Turin, Italy, where I'm studying at Politecnico di Torino. I'm open to:

🏢 **Local opportunities** in Turin and surrounding areas
🌍 **Remote work** - I have experience with distributed teams
🛫 **Relocation** for the right opportunity, especially within Europe

I'm flexible and adaptable to different working arrangements!`,
    keywords: ['location', 'where', 'turin', 'italy', 'remote', 'relocate'],
    quickReplies: ['Contact', 'Availability', 'Remote Work']
  },
  {
    id: 'technologies',
    question: 'What technologies do you use?',
    answer: `I work with modern, industry-standard technologies:

🎨 **Frontend**: React, TypeScript, Next.js, TailwindCSS, Vite
⚡ **Backend**: Node.js, Express, Python, REST APIs
🗄️ **Databases**: PostgreSQL, MongoDB, Supabase, Firebase  
☁️ **Cloud**: AWS, Vercel, Docker, Git/GitHub
🛠️ **Tools**: VS Code, Figma, Postman, Linux

I stay updated with the latest trends and am always eager to learn new technologies that can improve project outcomes!`,
    keywords: ['technologies', 'tech', 'tools', 'framework', 'library', 'database'],
    quickReplies: ['View Projects', 'Experience', 'Skills']
  },
  {
    id: 'education',
    question: 'Tell me about your education',
    answer: `🎓 **Current Education**: 
Computer Engineering at Politecnico di Torino (ongoing)

📚 **Key Areas of Study**:
• Software Engineering & Architecture
• Algorithms and Data Structures  
• Database Systems
• Web Development
• Computer Networks
• System Programming

I complement my formal education with continuous self-learning through online courses, technical documentation, and hands-on projects.`,
    keywords: ['education', 'university', 'degree', 'study', 'politecnico', 'torino', 'computer engineering'],
    quickReplies: ['Skills', 'Projects', 'Experience']
  }
];

const defaultQuickReplies = [
  'About yourself',
  'Your skills', 
  'Your projects',
  'Contact info'
];

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
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
      // Welcome message
      const welcomeMessage: Message = {
        id: '1',
        type: 'bot',
        content: `Hi there! 👋 I'm Dorotea's AI assistant. 

I can help you learn more about:
• Her background and experience
• Technical skills and expertise  
• Portfolio projects
• Contact information
• Availability for opportunities

What would you like to know?`,
        timestamp: new Date(),
        quickReplies: defaultQuickReplies
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const findBestMatch = (userMessage: string): FAQ | null => {
    const lowercaseMessage = userMessage.toLowerCase();
    
    // Direct question match
    const directMatch = faqs.find(faq => 
      faq.question.toLowerCase().includes(lowercaseMessage) || 
      lowercaseMessage.includes(faq.question.toLowerCase())
    );
    
    if (directMatch) return directMatch;

    // Keyword matching
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

    // Simulate typing delay
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
        // Default response for unmatched queries
        botResponse = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          content: `I don't have specific information about that topic, but I'd be happy to help with questions about Dorotea's background, skills, projects, or experience. You can also reach out directly using the contact form below!`,
          timestamp: new Date(),
          quickReplies: [...defaultQuickReplies, 'Contact info']
        };
      }

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  const handleSpecialAction = (action: string) => {
    switch (action) {
      case 'View Projects':
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
        break;
      case 'Send Message':
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
        break;
      case 'CV Download':
        const link = document.createElement('a');
        link.href = '/cv.pdf';
        link.download = 'Dorotea_Monaco_CV.pdf';
        link.click();
        break;
      case 'LinkedIn':
        window.open('https://linkedin.com/in/dorotea-monaco-0a0bba24a', '_blank');
        break;
      case 'GitHub':
        window.open('https://github.com/doroteaMonaco', '_blank');
        break;
      default:
        handleSendMessage(action);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 bg-gradient-to-r from-brand to-brand-secondary hover:scale-110 transition-all duration-300 animate-pulse-glow"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] z-50 chatbot-shadow border-2 border-brand/20 overflow-hidden backdrop-blur-sm animate-fade-in-up">
          {/* Header */}
          <CardHeader className="bg-gradient-to-r from-brand to-brand-secondary text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Bot className="h-6 w-6" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div>
                  <CardTitle className="text-lg font-semibold">Dorotea's Assistant</CardTitle>
                  <p className="text-sm opacity-90">Online • Ask me anything!</p>
                </div>
              </div>
              <div className="flex space-x-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="h-8 w-8 text-white hover:bg-white/20 transition-colors"
                >
                  <ChevronDown className={`h-4 w-4 transition-transform ${isMinimized ? 'rotate-180' : ''}`} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 text-white hover:bg-white/20 transition-colors"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {/* Messages */}
          {!isMinimized && (
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
                                    onClick={() => handleSpecialAction(reply)}
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
                      <div className="bg-muted rounded-lg p-3 chatbot-bubble">
                        <div className="flex items-center space-x-3">
                          <Bot className="h-4 w-4 text-brand" />
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-brand rounded-full typing-animation" />
                            <div className="w-2 h-2 bg-brand rounded-full typing-animation" style={{ animationDelay: '0.2s' }} />
                            <div className="w-2 h-2 bg-brand rounded-full typing-animation" style={{ animationDelay: '0.4s' }} />
                          </div>
                          <span className="text-xs text-muted-foreground">Typing...</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div ref={messagesEndRef} />
              </ScrollArea>

              {/* Input */}
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
          )}
        </Card>
      )}
    </>
  );
};

export default Chatbot;
