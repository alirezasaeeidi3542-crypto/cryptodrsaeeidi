import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, Mic, Image as ImageIcon } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

const AiAgentPage: React.FC = () => {
  const { t } = useTranslation();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ id: '1', text: t('ai_agent.greeting'), sender: 'bot' }]);
  }, [t]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage: Message = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate API call to AI agent
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: `${t('ai_agent.response_prefix')} "${userMessage.text}"`,
        sender: 'bot',
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const promptSuggestions = [
    t('ai_agent.prompt1'),
    t('ai_agent.prompt2'),
    t('ai_agent.prompt3'),
    t('ai_agent.prompt4'),
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900">{t('ai_agent.title')}</h1>
        <p className="mt-1 text-gray-600">{t('ai_agent.subtitle')}</p>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <AnimatePresence>
          {messages.map((msg, index) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`flex items-start gap-4 ${msg.sender === 'user' ? 'justify-end' : ''}`}
            >
              {msg.sender === 'bot' && (
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-6 h-6 text-white" />
                </div>
              )}
              <div className={`max-w-2xl p-4 rounded-2xl ${msg.sender === 'user' ? 'bg-primary-600 text-white' : 'bg-white shadow-sm'}`}>
                <p>{msg.text}</p>
              </div>
              {msg.sender === 'user' && (
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-gray-600" />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      <div className="p-6 bg-white border-t border-gray-200">
        <div className="mb-4 grid grid-cols-2 lg:grid-cols-4 gap-2">
            {promptSuggestions.map((prompt, i) => (
                <button key={i} onClick={() => setInput(prompt)} className="text-sm text-left p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    {prompt}
                </button>
            ))}
        </div>
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder={t('ai_agent.placeholder')}
            className="w-full py-3 pr-4 pl-24 rounded-full border-gray-300 focus:ring-2 focus:ring-primary-500"
          />
          <div className="absolute inset-y-0 left-2 flex items-center gap-1">
            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500">
                <Mic className="w-5 h-5"/>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500">
                <ImageIcon className="w-5 h-5"/>
            </button>
            <button
              onClick={handleSend}
              className="p-2 rounded-full bg-primary-600 text-white hover:bg-primary-700 disabled:bg-gray-300"
              disabled={!input.trim()}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiAgentPage;
