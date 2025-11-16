import { Briefcase } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import JobMatchingInterface from '@/components/job-matching/JobMatchingInterface';

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
        <JobMatchingInterface />
      </div>
    </DashboardLayout>
  );
}
