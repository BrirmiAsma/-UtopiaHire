import { Sparkles } from 'lucide-react';

interface AIInsightsPanelProps {
  summary: string;
  timestamp?: Date;
}

export default function AIInsightsPanel({ summary, timestamp }: AIInsightsPanelProps) {
  if (!summary) return null;

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-4 mb-4 rounded-lg animate-fadeIn">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <Sparkles className="w-5 h-5 text-blue-600" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-blue-900 mb-1">AI Insight</h4>
          <p className="text-sm text-blue-800 leading-relaxed">{summary}</p>
          {timestamp && (
            <p className="text-xs text-blue-600 mt-2">
              {timestamp.toLocaleTimeString()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}