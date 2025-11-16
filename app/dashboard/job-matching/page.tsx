import { Briefcase, Search, MapPin, TrendingUp } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Job Matching - UtopiaHire',
  description: 'Find jobs that match your skills and aspirations',
};

export default function JobMatchingPage() {
  return (
    <DashboardLayout>
      <div className="px-6 sm:px-8 lg:px-12 py-12">
        <div className="mb-8 animate-fadeIn">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#2C7A7B] to-[#3182CE] rounded-xl flex items-center justify-center">
              <Briefcase className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#2D3748]">
                Job Matching
              </h1>
              <p className="text-[#2D3748]/70">
                Discover opportunities aligned with your career goals
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="animate-slideUp">
            <Search className="w-8 h-8 text-[#2C7A7B] mb-3" />
            <h3 className="text-lg font-bold text-[#2D3748] mb-2">0 Matches</h3>
            <p className="text-sm text-[#2D3748]/70">Active job matches</p>
          </Card>
          
          <Card className="animate-slideUp delay-100">
            <MapPin className="w-8 h-8 text-[#38A169] mb-3" />
            <h3 className="text-lg font-bold text-[#2D3748] mb-2">All Regions</h3>
            <p className="text-sm text-[#2D3748]/70">Africa & MENA</p>
          </Card>
          
          <Card className="animate-slideUp delay-200">
            <TrendingUp className="w-8 h-8 text-[#ED8936] mb-3" />
            <h3 className="text-lg font-bold text-[#2D3748] mb-2">Growing</h3>
            <p className="text-sm text-[#2D3748]/70">Market opportunities</p>
          </Card>
        </div>
        
        <Card className="mb-8 animate-slideUp delay-300">
          <h2 className="text-2xl font-bold text-[#2D3748] mb-4">Set Your Preferences</h2>
          <p className="text-[#2D3748]/70 mb-6">
            Tell us about your ideal job and we&apos;ll match you with relevant opportunities across Africa and MENA regions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-[#2D3748] mb-2">
                Job Title / Role
              </label>
              <input
                type="text"
                placeholder="e.g., Software Engineer"
                className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7A7B]"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#2D3748] mb-2">
                Preferred Location
              </label>
              <input
                type="text"
                placeholder="e.g., Nairobi, Kenya"
                className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7A7B]"
              />
            </div>
          </div>
          
          <Button size="lg">
            <Search className="w-5 h-5 mr-2" />
            Find Jobs
          </Button>
        </Card>
        
        <Card className="animate-slideUp delay-400">
          <h2 className="text-2xl font-bold text-[#2D3748] mb-4">How It Works</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#2C7A7B] to-[#3182CE] rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-[#2D3748] mb-1">Set Your Preferences</h3>
                <p className="text-[#2D3748]/70 text-sm">Define your ideal role, location, and salary expectations</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#38A169] to-[#48BB78] rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-[#2D3748] mb-1">AI Matches Jobs</h3>
                <p className="text-[#2D3748]/70 text-sm">Our ethical AI finds opportunities that fit your profile</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#805AD5] to-[#9F7AEA] rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-[#2D3748] mb-1">Apply with Confidence</h3>
                <p className="text-[#2D3748]/70 text-sm">Get matched with verified, fair employers</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
