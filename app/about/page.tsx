import Link from 'next/link';
import { ArrowLeft, Heart, Users, Target, Eye, Zap, Sparkles } from 'lucide-react';
import HamburgerMenu from '@/components/layout/HamburgerMenu';
import AnimatedSection from '@/components/landing/AnimatedSection';
import Button from '@/components/ui/Button';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFFAF0]">
      <HamburgerMenu />
      
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[#2C7A7B] hover:text-[#2C7A7B]/80 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          
          <div className="animate-fadeIn">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2D3748] mb-4">
              About UtopiaHire
            </h1>
            <p className="text-xl text-[#2D3748]/70 mb-12">
              Reimagining careers through ethical AI and human-centered design
            </p>
          </div>
          
          <AnimatedSection className="prose max-w-none">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E2E8F0] mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4A574] to-[#ED8936] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#2D3748] mb-3">Our Mission</h2>
                  <p className="text-[#2D3748]/70 leading-relaxed mb-3">
                    UtopiaHire exists to dismantle barriers in employment equity. We believe that talent knows no boundaries, yet emerging markets face unique challenges: limited access to quality career tools, algorithmic bias in hiring, and a lack of personalized guidance.
                  </p>
                  <p className="text-[#2D3748]/70 leading-relaxed">
                    Our mission is to bridge this gap by providing AI-powered career solutions that are transparent, fair, and culturally aware. We empower job seekers in Sub-Saharan Africa and the MENA region to compete on a global stage with confidence and authenticity.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E2E8F0] mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2C7A7B] to-[#3182CE] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#2D3748] mb-3">Our Vision</h2>
                  <p className="text-[#2D3748]/70 leading-relaxed">
                    We envision a world where geographic location, socioeconomic background, or lack of access to premium career services never determine someone&apos;s employment potential. UtopiaHire strives to become the trusted companion for millions of job seekers, helping them discover opportunities, prepare confidently, and succeed authentically in the global job market.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E2E8F0] mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#38A169] to-[#48BB78] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#2D3748] mb-3">Our Core Values</h2>
                  <div className="space-y-4 text-[#2D3748]/70">
                    <div>
                      <h3 className="font-semibold text-[#2D3748] mb-1 flex items-center gap-2">
                        <Target className="w-4 h-4 text-[#2C7A7B]" />
                        Fairness
                      </h3>
                      <p>We eliminate bias from every decision. Our AI is audited for fairness, and our algorithms prioritize equal opportunity for all candidates.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2D3748] mb-1 flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#38A169]" />
                        Inclusivity
                      </h3>
                      <p>We celebrate diversity and design for accessibility. Every feature considers multiple languages, abilities, and cultural contexts.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2D3748] mb-1 flex items-center gap-2">
                        <Eye className="w-4 h-4 text-[#3182CE]" />
                        Transparency
                      </h3>
                      <p>Users always know how our AI works. We explain recommendations, decisions, and data usage in clear, simple language.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2D3748] mb-1 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-[#ED8936]" />
                        Empowerment
                      </h3>
                      <p>We provide tools that matter. From resume optimization to interview prep, our features are designed to measurably improve outcomes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E2E8F0] mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#805AD5] to-[#9F7AEA] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#2D3748] mb-4">What Makes Us Different</h2>
                  <div className="space-y-3 text-[#2D3748]/70">
                    <div className="flex items-start gap-2">
                      <span className="text-[#2C7A7B] mt-1">•</span>
                      <div>
                        <span className="font-semibold text-[#2D3748]">Ethical AI First:</span> We prioritize fairness and transparency over performance metrics alone.
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#38A169] mt-1">•</span>
                      <div>
                        <span className="font-semibold text-[#2D3748]">Regionally Focused:</span> Our insights and recommendations are tailored to African and MENA job markets.
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#805AD5] mt-1">•</span>
                      <div>
                        <span className="font-semibold text-[#2D3748]">Privacy-First Design:</span> Your data is yours. We never sell or misuse personal information.
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#ED8936] mt-1">•</span>
                      <div>
                        <span className="font-semibold text-[#2D3748]">Holistic Support:</span> Beyond resume reviews, we offer interview preparation, skill analysis, and personalized career guidance.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#D4A574] via-[#2C7A7B] to-[#38A169] rounded-2xl p-10 text-center text-white shadow-xl">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Join thousands of job seekers who are already using UtopiaHire to unlock their potential.
              </p>
              <Link href="/login">
                <Button size="lg" className="bg-white text-[#2C7A7B] hover:bg-gray-100 shadow-lg">
                  Get Started Free
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
