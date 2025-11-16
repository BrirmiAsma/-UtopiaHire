'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Home, Users, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'About Us', href: '/about', icon: Users },
  { label: 'Feedback', href: '/feedback', icon: MessageCircle },
];

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 left-6 z-50 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2C7A7B]"
        aria-label="Open menu"
        aria-expanded={isOpen}
      >
        <Menu className="w-6 h-6 text-[#2C7A7B]" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fadeIn"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav
        className={cn(
          'fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        aria-label="Main navigation"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-[#E2E8F0]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D4A574] to-[#2C7A7B] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <h2 className="text-xl font-bold text-[#2D3748]">UtopiaHire</h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-[#E2E8F0] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2C7A7B]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-[#2D3748]" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6">
            <ul className="space-y-2 px-4">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 px-4 py-3 rounded-lg text-[#2D3748] hover:bg-[#E2E8F0] transition-all duration-200 group"
                    >
                      <Icon className="w-5 h-5 text-[#2C7A7B] group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="p-6 border-t border-[#E2E8F0]">
            <div className="bg-gradient-to-r from-[#D4A574]/10 to-[#2C7A7B]/10 rounded-lg p-4">
              <p className="text-sm text-[#2D3748] mb-2">
                Building fair & inclusive employment opportunities across Africa & MENA
              </p>
              <p className="text-xs text-[#2C7A7B] font-medium">
                Powered by Ethical AI
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
