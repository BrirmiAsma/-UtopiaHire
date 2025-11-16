import { Bot, User, Mic } from 'lucide-react';

type MessageRole = 'interviewer' | 'candidate';
type MessageType = 'text' | 'voice' | 'code';

interface MessageBubbleProps {
  role: MessageRole;
  type: MessageType;
  content: string;
  timestamp: Date;
}

export default function MessageBubble({ role, type, content, timestamp }: MessageBubbleProps) {
  const isInterviewer = role === 'interviewer';

  return (
    <div className={`flex gap-3 ${isInterviewer ? 'flex-row' : 'flex-row-reverse'} animate-slideUp`}>
      {/* Avatar */}
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
          isInterviewer
            ? 'bg-gradient-to-br from-[#D4A574] to-[#2C7A7B]'
            : 'bg-gradient-to-br from-[#3182CE] to-[#805AD5]'
        }`}
      >
        {isInterviewer ? (
          <Bot className="w-5 h-5 text-white" />
        ) : (
          <User className="w-5 h-5 text-white" />
        )}
      </div>

      {/* Message Content */}
      <div className={`max-w-[70%] ${isInterviewer ? '' : 'flex flex-col items-end'}`}>
        <div
          className={`rounded-2xl px-4 py-3 ${
            isInterviewer
              ? 'bg-[#F7FAFC] text-[#2D3748]'
              : 'bg-gradient-to-br from-[#3182CE] to-[#805AD5] text-white'
          }`}
        >
          {type === 'voice' && !isInterviewer && (
            <div className="flex items-center gap-2 mb-2 text-white/80">
              <Mic className="w-3 h-3" />
              <span className="text-xs">Voice Answer</span>
            </div>
          )}
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{content}</p>
        </div>
        <span
          className={`text-xs mt-1 px-2 ${
            isInterviewer ? 'text-[#2D3748]/50' : 'text-[#2D3748]/60'
          }`}
        >
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
}
