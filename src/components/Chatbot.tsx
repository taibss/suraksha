import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm your AI assistant. I can help you with information about scams, protection tips, and more. How can I assist you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setError('');

    try {
      // Get API key from environment
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      
      if (!apiKey || apiKey === 'your_gemini_api_key_here') {
        throw new Error('API key not configured. Please set VITE_GEMINI_API_KEY in .env file');
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
      
      const chat = model.startChat({
        history: messages.map(msg => ({
          role: msg.isUser ? 'user' : 'model',
          parts: [{ text: msg.text }]
        }))
      });

      const result = await chat.sendMessage(inputValue);
      const response = await result.response;
      const text = response.text();

      const botMessage: Message = {
        text: text,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (err: any) {
      console.error('Error calling Gemini API:', err);
      
      let errorMessage = 'Sorry, I encountered an error. ';
      
      if (err.message?.includes('API key')) {
        errorMessage = 'API key not configured properly. Please check your VITE_GEMINI_API_KEY in .env file';
      } else if (err.message?.includes('quota')) {
        errorMessage = 'API quota exceeded. Please try again later';
      } else if (err.message?.includes('permission')) {
        errorMessage = 'API key permission denied. Please check your API key';
      } else {
        errorMessage = 'Failed to get response from AI. Please try again';
      }
      
      const errorMessageObj: Message = {
        text: errorMessage,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessageObj]);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h3>AI Assistant</h3>
        <div className="chatbot-status">
          <span className="status-indicator"></span>
          <span>{isLoading ? 'Thinking...' : 'Online'}</span>
        </div>
      </div>
      
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`message ${message.isUser ? 'user-message' : 'bot-message'}`}
          >
            <div className="message-content">
              {message.text}
            </div>
            <div className="message-time">
              {message.timestamp.toLocaleTimeString()}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="message bot-message">
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="chatbot-input">
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask me anything about scams, protection, or safety..."
          className="message-input"
          rows={2}
          disabled={isLoading}
        />
        <button 
          onClick={handleSendMessage}
          disabled={isLoading || !inputValue.trim()}
          className="send-btn"
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
      
      {error && (
        <div className="error-banner">
          {error}
        </div>
      )}
    </div>
  );
};

export default Chatbot;