'use client';

import { Sparkles, TrendingUp } from 'lucide-react';

export default function WelcomeHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#D4A574] via-[#2C7A7B] to-[#38A169] overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="relative z-10 px-6 sm:px-8 lg:px-12 py-12">
        <div className="animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Your Career Journey Starts Here</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Welcome to UtopiaHire
          </h1>
          
          <p className="text-lg text-white/90 max-w-2xl mb-8">
            Empowering your career with ethical AI. Choose a module below to get started on your path to success.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 border border-white/20">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-white" />
                <div>
                  <div className="text-2xl font-bold text-white">95%</div>
                  <div className="text-sm text-white/80">Success Rate</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 border border-white/20">
              <div className="flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-white" />
                <div>
                  <div className="text-2xl font-bold text-white">AI-Powered</div>
                  <div className="text-sm text-white/80">Career Tools</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
