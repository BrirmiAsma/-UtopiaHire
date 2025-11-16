'use client';

import { useState } from 'react';
import { Code, Send, Play } from 'lucide-react';
import Button from '@/components/ui/Button';

interface CodeEditorProps {
  onSubmit: (code: string) => void;
  isDisabled?: boolean;
  placeholder?: string;
}

export default function CodeEditor({ onSubmit, isDisabled = false, placeholder }: CodeEditorProps) {
  const [code, setCode] = useState(
    placeholder || 'def solution():\n    # Write your code here\n    pass\n'
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!code.trim() || isSubmitting) return;
    
    setIsSubmitting(true);
    
    // Simulate submission delay
    setTimeout(() => {
      onSubmit(code);
      setIsSubmitting(false);
    }, 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Handle Tab key
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;
      const newCode = code.substring(0, start) + '    ' + code.substring(end);
      setCode(newCode);
      
      // Set cursor position after the inserted tab
      setTimeout(() => {
        e.currentTarget.selectionStart = e.currentTarget.selectionEnd = start + 4;
      }, 0);
    }
  };

  return (
    <div className="border-t border-[#E2E8F0] bg-[#F7FAFC]">
      {/* Editor Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#E2E8F0]">
        <div className="flex items-center gap-2 text-[#2D3748]/70">
          <Code className="w-4 h-4" />
          <span className="text-sm font-medium">Python</span>
        </div>
      </div>

      {/* Code Editor Area */}
      <div className="relative">
        {/* Line Numbers */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-[#E2E8F0] border-r border-[#CBD5E0] text-right text-xs text-[#2D3748]/50 font-mono py-4 px-2 select-none">
          {code.split('\n').map((_, i) => (
            <div key={i} className="leading-6">
              {i + 1}
            </div>
          ))}
        </div>

        {/* Text Area */}
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isDisabled}
          className="w-full h-80 pl-16 pr-4 py-4 bg-white text-[#2D3748] font-mono text-sm leading-6 resize-none focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="Write your Python code here..."
          spellCheck={false}
        />
      </div>

      {/* Editor Footer with Actions */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-[#E2E8F0] bg-white">
        <div className="text-xs text-[#2D3748]/60">
          {code.split('\n').length} lines · {code.length} characters
        </div>
        
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={isDisabled || isSubmitting}
          >
            <Play className="w-4 h-4 mr-1" />
            Run Code
          </Button>
          <Button
            onClick={handleSubmit}
            size="sm"
            disabled={isDisabled || isSubmitting || !code.trim()}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-1"></div>
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-1" />
                Submit Answer
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
