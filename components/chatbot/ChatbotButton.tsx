'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import VoiceChatInterface from './VoiceChatInterface';

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chatbot Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-[#D4A574] to-[#2C7A7B] rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
          aria-label="Open AI Voice Assistant"
        >
          <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
          
          {/* Pulse Animation */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D4A574] to-[#2C7A7B] animate-ping opacity-75"></span>
        </button>
      )}

      {/* Voice Chat Interface */}
      {isOpen && (
        <VoiceChatInterface onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}
