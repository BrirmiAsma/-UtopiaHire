import { useState } from 'react';
import { ChevronRight, ChevronLeft, Plus, X, User, Briefcase, GraduationCap, Code, Globe } from 'lucide-react';
import Button from '@/components/ui/Button';
import { UserProfile, Experience, Education, Project } from '@/types/interviewAI';

interface ProfileDataCollectorProps {
  onComplete: (profileData: UserProfile) => void;
  onCancel: () => void;
}

export default function ProfileDataCollector({ onComplete, onCancel }: ProfileDataCollectorProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  const [profileData, setProfileData] = useState<UserProfile>({
    name: '',
    mail: '',
    phone: '',
    job: '',
    experiences: [],
    education: [],
    projects: [],
    profile: '',
    language: [],
  });

  const [tempExperience, setTempExperience] = useState<Experience>({
    company: '',
    position: '',
    duration: '',
    description: '',
  });

  const [tempEducation, setTempEducation] = useState<Education>({
    institution: '',
    degree: '',
    year: '',
    field: '',
  });

  const [tempProject, setTempProject] = useState<Project>({
    name: '',
    description: '',
    technologies: [],
    url: '',
  });

  const [techInput, setTechInput] = useState('');
  const [languageInput, setLanguageInput] = useState('');

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return profileData.name && profileData.mail && profileData.job;
      case 2:
      case 3:
      case 4:
        return true;
      case 5:
        return profileData.profile && profileData.language.length > 0;
      case 6:
        return true;
      default:
        return false;
    }
  };

  const addExperience = () => {
    if (tempExperience.company && tempExperience.position) {
      setProfileData({
        ...profileData,
        experiences: [...profileData.experiences, { ...tempExperience }],
      });
      setTempExperience({ company: '', position: '', duration: '', description: '' });
    }
  };

  const removeExperience = (index: number) => {
    setProfileData({
      ...profileData,
      experiences: profileData.experiences.filter((_, i) => i !== index),
    });
  };

  const addEducation = () => {
    if (tempEducation.institution && tempEducation.degree) {
      setProfileData({
        ...profileData,
        education: [...profileData.education, { ...tempEducation }],
      });
      setTempEducation({ institution: '', degree: '', year: '', field: '' });
    }
  };

  const removeEducation = (index: number) => {
    setProfileData({
      ...profileData,
      education: profileData.education.filter((_, i) => i !== index),
    });
  };

  const addProject = () => {
    if (tempProject.name && tempProject.description) {
      setProfileData({
        ...profileData,
        projects: [...profileData.projects, { ...tempProject }],
      });
      setTempProject({ name: '', description: '', technologies: [], url: '' });
    }
  };

  const removeProject = (index: number) => {
    setProfileData({
      ...profileData,
      projects: profileData.projects.filter((_, i) => i !== index),
    });
  };

  const addTechnology = () => {
    if (techInput.trim() && !tempProject.technologies.includes(techInput.trim())) {
      setTempProject({
        ...tempProject,
        technologies: [...tempProject.technologies, techInput.trim()],
      });
      setTechInput('');
    }
  };

  const removeTechnology = (tech: string) => {
    setTempProject({
      ...tempProject,
      technologies: tempProject.technologies.filter(t => t !== tech),
    });
  };

  const addLanguage = () => {
    if (languageInput.trim() && !profileData.language.includes(languageInput.trim())) {
      setProfileData({
        ...profileData,
        language: [...profileData.language, languageInput.trim()],
      });
      setLanguageInput('');
    }
  };

  const removeLanguage = (lang: string) => {
    setProfileData({
      ...profileData,
      language: profileData.language.filter(l => l !== lang),
    });
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(profileData);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#FFFAF0] z-50 overflow-y-auto">
      <div className="max-w-3xl mx-auto py-12 px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#2D3748] mb-2">
            Complete Your Profile
          </h1>
          <p className="text-[#2D3748]/70">
            Step {currentStep} of {totalSteps}
          </p>
          <div className="w-full h-2 bg-gray-200 rounded-full mt-4">
            <div
              className="h-full bg-gradient-to-r from-[#2C7A7B] to-[#38A169] rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          {currentStep === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#3182CE] to-[#805AD5] rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#2D3748]">Basic Information</h2>
                  <p className="text-sm text-[#2D3748]/70">Tell us about yourself</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2D3748] mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7A7B]"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2D3748] mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={profileData.mail}
                  onChange={(e) => setProfileData({ ...profileData, mail: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7A7B]"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2D3748] mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7A7B]"
                  placeholder="+1234567890"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2D3748] mb-2">
                  Job Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={profileData.job}
                  onChange={(e) => setProfileData({ ...profileData, job: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7A7B]"
                  placeholder="Software Engineer"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4A574] to-[#ED8936] rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#2D3748]">Work Experience</h2>
                  <p className="text-sm text-[#2D3748]/70">Add your work history (optional)</p>
                </div>
              </div>

              {profileData.experiences.length > 0 && (
                <div className="space-y-3 mb-6">
                  {profileData.experiences.map((exp, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-lg flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-[#2D3748]">{exp.position}</p>
                        <p className="text-sm text-[#2D3748]/70">{exp.company} • {exp.duration}</p>
                      </div>
                      <button
                        onClick={() => removeExperience(idx)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="space-y-4 border-t pt-6">
                <h3 className="font-semibold text-[#2D3748]">Add Experience</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={tempExperience.company}
                    onChange={(e) => setTempExperience({ ...tempExperience, company: e.target.value })}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7A7B]"
                    placeholder="Company"
                  />
                  <input
                    type="text"
                    value={tempExperience.position}
                    onChange={(e) => setTempExperience({ ...tempExperience, position: e.target.value })}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7A7B]"
                    placeholder="Position"
                  />
                </div>
                <input
                  type="text"
                  value={tempExperience.duration}
                  onChange={(e) => setTempExperience({ ...tempExperience, duration: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7A7B]"
                  placeholder="Duration (e.g., 2020-2023)"
                />
                <textarea
                  value={tempExperience.description}
                  onChange={(e) => setTempExperience({ ...tempExperience, description: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7A7B]"
                  placeholder="Description"
                  rows={3}
                />
                <Button onClick={addExperience} size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Experience
                </Button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#38A169] to-[#48BB78] rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#2D3748]">Education</h2>
                  <p className="text-sm text-[#2D3748]/70">Add your educational background (optional)</p>
                </div>
              </div>

              {profileData.education.length > 0 && (
                <div className="space-y-3 mb-6">
                  {profileData.education.map((edu, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-lg flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-[#2D3748]">{edu.degree} in {edu.field}</p>
                        <p className="text-sm text-[#2D3748]/70">{edu.institution} • {edu.year}</p>
                      </div>
                      <button
                        onClick={() => removeEducation(idx)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="space-y-4 border-t pt-6">
                <h3 className="font-semibold text-[#2D3748]">Add Education</h3>
                <input
                  type="text"
                  value={tempEducation.institution}
                  onChange={(e) => setTempEducation({ ...tempEducation, institution: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7A7B]"
                  placeholder="Institution"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={tempEducation.degree}
                    onChange={(e) => setTempEducation({ ...tempEducation, degree: e.target.value })}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7A7B]"
                    placeholder="Degree"
                  />
                  <input
                    type="text"
                    value={tempEducation.year}
                    onChange={(e) => setTempEducation({ ...tempEducation, year: e.target.value })}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7A7B]"
                    placeholder="Year"
                  />
                </div>
                <input
                  type="text"
                  value={tempEducation.field}
                  onChange={(e) => setTempEducation({ ...tempEducation, field: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7A7B]"
                  placeholder="Field of Study"
                />
                <Button onClick={addEducation} size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Education
                </Button>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#3182CE] to-[#805AD5] rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#2D3748]">Projects</h2>
                  <p className="text-sm text-[#2D3748]/70">Showcase your work (optional)</p>
                </div>
              </div>

              {profileData.projects.length > 0 && (
                <div className="space-y-3 mb-6">
                  {profileData.projects.map((proj, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-lg flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-[#2D3748]">{proj.name}</p>
                        <p className="text-sm text-[#2D3748]/70 mb-2">{proj.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {proj.technologies.map((tech, i) => (
                            <span key={i} className="px-2 py-1 bg-[#2C7A7B] text-white text-xs rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() => removeProject(idx)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="space-y-4 border-t pt-6">
                <h3 className="font-semibold text-[#2D3748]">Add Project</h3>
                <input
                  type="text"
                  value={tempProject.name}
                  onChange={(e) => setTempProject({ ...tempProject, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7A7B]"
                  placeholder="Project Name"
                />
                <textarea
                  value={tempProject.description}
                  onChange={(e) => setTempProject({ ...tempProject, description: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7A7B]"
                  placeholder="Description"
                  rows={3}
                />
                <input
                  type="url"
                  value={tempProject.url}
                  onChange={(e) => setTempProject({ ...tempProject, url: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7A7B]"
                  placeholder="Project URL (optional)"
                />
                <div>
                  <label className="block text-sm font-semibold text-[#2D3748] mb-2">Technologies</label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={techInput}
                      onChange={(e) => setTechInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTechnology())}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7A7B]"
                      placeholder="Add technology (press Enter)"
                    />
                    <Button onClick={addTechnology} size="sm">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tempProject.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-[#2C7A7B] text-white text-sm rounded-full flex items-center gap-2">
                        {tech}
                        <button onClick={() => removeTechnology(tech)}>
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
                <Button onClick={addProject} size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Project
                </Button>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4A574] to-[#ED8936] rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#2D3748]">Profile & Languages</h2>
                  <p className="text-sm text-[#2D3748]/70">Tell us more about yourself</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2D3748] mb-2">
                  Profile Bio <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={profileData.profile}
                  onChange={(e) => setProfileData({ ...profileData, profile: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7A7B]"
                  placeholder="Write a brief description about yourself, your skills, and career goals..."
                  rows={6}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2D3748] mb-2">
                  Languages <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={languageInput}
                    onChange={(e) => setLanguageInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addLanguage())}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7A7B]"
                    placeholder="Add language (e.g., English, French)"
                  />
                  <Button onClick={addLanguage} size="sm">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {profileData.language.map((lang, i) => (
                    <span key={i} className="px-3 py-1 bg-[#2C7A7B] text-white text-sm rounded-full flex items-center gap-2">
                      {lang}
                      <button onClick={() => removeLanguage(lang)}>
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 6 && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-2xl font-bold text-[#2D3748] mb-6">Review Your Profile</h2>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-[#2D3748] mb-2">Basic Information</h3>
                  <p className="text-sm text-[#2D3748]/70">Name: {profileData.name}</p>
                  <p className="text-sm text-[#2D3748]/70">Email: {profileData.mail}</p>
                  {profileData.phone && <p className="text-sm text-[#2D3748]/70">Phone: {profileData.phone}</p>}
                  <p className="text-sm text-[#2D3748]/70">Job: {profileData.job}</p>
                </div>

                {profileData.experiences.length > 0 && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-[#2D3748] mb-2">Experience ({profileData.experiences.length})</h3>
                    {profileData.experiences.map((exp, idx) => (
                      <p key={idx} className="text-sm text-[#2D3748]/70">• {exp.position} at {exp.company}</p>
                    ))}
                  </div>
                )}

                {profileData.education.length > 0 && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-[#2D3748] mb-2">Education ({profileData.education.length})</h3>
                    {profileData.education.map((edu, idx) => (
                      <p key={idx} className="text-sm text-[#2D3748]/70">• {edu.degree} from {edu.institution}</p>
                    ))}
                  </div>
                )}

                {profileData.projects.length > 0 && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-[#2D3748] mb-2">Projects ({profileData.projects.length})</h3>
                    {profileData.projects.map((proj, idx) => (
                      <p key={idx} className="text-sm text-[#2D3748]/70">• {proj.name}</p>
                    ))}
                  </div>
                )}

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-[#2D3748] mb-2">Languages</h3>
                  <p className="text-sm text-[#2D3748]/70">{profileData.language.join(', ')}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={currentStep === 1 ? onCancel : handleBack}
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            {currentStep === 1 ? 'Cancel' : 'Back'}
          </Button>

          <Button
            onClick={handleNext}
            disabled={!canProceed()}
          >
            {currentStep === totalSteps ? 'Start Interview' : 'Next'}
            {currentStep < totalSteps && <ChevronRight className="w-5 h-5 ml-2" />}
          </Button>
        </div>
      </div>
    </div>
  );
}