'use client';

import { useState } from 'react';
import { MessageSquare, Play, Clock, BarChart3, Mic, Code } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import InterviewInterface from '@/components/interview/InterviewInterface';
import ProfileDataCollector from '@/components/interview/ProfileDataCollector';
import { UserProfile } from '@/types/interviewAI';

export default function InterviewPage() {
  const [showProfileCollection, setShowProfileCollection] = useState(false);
  const [isInterviewActive, setIsInterviewActive] = useState(false);
  const [profileData, setProfileData] = useState<UserProfile | null>(null);

  const handleProfileComplete = (data: UserProfile) => {
    setProfileData(data);
    setShowProfileCollection(false);
    setIsInterviewActive(true);
  };

  if (showProfileCollection) {
    return (
      <ProfileDataCollector
        onComplete={handleProfileComplete}
        onCancel={() => setShowProfileCollection(false)}
      />
    );
  }

  if (isInterviewActive && profileData) {
    return (
      <InterviewInterface
        profileData={profileData}
        onExit={() => {
          setIsInterviewActive(false);
          setProfileData(null);
        }}
      />
    );
  }

  return (
    <DashboardLayout>
      <div className="px-6 sm:px-8 lg:px-12 py-12">
        <div className="mb-8 animate-fadeIn">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#D4A574] to-[#ED8936] rounded-xl flex items-center justify-center">
              <MessageSquare className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#2D3748]">
                Interview Simulation
              </h1>
              <p className="text-[#2D3748]/70">
                Practice and perfect your interview skills with AI
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="animate-slideUp">
            <Clock className="w-8 h-8 text-[#2C7A7B] mb-3" />
            <h3 className="text-lg font-bold text-[#2D3748] mb-2">0 Sessions</h3>
            <p className="text-sm text-[#2D3748]/70">Completed this month</p>
          </Card>
          
          <Card className="animate-slideUp delay-100">
            <BarChart3 className="w-8 h-8 text-[#38A169] mb-3" />
            <h3 className="text-lg font-bold text-[#2D3748] mb-2">--</h3>
            <p className="text-sm text-[#2D3748]/70">Average score</p>
          </Card>
          
          <Card className="animate-slideUp delay-200">
            <Play className="w-8 h-8 text-[#ED8936] mb-3" />
            <h3 className="text-lg font-bold text-[#2D3748] mb-2">Ready</h3>
            <p className="text-sm text-[#2D3748]/70">Start your first session</p>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="animate-slideUp delay-300">
            <h2 className="text-2xl font-bold text-[#2D3748] mb-4">Start New Interview</h2>
            <p className="text-[#2D3748]/70 mb-6">
              Our AI interview includes voice questions for behavioral assessment and coding challenges for technical evaluation. Get real-time feedback and improve your skills!
            </p>
            <Button size="lg" onClick={() => setShowProfileCollection(true)}>
              <Play className="w-5 h-5 mr-2" />
              Start Interview
            </Button>
          </Card>
          
          <Card className="animate-slideUp delay-400">
            <h2 className="text-2xl font-bold text-[#2D3748] mb-4">Interview Format</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#3182CE] to-[#805AD5] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mic className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D3748] mb-1">Questions 1-3: Voice</h3>
                  <p className="text-sm text-[#2D3748]/70">Answer behavioral questions verbally using your microphone</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#38A169] to-[#48BB78] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D3748] mb-1">Questions 4+: Coding</h3>
                  <p className="text-sm text-[#2D3748]/70">Submit Python code solutions with syntax highlighting</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="animate-slideUp delay-500">
          <h2 className="text-2xl font-bold text-[#2D3748] mb-4">Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#2D3748]/70">
            <li className="flex items-start gap-2">
              <span className="text-[#38A169] mt-1">✓</span>
              <span>ChatGPT-style interface with message bubbles</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#38A169] mt-1">✓</span>
              <span>Real-time voice recording with visualizer</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#38A169] mt-1">✓</span>
              <span>Python code editor with syntax highlighting</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#38A169] mt-1">✓</span>
              <span>Progress tracking sidebar</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#38A169] mt-1">✓</span>
              <span>Instant AI feedback and scoring</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#38A169] mt-1">✓</span>
              <span>JSON output for backend integration</span>
            </li>
          </ul>
        </Card>
      </div>
    </DashboardLayout>
  );
}
