import { Sparkles, Upload, CheckCircle, Zap } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Profile Enhancement - UtopiaHire',
  description: 'Enhance your professional profile with AI-driven suggestions',
};

export default function EnhancementPage() {
  return (
    <DashboardLayout>
      <div className="px-6 sm:px-8 lg:px-12 py-12">
        <div className="mb-8 animate-fadeIn">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#38A169] to-[#48BB78] rounded-xl flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#2D3748]">
                Profile Enhancement
              </h1>
              <p className="text-[#2D3748]/70">
                AI-powered improvements for your professional profile
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="animate-slideUp">
            <Sparkles className="w-8 h-8 text-[#38A169] mb-3" />
            <h3 className="text-lg font-bold text-[#2D3748] mb-2">0%</h3>
            <p className="text-sm text-[#2D3748]/70">Profile completion</p>
          </Card>
          
          <Card className="animate-slideUp delay-100">
            <Zap className="w-8 h-8 text-[#ED8936] mb-3" />
            <h3 className="text-lg font-bold text-[#2D3748] mb-2">0</h3>
            <p className="text-sm text-[#2D3748]/70">Improvements suggested</p>
          </Card>
          
          <Card className="animate-slideUp delay-200">
            <CheckCircle className="w-8 h-8 text-[#2C7A7B] mb-3" />
            <h3 className="text-lg font-bold text-[#2D3748] mb-2">0</h3>
            <p className="text-sm text-[#2D3748]/70">Improvements applied</p>
          </Card>
        </div>
        
        <Card className="mb-8 animate-slideUp delay-300">
          <h2 className="text-2xl font-bold text-[#2D3748] mb-4">Upload Your Profile</h2>
          <p className="text-[#2D3748]/70 mb-6">
            Upload your resume or professional profile and our AI will analyze it to provide personalized 
            enhancement suggestions tailored to your industry and region.
          </p>
          
          <div className="border-2 border-dashed border-[#E2E8F0] rounded-xl p-12 text-center hover:border-[#2C7A7B] transition-colors cursor-pointer">
            <Upload className="w-12 h-12 text-[#2C7A7B] mx-auto mb-4" />
            <p className="text-[#2D3748] font-medium mb-2">
              Click to upload or drag and drop
            </p>
            <p className="text-sm text-[#2D3748]/70">
              PDF, DOCX, or TXT (Max 5MB)
            </p>
          </div>
          
          <div className="mt-6">
            <Button size="lg">
              <Sparkles className="w-5 h-5 mr-2" />
              Analyze Profile
            </Button>
          </div>
        </Card>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="animate-slideUp delay-400">
            <h2 className="text-2xl font-bold text-[#2D3748] mb-4">Enhancement Areas</h2>
            <ul className="space-y-3 text-[#2D3748]/70">
              <li className="flex items-start gap-2">
                <span className="text-[#38A169] mt-1">✓</span>
                <span><strong>Skills optimization</strong> - Highlight key competencies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#38A169] mt-1">✓</span>
                <span><strong>Language refinement</strong> - Professional tone and clarity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#38A169] mt-1">✓</span>
                <span><strong>Achievement focus</strong> - Quantify your impact</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#38A169] mt-1">✓</span>
                <span><strong>Regional relevance</strong> - Context-aware suggestions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#38A169] mt-1">✓</span>
                <span><strong>Keyword optimization</strong> - ATS-friendly content</span>
              </li>
            </ul>
          </Card>
          
          <Card className="animate-slideUp delay-500">
            <h2 className="text-2xl font-bold text-[#2D3748] mb-4">AI-Powered Features</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#38A169] to-[#48BB78] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D3748] mb-1">Smart Suggestions</h3>
                  <p className="text-[#2D3748]/70 text-sm">Context-aware recommendations based on your industry</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2C7A7B] to-[#3182CE] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D3748] mb-1">Instant Analysis</h3>
                  <p className="text-[#2D3748]/70 text-sm">Get results in seconds with our advanced AI</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#805AD5] to-[#9F7AEA] rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D3748] mb-1">Apply Changes</h3>
                  <p className="text-[#2D3748]/70 text-sm">One-click application of suggested improvements</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
