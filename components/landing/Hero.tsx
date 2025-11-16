'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4A574] via-[#2C7A7B] to-[#38A169] opacity-90"></div>
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Ethical AI for Career Success</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Welcome to UtopiaHire
          </h1>
          
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed animate-slideUp delay-100">
            UtopiaHire is your personal career architect, powered by ethical AI. We help job seekers across Sub-Saharan Africa and the MENA region enhance their resumes, highlight their unique skills, and connect with regional job opportunities that match their potential. Our mission is to promote fairness and inclusivity in employment, one opportunity at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp delay-200">
            <Link href="/login">
              <Button size="lg" className="bg-white text-[#2C7A7B] hover:bg-gray-100 shadow-xl min-w-[200px]">
                Sign In
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slideUp delay-300">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">10K+</div>
            <div className="text-white/80">Job Seekers Empowered</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">95%</div>
            <div className="text-white/80">Fairness Score</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">20+</div>
            <div className="text-white/80">Countries Served</div>
          </div>
        </div>
      </div>
    </section>
  );
}
