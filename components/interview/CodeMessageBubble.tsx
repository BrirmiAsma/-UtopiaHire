import { User, Code, CheckCircle, XCircle } from 'lucide-react';

interface CodeMessageBubbleProps {
  code: string;
  language: string;
  timestamp: Date;
  executionResult?: {
    passed: boolean;
    testCasesPassed: number;
    testCasesTotal: number;
  };
}

export default function CodeMessageBubble({
  code,
  language,
  timestamp,
  executionResult,
}: CodeMessageBubbleProps) {
  return (
    <div className="flex gap-3 flex-row-reverse animate-slideUp">
      {/* Avatar */}
      <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#38A169] to-[#48BB78]">
        <User className="w-5 h-5 text-white" />
      </div>

      {/* Code Content */}
      <div className="max-w-[70%] flex flex-col items-end">
        <div className="bg-gradient-to-br from-[#38A169] to-[#48BB78] rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-black/10">
            <div className="flex items-center gap-2 text-white/90">
              <Code className="w-4 h-4" />
              <span className="text-xs font-medium">{language}</span>
            </div>
            {executionResult && (
              <div className="flex items-center gap-1">
                {executionResult.passed ? (
                  <CheckCircle className="w-4 h-4 text-white" />
                ) : (
                  <XCircle className="w-4 h-4 text-white" />
                )}
                <span className="text-xs text-white">
                  {executionResult.testCasesPassed}/{executionResult.testCasesTotal} passed
                </span>
              </div>
            )}
          </div>

          {/* Code Block */}
          <div className="px-4 py-3 bg-[#1E293B] text-white">
            <pre className="text-xs font-mono overflow-x-auto">
              <code>{code}</code>
            </pre>
          </div>
        </div>
        <span className="text-xs mt-1 px-2 text-[#2D3748]/60">
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
}
