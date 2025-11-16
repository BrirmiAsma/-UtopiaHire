'use client';

import { useState, useEffect, useRef } from 'react';
import { FileText, Send, Download, Sparkles } from 'lucide-react';
import MessageBubble from '@/components/interview/MessageBubble';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

// Types
type MessageRole = 'assistant' | 'user';
type MessageType = 'text';

interface Question {
  id: number;
  text: string;
  field: string; // Field name for resume data
}

interface Message {
  id: string;
  role: MessageRole;
  type: MessageType;
  content: string;
  timestamp: Date;
}

interface ResumeData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  professionalSummary: string;
  skills: string;
  workExperience: string;
  education: string;
  certifications: string;
  languages: string;
}

// Resume questions
const QUESTIONS: Question[] = [
  { id: 1, text: "What's your full name?", field: 'fullName' },
  { id: 2, text: "What's your email address?", field: 'email' },
  { id: 3, text: "What's your phone number?", field: 'phone' },
  { id: 4, text: "Where are you located? (City, Country)", field: 'location' },
  { id: 5, text: "Tell me about yourself. Write a brief professional summary (2-3 sentences).", field: 'professionalSummary' },
  { id: 6, text: "What are your key skills? (List them separated by commas)", field: 'skills' },
  { id: 7, text: "Describe your work experience. Include company names, job titles, and key responsibilities.", field: 'workExperience' },
  { id: 8, text: "What's your educational background? (Degrees, institutions, years)", field: 'education' },
  { id: 9, text: "Do you have any certifications? (If none, type 'None')", field: 'certifications' },
  { id: 10, text: "What languages do you speak? (e.g., English, French, Arabic)", field: 'languages' },
];

export default function CVAnalyzerChat() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeData, setResumeData] = useState<ResumeData>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    professionalSummary: '',
    skills: '',
    workExperience: '',
    education: '',
    certifications: '',
    languages: '',
  });
  const [isComplete, setIsComplete] = useState(false);
  const [generatedResume, setGeneratedResume] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const totalQuestions = QUESTIONS.length;

  // Initialize with welcome message
  useEffect(() => {
    const welcomeMessage: Message = {
      id: 'welcome',
      role: 'assistant',
      type: 'text',
      content: "Hello! I'm here to help you create a professional resume. I'll ask you a series of questions about your background, and then I'll generate a formatted resume for you. Let's get started!",
      timestamp: new Date(),
    };

    const firstQuestion: Message = {
      id: 'q1',
      role: 'assistant',
      type: 'text',
      content: `Question ${QUESTIONS[0].id}: ${QUESTIONS[0].text}`,
      timestamp: new Date(),
    };

    setMessages([welcomeMessage, firstQuestion]);
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isSubmitting) return;

    const answer = inputValue.trim();
    setIsSubmitting(true);
    setInputValue('');

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      type: 'text',
      content: answer,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Save answer to resume data
    const currentQ = QUESTIONS[currentQuestion];
    const updatedResumeData = {
      ...resumeData,
      [currentQ.field]: answer,
    };
    setResumeData(updatedResumeData);

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Move to next question or complete
    if (currentQuestion < totalQuestions - 1) {
      const nextQuestionIndex = currentQuestion + 1;
      const nextQ = QUESTIONS[nextQuestionIndex];

      const nextQuestionMessage: Message = {
        id: `q${nextQ.id}`,
        role: 'assistant',
        type: 'text',
        content: `Question ${nextQ.id}: ${nextQ.text}`,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, nextQuestionMessage]);
      setCurrentQuestion(nextQuestionIndex);
    } else {
      // All questions answered, generate resume with updated data
      generateResume(updatedResumeData);
      setIsComplete(true);
    }

    setIsSubmitting(false);
  };

  const generateResume = (data: ResumeData = resumeData) => {
    const resume = `
╔══════════════════════════════════════════════════════════════╗
║                    PROFESSIONAL RESUME                       ║
╚══════════════════════════════════════════════════════════════╝

${data.fullName || '[Your Name]'}
${data.email || '[Email]'} | ${data.phone || '[Phone]'} | ${data.location || '[Location]'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROFESSIONAL SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.professionalSummary || '[Your professional summary]'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SKILLS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.skills || '[Your skills]'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WORK EXPERIENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.workExperience || '[Your work experience]'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EDUCATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.education || '[Your education]'}

${data.certifications && data.certifications.toLowerCase() !== 'none' ? `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CERTIFICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.certifications}
` : ''}
${data.languages ? `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LANGUAGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.languages}
` : ''}
`;

    setGeneratedResume(resume);

    const completionMessage: Message = {
      id: 'complete',
      role: 'assistant',
      type: 'text',
      content: "Perfect! I've collected all your information. Your resume has been generated below. You can review it and download it as a text file.",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, completionMessage]);
  };

  const handleDownload = () => {
    if (!generatedResume) return;
    const blob = new Blob([generatedResume], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${resumeData.fullName || 'resume'}-resume.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleStartOver = () => {
    setCurrentQuestion(0);
    setMessages([]);
    setResumeData({
      fullName: '',
      email: '',
      phone: '',
      location: '',
      professionalSummary: '',
      skills: '',
      workExperience: '',
      education: '',
      certifications: '',
      languages: '',
    });
    setIsComplete(false);
    setGeneratedResume('');

    const welcomeMessage: Message = {
      id: 'welcome',
      role: 'assistant',
      type: 'text',
      content: "Hello! I'm here to help you create a professional resume. I'll ask you a series of questions about your background, and then I'll generate a formatted resume for you. Let's get started!",
      timestamp: new Date(),
    };

    const firstQuestion: Message = {
      id: 'q1',
      role: 'assistant',
      type: 'text',
      content: `Question ${QUESTIONS[0].id}: ${QUESTIONS[0].text}`,
      timestamp: new Date(),
    };

    setMessages([welcomeMessage, firstQuestion]);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-120px)] bg-white rounded-xl shadow-lg border border-[#E2E8F0] overflow-hidden">
      {/* Header */}
      <div className="border-b border-[#E2E8F0] bg-gradient-to-r from-[#3182CE] to-[#805AD5] px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">CV Analyzer</h2>
              <p className="text-xs text-white/80">
                {isComplete
                  ? 'Resume Generated'
                  : `Question ${currentQuestion + 1} of ${totalQuestions}`}
              </p>
            </div>
          </div>
          {isComplete && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleStartOver}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              Start Over
            </Button>
          )}
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6 bg-[#FFFAF0]">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            role={message.role === 'assistant' ? 'interviewer' : 'candidate'}
            type={message.type}
            content={message.content}
            timestamp={message.timestamp}
          />
        ))}

        {/* Generated Resume Display */}
        {isComplete && generatedResume && (
          <Card className="mt-6 animate-slideUp">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#805AD5]" />
                <h3 className="text-lg font-bold text-[#2D3748]">Generated Resume</h3>
              </div>
              <Button
                variant="primary"
                size="sm"
                onClick={handleDownload}
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download
              </Button>
            </div>
            <div className="bg-[#F7FAFC] rounded-lg p-6 border border-[#E2E8F0]">
              <pre className="text-sm text-[#2D3748] whitespace-pre-wrap font-mono">
                {generatedResume}
              </pre>
            </div>
          </Card>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      {!isComplete && (
        <div className="border-t border-[#E2E8F0] bg-white px-6 py-4">
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={`Answer question ${currentQuestion + 1}...`}
              className="flex-1 px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3182CE] focus:border-transparent text-[#2D3748]"
              disabled={isSubmitting}
              autoFocus
            />
            <Button
              type="submit"
              disabled={!inputValue.trim() || isSubmitting}
              className="flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              {isSubmitting ? 'Sending...' : 'Send'}
            </Button>
          </form>
          <p className="text-xs text-[#2D3748]/50 mt-2 text-center">
            Progress: {currentQuestion + 1} / {totalQuestions} questions answered
          </p>
        </div>
      )}
    </div>
  );
}

