import { Clock, CheckCircle, Circle, Mic, Code } from 'lucide-react';

type QuestionType = 'voice' | 'code';

interface InterviewSidebarProps {
  currentQuestion: number;
  totalQuestions: number;
  questionType: QuestionType;
  elapsedTime: number;
  completedQuestions: number[];
}

export default function InterviewSidebar({
  currentQuestion,
  totalQuestions,
  questionType,
  elapsedTime,
  completedQuestions,
}: InterviewSidebarProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = (completedQuestions.length / totalQuestions) * 100;

  return (
    <div className="w-80 h-full bg-white border-r border-[#E2E8F0] flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-[#E2E8F0]">
        <h2 className="text-lg font-bold text-[#2D3748] mb-1">Interview Session</h2>
        <p className="text-sm text-[#2D3748]/60">Technical Interview</p>
      </div>

      {/* Current Question Info */}
      <div className="p-6 border-b border-[#E2E8F0]">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-[#2D3748]">Current Question</span>
          <span className="text-2xl font-bold text-[#2C7A7B]">
            {currentQuestion}/{totalQuestions}
          </span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-[#E2E8F0] rounded-full h-2 mb-3">
          <div
            className="bg-gradient-to-r from-[#2C7A7B] to-[#38A169] h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Question Type Badge */}
        <div className="flex items-center gap-2">
          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${
              questionType === 'voice'
                ? 'bg-gradient-to-br from-[#3182CE]/10 to-[#805AD5]/10 text-[#3182CE]'
                : 'bg-gradient-to-br from-[#38A169]/10 to-[#48BB78]/10 text-[#38A169]'
            }`}
          >
            {questionType === 'voice' ? (
              <Mic className="w-4 h-4" />
            ) : (
              <Code className="w-4 h-4" />
            )}
            <span className="text-xs font-medium">
              {questionType === 'voice' ? 'Voice Answer' : 'Code Answer'}
            </span>
          </div>
        </div>
      </div>

      {/* Session Timer */}
      <div className="p-6 border-b border-[#E2E8F0]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#D4A574] to-[#ED8936] rounded-lg flex items-center justify-center">
            <Clock className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-xs text-[#2D3748]/60">Elapsed Time</p>
            <p className="text-lg font-bold font-mono text-[#2D3748]">{formatTime(elapsedTime)}</p>
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="flex-1 overflow-y-auto p-6">
        <h3 className="text-sm font-semibold text-[#2D3748] mb-3">Questions</h3>
        <div className="space-y-2">
          {Array.from({ length: totalQuestions }, (_, i) => i + 1).map((qNum) => {
            const isCompleted = completedQuestions.includes(qNum);
            const isCurrent = qNum === currentQuestion;
            const qType = qNum <= 3 ? 'voice' : 'code';

            return (
              <div
                key={qNum}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                  isCurrent
                    ? 'bg-gradient-to-r from-[#2C7A7B]/10 to-[#38A169]/10 border border-[#2C7A7B]/30'
                    : isCompleted
                    ? 'bg-[#F7FAFC]'
                    : 'bg-white'
                }`}
              >
                {isCompleted ? (
                  <CheckCircle className="w-5 h-5 text-[#38A169]" />
                ) : (
                  <Circle
                    className={`w-5 h-5 ${
                      isCurrent ? 'text-[#2C7A7B]' : 'text-[#E2E8F0]'
                    }`}
                  />
                )}
                <div className="flex-1">
                  <p
                    className={`text-sm font-medium ${
                      isCurrent ? 'text-[#2C7A7B]' : 'text-[#2D3748]'
                    }`}
                  >
                    Question {qNum}
                  </p>
                  <div className="flex items-center gap-1 mt-0.5">
                    {qType === 'voice' ? (
                      <Mic className="w-3 h-3 text-[#3182CE]" />
                    ) : (
                      <Code className="w-3 h-3 text-[#38A169]" />
                    )}
                    <span className="text-xs text-[#2D3748]/60 capitalize">{qType}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tips Section */}
      <div className="p-6 border-t border-[#E2E8F0] bg-gradient-to-r from-[#D4A574]/5 to-[#2C7A7B]/5">
        <p className="text-xs text-[#2D3748]/70 leading-relaxed">
          💡 <span className="font-semibold">Tip:</span> Take your time to think through each answer.
          Quality matters more than speed!
        </p>
      </div>
    </div>
  );
}
