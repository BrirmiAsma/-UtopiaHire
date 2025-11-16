import HamburgerMenu from '@/components/layout/HamburgerMenu';
import Hero from '@/components/landing/Hero';
import AnimatedSection from '@/components/landing/AnimatedSection';
import { Target, Shield, Users, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFAF0]">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-[#2C7A7B] focus:rounded-lg">
        Skip to main content
      </a>
      
      <HamburgerMenu />
      
      <main id="main-content">
        <Hero />
        
        <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#2D3748] mb-4">
              Why Choose UtopiaHire?
            </h2>
            <p className="text-center text-[#2D3748]/70 mb-16 max-w-2xl mx-auto">
              Built specifically for job seekers across Sub-Saharan Africa & MENA regions
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E2E8F0] hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-[#D4A574] to-[#ED8936] rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2D3748] mb-3">Fair & Transparent</h3>
                <p className="text-[#2D3748]/70">
                  Our AI ensures unbiased evaluations and transparent feedback on your career journey.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E2E8F0] hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-[#2C7A7B] to-[#3182CE] rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2D3748] mb-3">Privacy-First</h3>
                <p className="text-[#2D3748]/70">
                  Your data is encrypted and secure. We prioritize your privacy in every interaction.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E2E8F0] hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-[#38A169] to-[#48BB78] rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2D3748] mb-3">Inclusive</h3>
                <p className="text-[#2D3748]/70">
                  Designed to celebrate diversity and empower all job seekers regardless of background.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E2E8F0] hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-[#805AD5] to-[#9F7AEA] rounded-xl flex items-center justify-center mb-6">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2D3748] mb-3">Ethical AI</h3>
                <p className="text-[#2D3748]/70">
                  Powered by responsible AI that understands regional context and cultural nuances.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      
      <footer className="bg-[#2D3748] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#D4A574] to-[#2C7A7B] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">U</span>
            </div>
            <h3 className="text-2xl font-bold">UtopiaHire</h3>
          </div>
          <p className="text-white/70 mb-4">
            Building fair & inclusive employment opportunities across Africa & MENA
          </p>
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} UtopiaHire. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
