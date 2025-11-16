import { TrendingUp, BarChart3, Users, Lightbulb } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'Career Insights - UtopiaHire',
  description: 'Understand career trends and behaviors for success',
};

export default function BehaviorPage() {
  return (
    <DashboardLayout>
      <div className="px-6 sm:px-8 lg:px-12 py-12">
        <div className="mb-8 animate-fadeIn">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#805AD5] to-[#9F7AEA] rounded-xl flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#2D3748]">
                Career Insights
              </h1>
              <p className="text-[#2D3748]/70">
                Data-driven insights for your career success
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="animate-slideUp">
            <TrendingUp className="w-8 h-8 text-[#805AD5] mb-3" />
            <h3 className="text-lg font-bold text-[#2D3748] mb-2">Growing</h3>
            <p className="text-sm text-[#2D3748]/70">Market trends</p>
          </Card>
          
          <Card className="animate-slideUp delay-100">
            <Users className="w-8 h-8 text-[#3182CE] mb-3" />
            <h3 className="text-lg font-bold text-[#2D3748] mb-2">10K+</h3>
            <p className="text-sm text-[#2D3748]/70">Active job seekers</p>
          </Card>
          
          <Card className="animate-slideUp delay-200">
            <BarChart3 className="w-8 h-8 text-[#38A169] mb-3" />
            <h3 className="text-lg font-bold text-[#2D3748] mb-2">95%</h3>
            <p className="text-sm text-[#2D3748]/70">Success rate</p>
          </Card>
        </div>
        
        <Card className="mb-8 animate-slideUp delay-300">
          <h2 className="text-2xl font-bold text-[#2D3748] mb-4">Regional Trends</h2>
          <p className="text-[#2D3748]/70 mb-6">
            Stay informed about the latest career trends, in-demand skills, and success patterns across 
            Africa and MENA regions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#D4A574]/10 to-[#ED8936]/10 rounded-xl p-6 border border-[#E2E8F0]">
              <h3 className="font-semibold text-[#2D3748] mb-3">Top Growing Industries</h3>
              <ul className="space-y-2 text-[#2D3748]/70">
                <li className="flex items-center justify-between">
                  <span>Technology & Software</span>
                  <span className="text-[#38A169] font-medium">+45%</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Renewable Energy</span>
                  <span className="text-[#38A169] font-medium">+38%</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Healthcare</span>
                  <span className="text-[#38A169] font-medium">+32%</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>E-commerce</span>
                  <span className="text-[#38A169] font-medium">+28%</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-[#2C7A7B]/10 to-[#3182CE]/10 rounded-xl p-6 border border-[#E2E8F0]">
              <h3 className="font-semibold text-[#2D3748] mb-3">Most Demanded Skills</h3>
              <ul className="space-y-2 text-[#2D3748]/70">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#2C7A7B] rounded-full"></span>
                  <span>Data Analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#38A169] rounded-full"></span>
                  <span>Digital Marketing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#3182CE] rounded-full"></span>
                  <span>Project Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#805AD5] rounded-full"></span>
                  <span>Cloud Computing</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="animate-slideUp delay-400">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#38A169] to-[#48BB78] rounded-xl flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#2D3748]">Success Patterns</h2>
            </div>
            
            <p className="text-[#2D3748]/70 mb-4">
              Learn from successful career transitions in your region:
            </p>
            
            <ul className="space-y-3 text-[#2D3748]/70">
              <li className="flex items-start gap-2">
                <span className="text-[#38A169] mt-1">✓</span>
                <span>Professionals with diverse skill sets see 2x more opportunities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#38A169] mt-1">✓</span>
                <span>Regular profile updates increase visibility by 60%</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#38A169] mt-1">✓</span>
                <span>Interview preparation leads to 80% better outcomes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#38A169] mt-1">✓</span>
                <span>Networking and referrals account for 45% of placements</span>
              </li>
            </ul>
          </Card>
          
          <Card className="animate-slideUp delay-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#805AD5] to-[#9F7AEA] rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#2D3748]">Your Progress</h2>
            </div>
            
            <p className="text-[#2D3748]/70 mb-4">
              Track your career development journey:
            </p>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[#2D3748]">Profile Strength</span>
                  <span className="text-[#2D3748]/70">0%</span>
                </div>
                <div className="w-full bg-[#E2E8F0] rounded-full h-2">
                  <div className="bg-gradient-to-r from-[#2C7A7B] to-[#38A169] h-2 rounded-full" style={{ width: '0%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[#2D3748]">Interview Readiness</span>
                  <span className="text-[#2D3748]/70">0%</span>
                </div>
                <div className="w-full bg-[#E2E8F0] rounded-full h-2">
                  <div className="bg-gradient-to-r from-[#D4A574] to-[#ED8936] h-2 rounded-full" style={{ width: '0%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[#2D3748]">Skills Development</span>
                  <span className="text-[#2D3748]/70">0%</span>
                </div>
                <div className="w-full bg-[#E2E8F0] rounded-full h-2">
                  <div className="bg-gradient-to-r from-[#805AD5] to-[#9F7AEA] h-2 rounded-full" style={{ width: '0%' }}></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
