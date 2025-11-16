'use client';

import { useState, useEffect } from 'react';
import { X, Mic, MicOff, Volume2, Sparkles, User, Bot } from 'lucide-react';
import Card from '@/components/ui/Card';

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

interface VoiceChatInterfaceProps {
  onClose: () => void;
}

export default function VoiceChatInterface({ onClose }: VoiceChatInterfaceProps) {
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: 'Hello! I\'m your AI career assistant. How can I help you today? You can speak to me by clicking the microphone button.',
      timestamp: new Date(),
    },
  ]);
  const [audioLevel, setAudioLevel] = useState(0);

  // Simulate audio level animation when listening
  useEffect(() => {
    if (isListening) {
      const interval = setInterval(() => {
        setAudioLevel(Math.random() * 100);
      }, 100);
      return () => clearInterval(interval);
    } else {
      setAudioLevel(0);
    }
  }, [isListening]);

  const handleMicrophoneToggle = () => {
    setIsListening(!isListening);
    
    // Simulate adding a message when stopping
    if (isListening) {
      // User finished speaking
      setTimeout(() => {
        const userMessage: Message = {
          id: Date.now().toString(),
          type: 'user',
          text: 'This is a placeholder for your speech input...',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, userMessage]);
        
        // Simulate bot response
        setTimeout(() => {
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            type: 'bot',
            text: 'I understand. This is a simulated response. The actual AI logic will be implemented later.',
            timestamp: new Date(),
          };
          setMessages(prev => [...prev, botMessage]);
        }, 1500);
      }, 500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <Card className="w-full max-w-2xl h-[600px] flex flex-col shadow-2xl animate-slideUp">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E2E8F0] bg-gradient-to-r from-[#D4A574]/10 to-[#2C7A7B]/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#D4A574] to-[#2C7A7B] rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#2D3748]">AI Voice Assistant</h2>
              <p className="text-sm text-[#2D3748]/60">
                {isListening ? 'Listening...' : 'Ready to help'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-[#E2E8F0] transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-[#2D3748]" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {/* Avatar */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.type === 'user'
                    ? 'bg-gradient-to-br from-[#3182CE] to-[#805AD5]'
                    : 'bg-gradient-to-br from-[#D4A574] to-[#2C7A7B]'
                }`}
              >
                {message.type === 'user' ? (
                  <User className="w-5 h-5 text-white" />
                ) : (
                  <Bot className="w-5 h-5 text-white" />
                )}
              </div>

              {/* Message Bubble */}
              <div
                className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                  message.type === 'user'
                    ? 'bg-gradient-to-br from-[#3182CE] to-[#805AD5] text-white'
                    : 'bg-[#F7FAFC] text-[#2D3748]'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <span className={`text-xs mt-1 block ${message.type === 'user' ? 'text-white/70' : 'text-[#2D3748]/50'}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Voice Visualizer */}
        <div className="px-6 py-4 border-t border-[#E2E8F0] bg-gradient-to-r from-[#FFFAF0] to-[#F7FAFC]">
          {isListening && (
            <div className="flex items-center justify-center gap-1 mb-4 h-16">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-gradient-to-t from-[#2C7A7B] to-[#D4A574] rounded-full transition-all duration-100"
                  style={{
                    height: `${Math.random() * audioLevel + 20}%`,
                    opacity: 0.3 + Math.random() * 0.7,
                  }}
                />
              ))}
            </div>
          )}

          {/* Microphone Button */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handleMicrophoneToggle}
              className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                isListening
                  ? 'bg-gradient-to-br from-[#F56565] to-[#E53E3E] animate-pulse'
                  : 'bg-gradient-to-br from-[#D4A574] to-[#2C7A7B] hover:scale-110'
              }`}
              aria-label={isListening ? 'Stop listening' : 'Start listening'}
            >
              {isListening ? (
                <MicOff className="w-8 h-8 text-white" />
              ) : (
                <Mic className="w-8 h-8 text-white" />
              )}
            </button>
          </div>

          {/* Instructions */}
          <div className="text-center mt-4">
            <p className="text-sm text-[#2D3748]/70">
              {isListening ? (
                <>
                  <Volume2 className="inline w-4 h-4 mr-1 animate-pulse" />
                  Listening... Click to stop
                </>
              ) : (
                'Click the microphone to start speaking'
              )}
            </p>
          </div>
        </div>

        {/* Features Info */}
        <div className="px-6 py-4 bg-gradient-to-r from-[#D4A574]/5 to-[#2C7A7B]/5 border-t border-[#E2E8F0]">
          <div className="flex items-center justify-center gap-6 text-xs text-[#2D3748]/60">
            <div className="flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center gap-1">
              <Volume2 className="w-3 h-3" />
              <span>Voice Recognition</span>
            </div>
            <div className="flex items-center gap-1">
              <Bot className="w-3 h-3" />
              <span>Real-time Response</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
