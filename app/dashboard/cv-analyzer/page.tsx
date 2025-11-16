import { FileText, Upload, BarChart3, Award } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'CV Analyzer - UtopiaHire',
  description: 'Get detailed analysis of your CV with actionable recommendations',
};

export default function CVAnalyzerPage() {
  return (
    <DashboardLayout>
      <div className="px-6 sm:px-8 lg:px-12 py-12">
        <div className="mb-8 animate-fadeIn">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#3182CE] to-[#805AD5] rounded-xl flex items-center justify-center">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#2D3748]">
                CV Analyzer
              </h1>
              <p className="text-[#2D3748]/70">
                Get comprehensive analysis and actionable insights
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="animate-slideUp">
            <BarChart3 className="w-8 h-8 text-[#3182CE] mb-3" />
            <h3 className="text-lg font-bold text-[#2D3748] mb-2">--</h3>
            <p className="text-sm text-[#2D3748]/70">Overall CV score</p>
          </Card>
          
          <Card className="animate-slideUp delay-100">
            <Award className="w-8 h-8 text-[#38A169] mb-3" />
            <h3 className="text-lg font-bold text-[#2D3748] mb-2">0</h3>
            <p className="text-sm text-[#2D3748]/70">CVs analyzed</p>
          </Card>
          
          <Card className="animate-slideUp delay-200">
            <FileText className="w-8 h-8 text-[#805AD5] mb-3" />
            <h3 className="text-lg font-bold text-[#2D3748] mb-2">Ready</h3>
            <p className="text-sm text-[#2D3748]/70">Upload your CV</p>
          </Card>
        </div>
        
        <Card className="mb-8 animate-slideUp delay-300">
          <h2 className="text-2xl font-bold text-[#2D3748] mb-4">Upload Your CV</h2>
          <p className="text-[#2D3748]/70 mb-6">
            Upload your CV and receive a detailed analysis covering format, content, keywords, and overall effectiveness. 
            Our AI provides specific recommendations to improve your chances of success.
          </p>
          
          <div className="border-2 border-dashed border-[#E2E8F0] rounded-xl p-12 text-center hover:border-[#3182CE] transition-colors cursor-pointer mb-6">
            <Upload className="w-12 h-12 text-[#3182CE] mx-auto mb-4" />
            <p className="text-[#2D3748] font-medium mb-2">
              Drop your CV here or click to browse
            </p>
            <p className="text-sm text-[#2D3748]/70">
              Supports PDF, DOCX (Max 10MB)
            </p>
          </div>
          
          <Button size="lg">
            <FileText className="w-5 h-5 mr-2" />
            Analyze CV
          </Button>
        </Card>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="animate-slideUp delay-400">
            <h2 className="text-2xl font-bold text-[#2D3748] mb-4">What We Analyze</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#2D3748] mb-1 flex items-center gap-2">
                  <span className="text-[#3182CE]">●</span> Structure & Format
                </h3>
                <p className="text-[#2D3748]/70 text-sm ml-5">
                  Layout, readability, and professional appearance
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#2D3748] mb-1 flex items-center gap-2">
                  <span className="text-[#38A169]">●</span> Content Quality
                </h3>
                <p className="text-[#2D3748]/70 text-sm ml-5">
                  Clarity, relevance, and impact of your experience
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#2D3748] mb-1 flex items-center gap-2">
                  <span className="text-[#805AD5]">●</span> Keywords & ATS
                </h3>
                <p className="text-[#2D3748]/70 text-sm ml-5">
                  Optimization for applicant tracking systems
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#2D3748] mb-1 flex items-center gap-2">
                  <span className="text-[#ED8936]">●</span> Skills Match
                </h3>
                <p className="text-[#2D3748]/70 text-sm ml-5">
                  Alignment with industry standards and job requirements
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#2D3748] mb-1 flex items-center gap-2">
                  <span className="text-[#2C7A7B]">●</span> Regional Context
                </h3>
                <p className="text-[#2D3748]/70 text-sm ml-5">
                  Suitability for Africa & MENA job markets
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="animate-slideUp delay-500">
            <h2 className="text-2xl font-bold text-[#2D3748] mb-4">Analysis Benefits</h2>
            <ul className="space-y-3 text-[#2D3748]/70">
              <li className="flex items-start gap-2">
                <span className="text-[#38A169] mt-1">✓</span>
                <span>Comprehensive scoring across multiple dimensions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#38A169] mt-1">✓</span>
                <span>Specific, actionable recommendations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#38A169] mt-1">✓</span>
                <span>Comparison with industry best practices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#38A169] mt-1">✓</span>
                <span>Keyword gap analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#38A169] mt-1">✓</span>
                <span>Before/after improvement tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#38A169] mt-1">✓</span>
                <span>Regional market insights</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
