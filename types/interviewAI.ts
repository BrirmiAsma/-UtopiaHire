// User Profile Types
export interface UserProfile {
  name: string;
  mail: string;
  phone: string;
  job: string;
  experiences: Experience[];
  education: Education[];
  projects: Project[];
  profile: string;
  language: string[];
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
  field: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  url?: string;
}

// Conversation Types
export interface ConversationMessage {
  role: 'user' | 'ai';
  content: string;
  timestamp: string;
}

// API Payload Types
export interface AIRequestPayload {
  name: string;
  mail: string;
  phone: string;
  job: string;
  experiences: Experience[];
  education: Education[];
  projects: Project[];
  profile: string;
  language: string[];
  message: ConversationMessage[];
  answer: string;
}

export interface AIResponsePayload {
  response: string;
  summary: string;
  message: ConversationMessage[];
  answer: string;
  sessionId?: string;
  overallScore?: number;
  strengths?: string[];
  improvements?: string[];
}

// Interview Session State
export interface InterviewSession {
  sessionId: string;
  profileData: UserProfile;
  conversationHistory: ConversationMessage[];
  currentQuestion: string;
  currentAnswer: string;
  aiSummary: string;
  isComplete: boolean;
  overallScore?: number;
  strengths?: string[];
  improvements?: string[];
}
