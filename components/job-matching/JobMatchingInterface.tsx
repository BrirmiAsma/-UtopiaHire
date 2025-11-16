"use client";

import { useState, useRef, DragEvent } from "react";
import { Briefcase, Upload, FileText, MapPin } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface JobMatch {
  id: string;
  title: string;
  company: string;
  location: string;
  skills: string[];
  description: string;
}

const staticJobMatches: JobMatch[] = [
  {
    id: "1",
    title: "Full-Stack Software Engineer",
    company: "Nairobi Tech Labs",
    location: "Nairobi, Kenya (Hybrid)",
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "REST APIs",
      "SQL",
    ],
    description:
      "Build and maintain web applications for SMEs across Africa. Work closely with product and design teams to ship features quickly.",
  },
  {
    id: "2",
    title: "Frontend Engineer (React)",
    company: "Casablanca Digital Studio",
    location: "Casablanca, Morocco (Remote)",
    skills: ["React", "TypeScript", "UI/UX", "Tailwind CSS"],
    description:
      "Implement responsive, accessible user interfaces for a fast-growing B2B SaaS platform serving MENA clients.",
  },
  {
    id: "3",
    title: "Backend Engineer (Node.js)",
    company: "Lagos FinTech Hub",
    location: "Lagos, Nigeria (On-site)",
    skills: ["Node.js", "Express", "PostgreSQL", "Microservices"],
    description:
      "Design and optimize payment APIs and microservices handling thousands of daily transactions across multiple African markets.",
  },
  {
    id: "4",
    title: "Junior Software Developer",
    company: "Tunis Innovation Center",
    location: "Tunis, Tunisia (Hybrid)",
    skills: ["JavaScript", "Git", "Agile", "Testing"],
    description:
      "Join an international team to support development and QA of internal tools and client-facing applications.",
  },
];

export default function JobMatchingInterface() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeFileName, setResumeFileName] = useState<string>("");
  const [showResults, setShowResults] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileSelect = (file: File) => {
    if (file.type === "application/pdf" || file.name.endsWith(".pdf")) {
      if (file.size <= 5 * 1024 * 1024) {
        setResumeFile(file);
        setResumeFileName(file.name);
      } else {
        alert("File size must be less than 5MB");
      }
    } else {
      alert("Please upload a PDF resume");
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

  const handleStartMatching = () => {
    if (!resumeFile) {
      alert("Please upload your resume first");
      return;
    }
    setShowResults(true);
  };

  const handleReset = () => {
    setShowResults(false);
    setResumeFile(null);
    setResumeFileName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  if (showResults) {
    return (
      <div className="space-y-8 animate-fadeIn">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#2C7A7B] to-[#3182CE] rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#2D3748]">Jobs Matched to Your Resume</h2>
              <p className="text-sm text-[#2D3748]/70">
                Based on your resume: {resumeFileName || "Your resume"}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={handleReset}>
            Upload another resume
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {staticJobMatches.map((job) => (
            <Card key={job.id} className="h-full flex flex-col animate-slideUp">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-[#2D3748] mb-1">{job.title}</h3>
                  <p className="text-sm text-[#2D3748]/80">{job.company}</p>
                </div>
                <div className="flex items-center text-xs text-[#2D3748]/70 bg-[#EBF4FF] px-2 py-1 rounded-full">
                  <MapPin className="w-3 h-3 mr-1" />
                  {job.location}
                </div>
              </div>

              <div className="mb-3">
                <p className="text-xs font-semibold text-[#2D3748]/70 mb-1">Key skills matched</p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-2 py-1 text-xs rounded-full bg-[#EDF2F7] text-[#2D3748]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-sm text-[#2D3748]/80 flex-1">{job.description}</p>

              <div className="mt-4 flex justify-end">
                <Button size="sm" variant="primary">
                  View details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 bg-gradient-to-br from-[#2C7A7B] to-[#3182CE] rounded-lg flex items-center justify-center">
          <Briefcase className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#2D3748]">Upload your resume to start matching</h2>
          <p className="text-sm text-[#2D3748]/70">
            We will suggest roles that are compatible with your experience and skills.
          </p>
        </div>
      </div>

      <Card>
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,application/pdf"
          onChange={handleFileInputChange}
          className="hidden"
        />

        <div
          onClick={() => fileInputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`border-2 border-dashed rounded-xl p-10 text-center transition-colors cursor-pointer ${
            isDragging
              ? "border-[#2C7A7B] bg-[#2C7A7B]/5"
              : resumeFile
              ? "border-[#2C7A7B] bg-[#2C7A7B]/5"
              : "border-[#E2E8F0] hover:border-[#2C7A7B]"
          }`}
        >
          {resumeFile ? (
            <div className="flex flex-col items-center">
              <FileText className="w-10 h-10 text-[#2C7A7B] mb-3" />
              <p className="text-[#2D3748] font-medium mb-1">{resumeFileName}</p>
              <p className="text-xs text-[#2D3748]/70">
                {(resumeFile.size / 1024).toFixed(2)} KB
              </p>
            </div>
          ) : (
            <>
              <Upload className="w-10 h-10 text-[#2C7A7B] mx-auto mb-3" />
              <p className="text-[#2D3748] font-medium mb-1">Click to upload or drag and drop</p>
              <p className="text-xs text-[#2D3748]/70">PDF resumes only (Max 5MB)</p>
            </>
          )}
        </div>

        <div className="mt-6 flex justify-end">
          <Button size="lg" onClick={handleStartMatching}>
            Start matching
          </Button>
        </div>
      </Card>
    </div>
  );
}
