'use client';

import { useState, useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import InterviewSidebar from './InterviewSidebar';
import MessageBubble from './MessageBubble';
import CodeMessageBubble from './CodeMessageBubble';
import VoiceRecorder from './VoiceRecorder';
import CodeEditor from './CodeEditor';
import AIInsightsPanel from './AIInsightsPanel';
import Button from '@/components/ui/Button';
import { UserProfile, ConversationMessage } from '@/types/interviewAI';
import { interviewAIService } from '@/lib/services/interviewAI';

// Types
type QuestionType = 'voice' | 'code';
type MessageRole = 'interviewer' | 'candidate';
type MessageType = 'text' | 'voice' | 'code';

interface Question {
  id: number;
  type: QuestionType;
  text: string;
}

interface Message {
  id: string;
  role: MessageRole;
  type: MessageType;
  content: string;
  timestamp: Date;
  metadata?: {
    audioUrl?: string;
    language?: string;
    duration?: number;
  };
}

interface InterviewInterfaceProps {
  profileData: UserProfile;
  onExit: () => void;
}

// Sample questions
const QUESTIONS: Question[] = [
  { id: 1, type: 'voice', text: 'Tell me about yourself and your background in software development.' },
  { id: 2, type: 'voice', text: 'What are your key strengths as a developer?' },
  { id: 3, type: 'voice', text: 'Why are you interested in this position?' },
  { id: 4, type: 'code', text: 'Write a Python function that reverses a string. The function should take a string as input and return the reversed string.' },
  { id: 5, type: 'code', text: 'Write a Python function that finds all duplicate elements in a list and returns them as a new list.' },
];

export default function InterviewInterface({ profileData, onExit }: InterviewInterfaceProps) {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [messages, setMessages] = useState<Message[]>([]);
  const [completedQuestions, setCompletedQuestions] = useState<number[]>([]);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiSummary, setAiSummary] = useState('');
  const [conversationHistory, setConversationHistory] = useState<ConversationMessage[]>([]);
  const [sessionId, setSessionId] = useState('');
  const [useAI, setUseAI] = useState(false);

  const currentQ = QUESTIONS[currentQuestion - 1];
  const totalQuestions = QUESTIONS.length;

  // Initialize with welcome message
  useEffect(() => {
    const welcomeMessage: Message = {
      id: 'welcome',
      role: 'interviewer',
      type: 'text',
      content: 'Welcome to your interview session! I\'ll be asking you a series of questions. The first three will be voice-based, followed by coding challenges. Let\'s begin!',
      timestamp: new Date(),
    };

    const firstQuestion: Message = {
      id: 'q1',
      role: 'interviewer',
      type: 'text',
      content: `Question 1: ${QUESTIONS[0].text}`,
      timestamp: new Date(),
    };

    setMessages([welcomeMessage, firstQuestion]);
  }, []);

  // Session timer
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleVoiceSubmit = (transcription: string) => {
    setIsSubmitting(true);

    // Add user voice message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'candidate',
      type: 'voice',
      content: transcription,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setCompletedQuestions((prev) => [...prev, currentQuestion]);

    // Simulate AI response after delay
    setTimeout(() => {
      const feedbackMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'interviewer',
        type: 'text',
        content: 'Thank you for your answer. That was insightful!',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, feedbackMessage]);

      // Move to next question or complete
      if (currentQuestion < totalQuestions) {
        setTimeout(() => {
          const nextQ = QUESTIONS[currentQuestion];
          const nextMessage: Message = {
            id: `q${currentQuestion + 1}`,
            role: 'interviewer',
            type: 'text',
            content: `Question ${currentQuestion + 1}: ${nextQ.text}`,
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, nextMessage]);
          setCurrentQuestion((prev) => prev + 1);
          setIsSubmitting(false);
        }, 1500);
      } else {
        completeInterview();
      }
    }, 1500);
  };

  const handleCodeSubmit = (code: string) => {
    setIsSubmitting(true);

    // Add user code message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'candidate',
      type: 'code',
      content: code,
      timestamp: new Date(),
      metadata: {
        language: 'python',
      },
    };

    setMessages((prev) => [...prev, userMessage]);
    setCompletedQuestions((prev) => [...prev, currentQuestion]);

    // Simulate code evaluation
    setTimeout(() => {
      const feedbackMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'interviewer',
        type: 'text',
        content: '✓ Excellent solution! Your code is clean, efficient, and passes all test cases. Score: 10/10',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, feedbackMessage]);

      // Move to next question or complete
      if (currentQuestion < totalQuestions) {
        setTimeout(() => {
          const nextQ = QUESTIONS[currentQuestion];
          const nextMessage: Message = {
            id: `q${currentQuestion + 1}`,
            role: 'interviewer',
            type: 'text',
            content: `Question ${currentQuestion + 1}: ${nextQ.text}`,
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, nextMessage]);
          setCurrentQuestion((prev) => prev + 1);
          setIsSubmitting(false);
        }, 1500);
      } else {
        completeInterview();
      }
    }, 2000);
  };

  const completeInterview = () => {
    setTimeout(() => {
      const completionMessage: Message = {
        id: 'complete',
        role: 'interviewer',
        type: 'text',
        content: '🎉 Congratulations! You\'ve completed the interview. Your overall score is 85/100. Great job! You can now review your answers or exit the interview.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, completionMessage]);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex bg-[#FFFAF0]">
      {/* Sidebar */}
      <InterviewSidebar
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
        questionType={currentQ?.type || 'voice'}
        elapsedTime={elapsedTime}
        completedQuestions={completedQuestions}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0] bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#D4A574] to-[#2C7A7B] rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-[#2D3748]">AI Interview Session</h1>
              <p className="text-sm text-[#2D3748]/60">
                Question {currentQuestion} of {totalQuestions}
              </p>
            </div>
          </div>
          <Button variant="ghost" onClick={onExit}>
            <X className="w-5 h-5 mr-1" />
            Exit Interview
          </Button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
          {/* AI Insights Panel */}
          {aiSummary && <AIInsightsPanel summary={aiSummary} timestamp={new Date()} />}
          
          {messages.map((message) => {
            if (message.type === 'code' && message.role === 'candidate') {
              return (
                <CodeMessageBubble
                  key={message.id}
                  code={message.content}
                  language={message.metadata?.language || 'python'}
                  timestamp={message.timestamp}
                  executionResult={{
                    passed: true,
                    testCasesPassed: 5,
                    testCasesTotal: 5,
                  }}
                />
              );
            }
            return (
              <MessageBubble
                key={message.id}
                role={message.role}
                type={message.type}
                content={message.content}
                timestamp={message.timestamp}
              />
            );
          })}
        </div>

        {/* Input Area */}
        {currentQuestion <= totalQuestions && !completedQuestions.includes(currentQuestion) && (
          <>
            {currentQ.type === 'voice' ? (
              <VoiceRecorder onSubmit={handleVoiceSubmit} isDisabled={isSubmitting} />
            ) : (
              <CodeEditor onSubmit={handleCodeSubmit} isDisabled={isSubmitting} />
            )}
          </>
        )}

        {/* Interview Complete Actions */}
        {currentQuestion > totalQuestions && (
          <div className="border-t border-[#E2E8F0] bg-white px-6 py-4">
            <div className="flex items-center justify-center gap-4">
              <Button variant="outline" size="lg">
                Review Answers
              </Button>
              <Button size="lg" onClick={onExit}>
                Exit Interview
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}