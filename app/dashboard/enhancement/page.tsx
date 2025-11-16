'use client';

import { useState, useRef, DragEvent } from 'react';
import { Sparkles, Upload, CheckCircle, Zap, FileText, X } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import CVComparisonView from '@/components/enhancement/CVComparisonView';

// Static example data for CV comparison
const getExampleData = () => {
  const originalCV = [
    { text: 'JOHN DOE\n', isHighlighted: false },
    { text: 'Software Developer\n', isHighlighted: true },
    { text: 'Email: john@example.com | Phone: +1234567890\n\n', isHighlighted: false },
    { text: 'PROFESSIONAL SUMMARY\n', isHighlighted: false },
    { text: 'I am a software developer with experience in web development. I worked on some projects and know programming.', isHighlighted: true },
    { text: '\n\nSKILLS\n', isHighlighted: false },
    { text: 'JavaScript, React, Node.js, Python', isHighlighted: true },
    { text: '\n\nWORK EXPERIENCE\n', isHighlighted: false },
    { text: 'Software Developer at Tech Company (2020-2022)\n', isHighlighted: true },
    { text: '- Did coding tasks\n', isHighlighted: true },
    { text: '- Fixed bugs\n', isHighlighted: true },
    { text: '- Worked with team\n\n', isHighlighted: true },
    { text: 'EDUCATION\n', isHighlighted: false },
    { text: 'Bachelor of Science in Computer Science\n', isHighlighted: false },
    { text: 'University Name, 2020', isHighlighted: false },
  ];

  const enhancedCV = [
    { text: 'JOHN DOE\n', isHighlighted: false },
    { text: 'Senior Full-Stack Software Developer\n', isHighlighted: true },
    { text: 'Email: john@example.com | Phone: +1234567890\n\n', isHighlighted: false },
    { text: 'PROFESSIONAL SUMMARY\n', isHighlighted: false },
    { text: 'Results-driven Senior Full-Stack Software Developer with 3+ years of experience designing and implementing scalable web applications. Proven expertise in modern JavaScript frameworks, RESTful API development, and agile methodologies. Successfully delivered 15+ production applications serving 10,000+ users, improving system performance by 40% and reducing deployment time by 50%.', isHighlighted: true },
    { text: '\n\nSKILLS\n', isHighlighted: false },
    { text: 'JavaScript (ES6+), React.js, Node.js, Express.js, Python, RESTful APIs, Git, Agile/Scrum, MongoDB, PostgreSQL, AWS, Docker', isHighlighted: true },
    { text: '\n\nWORK EXPERIENCE\n', isHighlighted: false },
    { text: 'Senior Software Developer | Tech Company | 2020 - 2022\n', isHighlighted: true },
    { text: '- Architected and developed 10+ full-stack web applications using React.js and Node.js, serving 10,000+ active users\n', isHighlighted: true },
    { text: '- Reduced application load time by 40% through code optimization and caching strategies\n', isHighlighted: true },
    { text: '- Collaborated with cross-functional teams in agile environment, delivering features 2 weeks ahead of schedule\n\n', isHighlighted: true },
    { text: 'EDUCATION\n', isHighlighted: false },
    { text: 'Bachelor of Science in Computer Science\n', isHighlighted: false },
    { text: 'University Name, 2020', isHighlighted: false },
  ];

  return { originalCV, enhancedCV };
};

export default function EnhancementPage() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileSelect = (file: File) => {
    if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
      if (file.size <= 5 * 1024 * 1024) {
        setUploadedFile(file);
        setFileName(file.name);
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

  const handleAnalyze = async () => {
    if (!uploadedFile) {
      alert('Please upload a PDF file first');
      return;
    }

    setIsAnalyzing(true);
    // Simulate analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowComparison(true);
    }, 1500);
  };

  const handleCloseComparison = () => {
    setShowComparison(false);
    setUploadedFile(null);
    setFileName('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const { originalCV, enhancedCV } = getExampleData();

  return (
    <DashboardLayout>
      <div className="px-6 sm:px-8 lg:px-12 py-12">
        <div className="mb-8 animate-fadeIn">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#38A169] to-[#48BB78] rounded-xl flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#2D3748]">
                Profile Enhancement
              </h1>
              <p className="text-[#2D3748]/70">
                AI-powered improvements for your professional profile
              </p>
            </div>
          </div>
        </div>

        {!showComparison ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <Card className="animate-slideUp">
                <Sparkles className="w-8 h-8 text-[#38A169] mb-3" />
                <h3 className="text-lg font-bold text-[#2D3748] mb-2">
                  {uploadedFile ? '100%' : '0%'}
                </h3>
                <p className="text-sm text-[#2D3748]/70">Profile completion</p>
              </Card>

              <Card className="animate-slideUp delay-100">
                <Zap className="w-8 h-8 text-[#ED8936] mb-3" />
                <h3 className="text-lg font-bold text-[#2D3748] mb-2">
                  {showComparison ? '8' : '0'}
                </h3>
                <p className="text-sm text-[#2D3748]/70">Improvements suggested</p>
              </Card>

              <Card className="animate-slideUp delay-200">
                <CheckCircle className="w-8 h-8 text-[#2C7A7B] mb-3" />
                <h3 className="text-lg font-bold text-[#2D3748] mb-2">0</h3>
                <p className="text-sm text-[#2D3748]/70">Improvements applied</p>
              </Card>
            </div>

            <Card className="mb-8 animate-slideUp delay-300">
              <h2 className="text-2xl font-bold text-[#2D3748] mb-4">Upload Your CV</h2>
              <p className="text-[#2D3748]/70 mb-6">
                Upload your resume (PDF format) and our AI will analyze it to provide personalized
                enhancement suggestions tailored to your industry and region.
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
                    ? 'border-[#38A169] bg-[#38A169]/5'
                    : uploadedFile
                    ? 'border-[#38A169] bg-[#38A169]/5'
                    : 'border-[#E2E8F0] hover:border-[#2C7A7B]'
                }`}
              >
                {uploadedFile ? (
                  <div className="flex flex-col items-center">
                    <FileText className="w-12 h-12 text-[#38A169] mb-4" />
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
                    <Upload className="w-12 h-12 text-[#2C7A7B] mx-auto mb-4" />
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="animate-slideUp delay-400">
                <h2 className="text-2xl font-bold text-[#2D3748] mb-4">Enhancement Areas</h2>
                <ul className="space-y-3 text-[#2D3748]/70">
                  <li className="flex items-start gap-2">
                    <span className="text-[#38A169] mt-1">✓</span>
                    <span>
                      <strong>Skills optimization</strong> - Highlight key competencies
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#38A169] mt-1">✓</span>
                    <span>
                      <strong>Language refinement</strong> - Professional tone and clarity
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#38A169] mt-1">✓</span>
                    <span>
                      <strong>Achievement focus</strong> - Quantify your impact
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#38A169] mt-1">✓</span>
                    <span>
                      <strong>Regional relevance</strong> - Context-aware suggestions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#38A169] mt-1">✓</span>
                    <span>
                      <strong>Keyword optimization</strong> - ATS-friendly content
                    </span>
                  </li>
                </ul>
              </Card>

              <Card className="animate-slideUp delay-500">
                <h2 className="text-2xl font-bold text-[#2D3748] mb-4">AI-Powered Features</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#38A169] to-[#48BB78] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2D3748] mb-1">Smart Suggestions</h3>
                      <p className="text-[#2D3748]/70 text-sm">
                        Context-aware recommendations based on your industry
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#2C7A7B] to-[#3182CE] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2D3748] mb-1">Instant Analysis</h3>
                      <p className="text-[#2D3748]/70 text-sm">
                        Get results in seconds with our advanced AI
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#805AD5] to-[#9F7AEA] rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2D3748] mb-1">Apply Changes</h3>
                      <p className="text-[#2D3748]/70 text-sm">
                        One-click application of suggested improvements
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </>
        ) : (
          <div className="animate-fadeIn">
            <CVComparisonView
              originalCV={originalCV}
              enhancedCV={enhancedCV}
              fileName={fileName || 'cv.pdf'}
              onClose={handleCloseComparison}
            />
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
