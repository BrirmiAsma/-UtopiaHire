'use client';

import { useState, useEffect } from 'react';
import { Mic, MicOff, Volume2 } from 'lucide-react';

interface VoiceRecorderProps {
  onSubmit: (transcription: string) => void;
  isDisabled?: boolean;
}

export default function VoiceRecorder({ onSubmit, isDisabled = false }: VoiceRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);
  const [recordingTime, setRecordingTime] = useState(0);

  // Simulate audio level animation when recording
  useEffect(() => {
    if (isRecording) {
      const interval = setInterval(() => {
        setAudioLevel(Math.random() * 100);
      }, 100);
      return () => clearInterval(interval);
    } else {
      setAudioLevel(0);
    }
  }, [isRecording]);

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
    <div className="border-t border-[#E2E8F0] bg-gradient-to-r from-[#FFFAF0] to-[#F7FAFC] p-6">
      {/* Voice Visualizer */}
      {isRecording && (
        <div className="flex items-center justify-center gap-1 mb-6 h-16">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-gradient-to-t from-[#2C7A7B] to-[#D4A574] rounded-full transition-all duration-100"
              style={{
                height: `${Math.random() * audioLevel + 20}%`,
                opacity: 0.3 + Math.random() * 0.7,
              }}
            />
          ))}
        </div>
      )}

      {/* Recording Timer */}
      {isRecording && (
        <div className="text-center mb-4">
          <span className="text-lg font-mono text-[#E53E3E] font-bold">
            {formatTime(recordingTime)}
          </span>
        </div>
      )}

      {/* Microphone Button */}
      <div className="flex items-center justify-center gap-4 mb-4">
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
      </div>

      {/* Instructions */}
      <div className="text-center">
        <p className="text-sm text-[#2D3748]/70">
          {isRecording ? (
            <>
              <Volume2 className="inline w-4 h-4 mr-1 animate-pulse" />
              Recording... Click to stop and submit
            </>
          ) : (
            'Click the microphone to start answering'
          )}
        </p>
      </div>
    </div>
  );
}
