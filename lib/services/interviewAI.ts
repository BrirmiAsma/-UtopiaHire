import {
  UserProfile,
  AIRequestPayload,
  AIResponsePayload,
  ConversationMessage,
} from '@/types/interviewAI';

export class InterviewAIService {
  private baseURL: string;
  private apiKey: string;

  constructor(baseURL: string = '/api/interview', apiKey: string = '') {
    this.baseURL = baseURL;
    this.apiKey = apiKey;
  }

  private async sendRequest(
    endpoint: string,
    payload: AIRequestPayload
  ): Promise<AIResponsePayload> {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(this.apiKey && { Authorization: `Bearer ${this.apiKey}` }),
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('AI Service Error:', error);
      throw error;
    }
  }

  async startInterview(profileData: UserProfile): Promise<AIResponsePayload> {
    const payload: AIRequestPayload = {
      name: profileData.name,
      mail: profileData.mail,
      phone: profileData.phone,
      job: profileData.job,
      experiences: profileData.experiences,
      education: profileData.education,
      projects: profileData.projects,
      profile: profileData.profile,
      language: profileData.language,
      message: [],
      answer: '',
    };

    return await this.sendRequest('/start', payload);
  }

  async sendVoiceAnswer(
    profileData: UserProfile,
    conversationHistory: ConversationMessage[],
    transcription: string
  ): Promise<AIResponsePayload> {
    const payload: AIRequestPayload = {
      name: profileData.name,
      mail: profileData.mail,
      phone: profileData.phone,
      job: profileData.job,
      experiences: profileData.experiences,
      education: profileData.education,
      projects: profileData.projects,
      profile: profileData.profile,
      language: profileData.language,
      message: conversationHistory,
      answer: transcription,
    };

    return await this.sendRequest('/answer', payload);
  }

  async completeInterview(
    profileData: UserProfile,
    conversationHistory: ConversationMessage[]
  ): Promise<AIResponsePayload> {
    const payload: AIRequestPayload = {
      name: profileData.name,
      mail: profileData.mail,
      phone: profileData.phone,
      job: profileData.job,
      experiences: profileData.experiences,
      education: profileData.education,
      projects: profileData.projects,
      profile: profileData.profile,
      language: profileData.language,
      message: conversationHistory,
      answer: '',
    };

    return await this.sendRequest('/complete', payload);
  }
}

export const interviewAIService = new InterviewAIService();
