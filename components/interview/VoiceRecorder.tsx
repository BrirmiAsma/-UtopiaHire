'use client';

import { useState, useEffect } from 'react';
import { Mic, MicOff, Volume2 } from 'lucide-react';

interface VoiceRecorderProps {
  onSubmit: (transcription: string) => void;
  isDisabled?: boolean;
  questionText?: string;
}

export default function VoiceRecorder({ onSubmit, isDisabled = false, questionText }: VoiceRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);

  // Recording timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRecording) {
      timer = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } else {
      setRecordingTime(0);
    }
    return () => clearInterval(timer);
  }, [isRecording]);

  const handleToggleRecording = () => {
    if (isRecording) {
      // Stop recording and submit
      setIsRecording(false);
      setTimeout(() => {
        onSubmit('This is a simulated voice transcription. Actual voice-to-text will be implemented with backend.');
      }, 500);
    } else {
      // Start recording
      setIsRecording(true);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="border-t border-[#E2E8F0] bg-gradient-to-r from-[#FFFAF0] to-[#F7FAFC] p-8">
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Spinning Circle with Question */}
        <div className="relative flex flex-col items-center">
          {/* Spinning Circle */}
          <div className="relative w-64 h-64 mb-8">
            {/* Animated spinning gradient circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-blue-300 to-blue-100 animate-spin-slow" 
                 style={{ 
                   animationDuration: '3s',
                   filter: 'blur(8px)'
                 }} 
            />
            {/* Inner circle */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-200 flex items-center justify-center shadow-2xl">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400/80 to-blue-100/80 backdrop-blur-sm" />
            </div>
            
            {/* Recording indicator in center */}
            {isRecording && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <Volume2 className="w-12 h-12 text-white animate-pulse mb-2" />
                  <span className="text-xl font-mono text-white font-bold drop-shadow-lg">
                    {formatTime(recordingTime)}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Question Text */}
          {questionText && (
            <div className="text-center px-8 mb-6">
              <p className="text-lg font-medium text-[#2D3748]">
                {questionText}
              </p>
            </div>
          )}
        </div>

        {/* Microphone Button */}
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={handleToggleRecording}
            disabled={isDisabled}
            className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${
              isRecording
                ? 'bg-gradient-to-br from-[#F56565] to-[#E53E3E] animate-pulse'
                : 'bg-gradient-to-br from-[#D4A574] to-[#2C7A7B] hover:scale-110'
            }`}
            aria-label={isRecording ? 'Stop recording' : 'Start recording'}
          >
            {isRecording ? (
              <MicOff className="w-8 h-8 text-white" />
            ) : (
              <Mic className="w-8 h-8 text-white" />
            )}
          </button>

          {/* Instructions */}
          <div className="text-center">
            <p className="text-sm text-[#2D3748]/70">
              {isRecording ? (
                'Recording... Click to stop and submit'
              ) : (
                'Click the microphone to start answering'
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
