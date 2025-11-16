'use client';

import { useState, useRef, DragEvent } from 'react';
import { Upload, FileText, X, Sparkles, Bot } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import CVSuggestionCard from './CVSuggestionCard';
import CVContentViewer from './CVContentViewer';

interface Suggestion {
  id: string;
  section: string;
  originalText: string;
  enhancedText: string;
  reason?: string;
  sectionId: string; // ID of the CV section to update
}

interface CVSection {
  id: string;
  title: string;
  content: string;
  isModified?: boolean;
}

// Static example data
const getInitialCVSections = (): CVSection[] => [
  {
    id: 'name',
    title: 'Name',
    content: 'John Doe',
  },
  {
    id: 'title',
    title: 'Professional Title',
    content: 'Software Developer',
  },
  {
    id: 'summary',
    title: 'Professional Summary',
    content:
      'I am a software developer with experience in web development. I worked on some projects and know programming.',
  },
  {
    id: 'skills',
    title: 'Skills',
    content: 'JavaScript, React, Node.js, Python',
  },
  {
    id: 'experience',
    title: 'Work Experience',
    content: `Software Developer at Tech Company (2020-2022)
- Did coding tasks
- Fixed bugs
- Worked with team`,
  },
  {
    id: 'education',
    title: 'Education',
    content: 'Bachelor of Science in Computer Science\nUniversity Name, 2020',
  },
];

const getInitialSuggestions = (): Suggestion[] => [
  {
    id: 'suggestion-1',
    section: 'Professional Title',
    originalText: 'Software Developer',
    enhancedText: 'Senior Full-Stack Software Developer',
    reason: 'More specific title that better reflects your experience level',
    sectionId: 'title',
  },
  {
    id: 'suggestion-2',
    section: 'Professional Summary',
    originalText:
      'I am a software developer with experience in web development. I worked on some projects and know programming.',
    enhancedText:
      'Results-driven Senior Full-Stack Software Developer with 3+ years of experience designing and implementing scalable web applications. Proven expertise in modern JavaScript frameworks, RESTful API development, and agile methodologies. Successfully delivered 15+ production applications serving 10,000+ users.',
    reason: 'More professional tone with quantified achievements',
    sectionId: 'summary',
  },
  {
    id: 'suggestion-3',
    section: 'Skills',
    originalText: 'JavaScript, React, Node.js, Python',
    enhancedText:
      'JavaScript (ES6+), React.js, Node.js, Express.js, Python, RESTful APIs, Git, Agile/Scrum, MongoDB, PostgreSQL, AWS, Docker',
    reason: 'More comprehensive skill list with specific technologies',
    sectionId: 'skills',
  },
  {
    id: 'suggestion-4',
    section: 'Work Experience',
    originalText: `Software Developer at Tech Company (2020-2022)
- Did coding tasks
- Fixed bugs
- Worked with team`,
    enhancedText: `Senior Software Developer | Tech Company | 2020 - 2022
- Architected and developed 10+ full-stack web applications using React.js and Node.js, serving 10,000+ active users
- Reduced application load time by 40% through code optimization and caching strategies
- Collaborated with cross-functional teams in agile environment, delivering features 2 weeks ahead of schedule`,
    reason: 'Quantified achievements and more professional language',
    sectionId: 'experience',
  },
];

export default function CVAnalyzerInterface() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [cvSections, setCvSections] = useState<CVSection[]>([]);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [acceptedSuggestions, setAcceptedSuggestions] = useState<Set<string>>(new Set());
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Debug: Log when component renders
  console.log('CVAnalyzerInterface rendered', { showAnalysis, suggestionsCount: suggestions.length });

  const handleFileSelect = (file: File) => {
    if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
      if (file.size <= 5 * 1024 * 1024) {
        setUploadedFile(file);
        setFileName(file.name);
        startStaticAnalysis();
      } else {
        alert('File size must be less than 5MB');
      }
    } else {
      alert('Please upload a PDF file');
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const startStaticAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowAnalysis(true);
      setCvSections(getInitialCVSections());
      setSuggestions(getInitialSuggestions());
      setAcceptedSuggestions(new Set());
    }, 1500);
  };

  const handleAnalyze = async () => {
    if (!uploadedFile) {
      alert('Please upload a PDF file first');
      return;
    }

    startStaticAnalysis();
  };

  const handleAcceptSuggestion = (suggestionId: string) => {
    const suggestion = suggestions.find((s) => s.id === suggestionId);
    if (!suggestion) return;

    // Update CV sections
    setCvSections((prev) =>
      prev.map((section) => {
        if (section.id === suggestion.sectionId) {
          return {
            ...section,
            content: suggestion.enhancedText,
            isModified: true,
          };
        }
        return section;
      })
    );

    // Mark suggestion as accepted
    setAcceptedSuggestions((prev) => new Set([...prev, suggestionId]));
  };

  const handleReset = () => {
    setShowAnalysis(false);
    setUploadedFile(null);
    setFileName('');
    setCvSections([]);
    setSuggestions([]);
    setAcceptedSuggestions(new Set());
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  if (showAnalysis) {
    return (
      <div className="h-[calc(100vh-200px)] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#3182CE] to-[#805AD5] rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#2D3748]">CV Analysis</h2>
              <p className="text-sm text-[#2D3748]/70">{fileName}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={handleReset}>
            <X className="w-4 h-4 mr-2" />
            Upload New CV
          </Button>
        </div>

        {/* Split Screen - Right: CV Content, Left: AI Suggestions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 min-h-0">
          {/* Right: CV Content (First Half) */}
          <div className="flex flex-col min-h-0 order-2 lg:order-2">
            <CVContentViewer sections={cvSections} fileName={fileName} />
          </div>

          {/* Left: AI Suggestions (Second Half) */}
          <div className="flex flex-col min-h-0 order-1 lg:order-1">
            <Card className="mb-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#3182CE] to-[#805AD5] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-[#2D3748] mb-1">UtopiaHire AI</h3>
                  <p className="text-xs text-[#2D3748]/70">
                    I reviewed your CV and prepared {suggestions.length} improvement
                    {suggestions.length !== 1 ? 's' : ''}. Red shows the current wording, green shows
                    my enhanced version. Click <span className="font-semibold">Accept Changes</span> to
                    update your CV on the right.
                  </p>
                </div>
              </div>
            </Card>

            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
              {suggestions.map((suggestion) => (
                <CVSuggestionCard
                  key={suggestion.id}
                  suggestion={suggestion}
                  onAccept={handleAcceptSuggestion}
                  isAccepted={acceptedSuggestions.has(suggestion.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Card>
      <h2 className="text-2xl font-bold text-[#2D3748] mb-4">Upload Your CV</h2>
      <p className="text-[#2D3748]/70 mb-6">
        Upload your CV (PDF format) and our AI will analyze it to provide personalized
        enhancement suggestions. Review and accept changes to improve your CV.
      </p>

      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,application/pdf"
        onChange={handleFileInputChange}
        className="hidden"
        id="cv-upload"
      />

      <div
        onClick={() => fileInputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors cursor-pointer ${
          isDragging
            ? 'border-[#3182CE] bg-[#3182CE]/5'
            : uploadedFile
            ? 'border-[#3182CE] bg-[#3182CE]/5'
            : 'border-[#E2E8F0] hover:border-[#3182CE]'
        }`}
      >
        {uploadedFile ? (
          <div className="flex flex-col items-center">
            <FileText className="w-12 h-12 text-[#3182CE] mb-4" />
            <p className="text-[#2D3748] font-medium mb-2">{uploadedFile.name}</p>
            <p className="text-sm text-[#2D3748]/70">
              {(uploadedFile.size / 1024).toFixed(2)} KB
            </p>
            <Button
              variant="ghost"
              size="sm"
              className="mt-4"
              onClick={(e) => {
                e.stopPropagation();
                setUploadedFile(null);
                setFileName('');
                if (fileInputRef.current) {
                  fileInputRef.current.value = '';
                }
              }}
            >
              <X className="w-4 h-4 mr-2" />
              Remove
            </Button>
          </div>
        ) : (
          <>
            <Upload className="w-12 h-12 text-[#3182CE] mx-auto mb-4" />
            <p className="text-[#2D3748] font-medium mb-2">
              Click to upload or drag and drop
            </p>
            <p className="text-sm text-[#2D3748]/70">PDF files only (Max 5MB)</p>
          </>
        )}
      </div>

      <div className="mt-6">
        <Button
          size="lg"
          onClick={handleAnalyze}
          disabled={!uploadedFile || isAnalyzing}
        >
          <Sparkles className="w-5 h-5 mr-2" />
          {isAnalyzing ? 'Analyzing...' : 'Analyze CV'}
        </Button>
      </div>
    </Card>
  );
}

