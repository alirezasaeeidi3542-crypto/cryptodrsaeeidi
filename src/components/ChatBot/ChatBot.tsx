import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Minimize2,
  Maximize2,
  Sparkles,
  Package,
  DollarSign,
  HelpCircle
} from 'lucide-react';
import { ChatMessage } from '../../types';

const ChatBot: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([
      {
        id: '1',
        message: t('chatbot.greeting'),
        sender: 'bot',
        timestamp: new Date(),
        type: 'text'
      }
    ]);
  }, [t]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickActions = [
    { icon: Package, text: t('chatbot.quick_actions.modules'), action: 'modules' },
    { icon: DollarSign, text: t('chatbot.quick_actions.pricing'), action: 'pricing' },
    { icon: HelpCircle, text: t('chatbot.quick_actions.help'), action: 'help' },
    { icon: Sparkles, text: t('chatbot.quick_actions.ai_features'), action: 'ai_features' }
  ];

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('ماژول') || lowerMessage.includes('module')) return t('chatbot.responses.modules');
    if (lowerMessage.includes('قیمت') || lowerMessage.includes('price') || lowerMessage.includes('pricing')) return t('chatbot.responses.pricing');
    if (lowerMessage.includes('شروع') || lowerMessage.includes('help') || lowerMessage.includes('راهنما')) return t('chatbot.responses.help');
    if (lowerMessage.includes('ai') || lowerMessage.includes('هوش') || lowerMessage.includes('مصنوعی')) return t('chatbot.responses.ai');
    if (lowerMessage.includes('google') || lowerMessage.includes('sheets') || lowerMessage.includes('شیت')) return t('chatbot.responses.google_sheets');
    if (lowerMessage.includes('سلام') || lowerMessage.includes('hello') || lowerMessage.includes('hi')) return t('chatbot.responses.greeting');
    if (lowerMessage.includes('پشتیبانی') || lowerMessage.includes('support')) return t('chatbot.responses.support');
    
    return t('chatbot.responses.fallback');
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      message: message,
      sender: 'user',
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    const currentMessage = message;
    setMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        message: generateBotResponse(currentMessage),
        sender: 'bot',
        timestamp: new Date(),
        type: 'text'
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickAction = (action: string) => {
    let actionMessage = '';
    switch (action) {
      case 'modules': actionMessage = t('chatbot.quick_actions.modules'); break;
      case 'pricing': actionMessage = t('chatbot.quick_actions.pricing'); break;
      case 'help': actionMessage = t('chatbot.quick_actions.help'); break;
      case 'ai-features': actionMessage = t('chatbot.quick_actions.ai_features'); break;
    }
    
    const userMessage: ChatMessage = { id: Date.now().toString(), message: actionMessage, sender: 'user', timestamp: new Date(), type: 'text' };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: ChatMessage = { id: (Date.now() + 1).toString(), message: generateBotResponse(actionMessage), sender: 'bot', timestamp: new Date(), type: 'text' };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 left-6 rtl:left-auto rtl:right-6 z-50 w-14 h-14 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${isOpen ? 'hidden' : 'flex'}`}
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-success-500 rounded-full animate-pulse"></span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className={`fixed bottom-6 left-6 rtl:left-auto rtl:right-6 z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 ${isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'} transition-all duration-300 flex flex-col`}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-t-2xl flex-shrink-0">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"><Bot className="w-5 h-5" /></div>
                <div><h3 className="font-semibold">{t('chatbot.title')}</h3><p className="text-xs text-white/80">{t('chatbot.status')}</p></div>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <button onClick={() => setIsMinimized(!isMinimized)} className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors">{isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}</button>
                <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"><X className="w-4 h-4" /></button>
              </div>
            </div>

            {!isMinimized && (
              <>
                <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`flex items-start space-x-2 rtl:space-x-reverse max-w-xs ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.sender === 'user' ? 'bg-primary-500 text-white' : 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'}`}>{msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}</div>
                        <div className={`p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
                          <p className="text-sm leading-relaxed">{msg.message}</p>
                          <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-white/70' : 'text-gray-500'}`}>{msg.timestamp.toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' })}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-2 rtl:space-x-reverse">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white flex items-center justify-center"><Bot className="w-4 h-4" /></div>
                        <div className="bg-gray-100 p-3 rounded-2xl">
                          <div className="flex space-x-1 rtl:space-x-reverse">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <div className="px-4 py-2 border-t border-gray-200">
                  <p className="text-xs text-gray-500 mb-2">{t('chatbot.quick_actions_title')}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickActions.map((action, index) => {
                      const Icon = action.icon;
                      return (
                        <button key={index} onClick={() => handleQuickAction(action.action)} className="flex items-center space-x-2 rtl:space-x-reverse p-2 text-xs bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                          <Icon className="w-4 h-4 text-primary-500" />
                          <span className="text-gray-700">{action.text}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="p-4 border-t border-gray-200">
                  <div className="flex space-x-2 rtl:space-x-reverse">
                    <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} onKeyPress={handleKeyPress} placeholder={t('chatbot.placeholder')} className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm" />
                    <button onClick={handleSendMessage} disabled={!message.trim() || isTyping} className="w-10 h-10 bg-primary-500 hover:bg-primary-600 disabled:bg-gray-300 text-white rounded-full flex items-center justify-center transition-colors"><Send className="w-4 h-4" /></button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
