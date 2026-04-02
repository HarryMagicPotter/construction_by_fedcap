import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Send, User, Sparkles, Trash2, Loader2, Zap, FileText, PenTool, Briefcase, GraduationCap } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

type AssistantMode = 'general' | 'cv' | 'cover-letter' | 'interview';

export default function BuildWithAI() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Welcome to the CONSTRUCTION BY FEDCAP Neural Nexus. I am your specialized career and construction intelligence assistant. Would you like to build a professional C.V., draft a cover letter, or prepare for an interview?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<AssistantMode>('general');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getSystemInstruction = (currentMode: AssistantMode) => {
    const base = "You are the CONSTRUCTION BY FEDCAP AI, a specialized construction career and technology assistant. Your tone is professional, high-tech, and helpful. Keep responses concise but informative.";
    
    switch (currentMode) {
      case 'cv':
        return `${base} You are currently in C.V. BUILDER mode. Help the user create a professional construction C.V. Ask for their trade, experience, and certifications. Format the output clearly with sections for Profile, Skills, Experience, and Qualifications. Focus on construction-specific keywords (e.g., CSCS, site safety, specific tools).`;
      case 'cover-letter':
        return `${base} You are currently in COVER LETTER mode. Help the user draft a compelling cover letter for a construction role. Ask what job they are applying for and their key strengths. Ensure the letter is professional and tailored to the construction industry.`;
      case 'interview':
        return `${base} You are currently in INTERVIEW PREP mode. Conduct a mock interview for a construction role. Ask the user what role they are interviewing for, then provide common construction interview questions and feedback on their answers.`;
      default:
        return `${base} You provide expert advice on construction trades, project management, building regulations (UK focus), and career development.`;
    }
  };

  const handleSend = async (overrideInput?: string) => {
    const messageToSend = overrideInput || input;
    if (!messageToSend.trim() || isLoading) return;

    const userMessage = messageToSend.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const modelName = "gemini-3-flash-preview";
      
      const chat = ai.chats.create({
        model: modelName,
        config: {
          systemInstruction: getSystemInstruction(mode),
        },
      });

      const response = await chat.sendMessage({ message: userMessage });
      const aiText = response.text || "I'm sorry, I couldn't process that request.";
      
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Connection to the neural nexus lost. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const setAssistantMode = (newMode: AssistantMode) => {
    setMode(newMode);
    let welcomeText = "";
    switch (newMode) {
      case 'cv': welcomeText = "C.V. BUILDER ACTIVATED. Please tell me your trade and years of experience to begin your professional profile."; break;
      case 'cover-letter': welcomeText = "COVER LETTER ENGINE ONLINE. What role are you applying for, and what is your main selling point?"; break;
      case 'interview': welcomeText = "INTERVIEW SIMULATOR READY. Tell me the role you are preparing for, and I will start the mock session."; break;
      default: welcomeText = "Neural Nexus reset to general intelligence mode. How can I help you build today?";
    }
    setMessages(prev => [...prev, { role: 'model', text: welcomeText }]);
  };

  const clearChat = () => {
    setMessages([{ role: 'model', text: 'Nexus reset. How can I help you build today?' }]);
    setMode('general');
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <section className="philosophy-section !p-0 !bg-transparent">
        <div className="philosophy-container">
          <div className="prism-line"></div>
          <h1 className="philosophy-headline !text-5xl mb-2">🤖 BUILD WITH AI</h1>
          <p className="philosophy-subheading !mb-12">
            ✦ Neural Nexus | C.V. Builder | Cover Letter Engine | Career Intelligence ✦
          </p>

          <div className="spider-container flex flex-col h-[700px] overflow-hidden">
            {/* Chat Header */}
            <div className="p-4 border-b border-metal-dark bg-carbon-medium/50 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-purple/20 flex items-center justify-center text-accent-purple border border-accent-purple/30">
                    <Bot size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-accent-cyan">
                      {mode === 'general' ? 'Neural Assistant' : `${mode.replace('-', ' ')} Mode`.toUpperCase()}
                    </h3>
                    <span className="text-[10px] text-accent-green flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse"></span> Online
                    </span>
                  </div>
                </div>
                <button 
                  onClick={clearChat}
                  className="p-2 text-text-dim hover:text-accent-red transition-colors"
                  title="Clear History"
                >
                  <Trash2 size={20} />
                </button>
              </div>

              {/* Mode Selectors */}
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => setAssistantMode('cv')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                    mode === 'cv' ? 'bg-accent-purple text-white border-accent-purple' : 'bg-carbon-dark text-text-secondary border-metal-dark hover:border-accent-purple'
                  }`}
                >
                  <FileText size={14} /> C.V. Builder
                </button>
                <button 
                  onClick={() => setAssistantMode('cover-letter')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                    mode === 'cover-letter' ? 'bg-accent-blue text-white border-accent-blue' : 'bg-carbon-dark text-text-secondary border-metal-dark hover:border-accent-blue'
                  }`}
                >
                  <PenTool size={14} /> Cover Letter
                </button>
                <button 
                  onClick={() => setAssistantMode('interview')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                    mode === 'interview' ? 'bg-accent-green text-white border-accent-green' : 'bg-carbon-dark text-text-secondary border-metal-dark hover:border-accent-green'
                  }`}
                >
                  <Briefcase size={14} /> Interview Prep
                </button>
                <button 
                  onClick={() => setAssistantMode('general')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                    mode === 'general' ? 'bg-accent-cyan text-black border-accent-cyan' : 'bg-carbon-dark text-text-secondary border-metal-dark hover:border-accent-cyan'
                  }`}
                >
                  <Zap size={14} /> General AI
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-metal-dark bg-black/20">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center border ${
                      msg.role === 'user' 
                        ? 'bg-accent-blue/20 border-accent-blue/30 text-accent-blue' 
                        : 'bg-accent-purple/20 border-accent-purple/30 text-accent-purple'
                    }`}>
                      {msg.role === 'user' ? <User size={16} /> : <Sparkles size={16} />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.role === 'user'
                        ? 'bg-accent-blue/10 border border-accent-blue/20 text-text-primary rounded-tr-none'
                        : 'bg-carbon-medium/80 border border-metal-dark text-text-secondary rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-3 items-center text-accent-purple">
                    <Loader2 size={20} className="animate-spin" />
                    <span className="text-xs font-mono uppercase tracking-widest">Neural Processing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-6 border-t border-metal-dark bg-carbon-dark/50">
              <div className="relative flex items-center gap-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={
                    mode === 'cv' ? "Enter your experience or trade details..." :
                    mode === 'cover-letter' ? "Enter the job title and your strengths..." :
                    mode === 'interview' ? "Answer the question or ask for a role..." :
                    "Ask the Nexus about your project or career..."
                  }
                  className="flex-1 bg-carbon-medium border-2 border-metal-dark rounded-full py-4 px-8 text-sm focus:outline-none focus:border-accent-purple transition-all text-white placeholder:text-text-dim"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={isLoading || !input.trim()}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                    isLoading || !input.trim()
                      ? 'bg-metal-dark text-text-dim cursor-not-allowed'
                      : 'bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-lg shadow-accent-purple/20 hover:scale-110'
                  }`}
                >
                  <Send size={20} />
                </button>
              </div>
              <p className="mt-3 text-[10px] text-center text-text-dim uppercase tracking-widest">
                CONSTRUCTION BY FEDCAP Neural Engine v2.5 | Career Intelligence Module Active
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="pillar !p-6">
              <div className="text-accent-cyan mb-3"><FileText size={24} /></div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-2">C.V. Builder</h4>
              <p className="text-[10px] text-text-secondary">Generate high-impact construction C.V.s tailored to your trade.</p>
            </div>
            <div className="pillar !p-6">
              <div className="text-accent-blue mb-3"><PenTool size={24} /></div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Cover Letters</h4>
              <p className="text-[10px] text-text-secondary">Draft professional letters that highlight your site experience.</p>
            </div>
            <div className="pillar !p-6">
              <div className="text-accent-green mb-3"><Briefcase size={24} /></div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Interview Prep</h4>
              <p className="text-[10px] text-text-secondary">Practice with AI-driven mock interviews for any construction role.</p>
            </div>
            <div className="pillar !p-6">
              <div className="text-accent-purple mb-3"><GraduationCap size={24} /></div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Skill Gap</h4>
              <p className="text-[10px] text-text-secondary">Identify the certifications you need for your next career step.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
