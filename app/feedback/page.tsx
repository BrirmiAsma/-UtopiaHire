'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Send, MessageSquare } from 'lucide-react';
import HamburgerMenu from '@/components/layout/HamburgerMenu';
import Button from '@/components/ui/Button';

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', category: 'general', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-[#FFFAF0]">
      <HamburgerMenu />
      
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[#2C7A7B] hover:text-[#2C7A7B]/80 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          
          <div className="animate-fadeIn mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-[#D4A574] to-[#2C7A7B] rounded-xl flex items-center justify-center">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#2D3748]">
                Feedback
              </h1>
            </div>
            <p className="text-xl text-[#2D3748]/70">
              Help us improve UtopiaHire. Your feedback matters!
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E2E8F0] animate-slideUp">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#38A169] to-[#48BB78] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2D3748] mb-2">Thank You!</h3>
                <p className="text-[#2D3748]/70">
                  Your feedback has been received. We appreciate you taking the time to help us improve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#2D3748] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7A7B] focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#2D3748] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7A7B] focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-[#2D3748] mb-2">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7A7B] focus:border-transparent transition-all bg-white"
                  >
                    <option value="general">General Feedback</option>
                    <option value="feature">Feature Request</option>
                    <option value="bug">Bug Report</option>
                    <option value="improvement">Improvement Suggestion</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#2D3748] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7A7B] focus:border-transparent transition-all resize-none"
                    placeholder="Share your thoughts, suggestions, or concerns..."
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Feedback
                </Button>
              </form>
            )}
          </div>
          
          <div className="mt-8 bg-gradient-to-br from-[#D4A574]/10 to-[#2C7A7B]/10 rounded-2xl p-6 border border-[#E2E8F0]">
            <h3 className="font-semibold text-[#2D3748] mb-2">We Value Your Input</h3>
            <p className="text-sm text-[#2D3748]/70">
              Your feedback helps us build a better platform for job seekers across Africa and MENA. 
              We read every message and use your insights to guide our development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
