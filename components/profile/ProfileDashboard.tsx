"use client";

import { User, MapPin, Briefcase, Mail, Phone, Globe, Award } from "lucide-react";
import Card from "@/components/ui/Card";

export default function ProfileDashboard() {
  const profile = {
    name: "John Doe",
    title: "Senior Full-Stack Developer",
    location: "Nairobi, Kenya",
    email: "john.doe@example.com",
    phone: "+254 700 000 000",
    website: "https://johndoe.dev",
    summary:
      "Results-driven full-stack engineer with 5+ years of experience building scalable web applications across Africa and MENA.",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "AWS",
      "Docker",
    ],
    experience: [
      {
        role: "Senior Full-Stack Engineer",
        company: "Nairobi Tech Labs",
        period: "2021 - Present",
        location: "Nairobi, Kenya",
        bullets: [
          "Lead development of a multi-tenant SaaS platform used by 50+ clients across Africa.",
          "Mentor a team of 4 developers and collaborate with product and design.",
        ],
      },
      {
        role: "Software Engineer",
        company: "Casablanca Digital Studio",
        period: "2018 - 2021",
        location: "Casablanca, Morocco",
        bullets: [
          "Built and maintained frontend applications with React and TypeScript.",
          "Improved page load performance by 35% through code splitting and caching.",
        ],
      },
    ],
    education: [
      {
        degree: "B.Sc. Computer Science",
        school: "University of Nairobi",
        year: "2018",
      },
    ],
    highlights: [
      "Delivered 15+ production applications for clients in 6 countries.",
      "Experience working in remote, distributed teams.",
    ],
  };

  return (
    <div className="px-6 sm:px-8 lg:px-12 py-12 space-y-8">
      <div className="flex items-center gap-4 mb-4 animate-fadeIn">
        <div className="w-14 h-14 bg-gradient-to-br from-[#3182CE] to-[#805AD5] rounded-xl flex items-center justify-center">
          <User className="w-7 h-7 text-white" />
        </div>
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#2D3748]">Profile</h1>
          <p className="text-[#2D3748]/70">Your personal and professional information</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-slideUp">
        <Card className="lg:col-span-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <h2 className="text-2xl font-bold text-[#2D3748]">{profile.name}</h2>
              <p className="text-sm text-[#2D3748]/80">{profile.title}</p>
              <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-[#2D3748]/70">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {profile.location}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  {profile.email}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  {profile.phone}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Globe className="w-4 h-4" />
                  {profile.website}
                </span>
              </div>
            </div>
          </div>

          <p className="text-sm text-[#2D3748]/80 leading-relaxed">{profile.summary}</p>
        </Card>

        <Card>
          <h3 className="text-lg font-bold text-[#2D3748] mb-3 flex items-center gap-2">
            <Award className="w-5 h-5 text-[#38A169]" />
            Highlights
          </h3>
          <ul className="space-y-2 text-sm text-[#2D3748]/80">
            {profile.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#38A169]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-slideUp delay-100">
        <Card className="lg:col-span-1">
          <h3 className="text-lg font-bold text-[#2D3748] mb-3">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center px-3 py-1 text-xs rounded-full bg-[#EDF2F7] text-[#2D3748]"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>

        <Card className="lg:col-span-2">
          <h3 className="text-lg font-bold text-[#2D3748] mb-3 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-[#3182CE]" />
            Experience
          </h3>
          <div className="space-y-4">
            {profile.experience.map((exp) => (
              <div key={exp.company + exp.role} className="border-l-2 border-[#E2E8F0] pl-4">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <div>
                    <p className="font-semibold text-[#2D3748]">{exp.role}</p>
                    <p className="text-sm text-[#2D3748]/80">{exp.company}</p>
                  </div>
                  <div className="text-xs text-[#2D3748]/60 text-right">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="text-sm text-[#2D3748]/80 list-disc list-inside space-y-1">
                  {exp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-slideUp delay-150">
        <Card>
          <h3 className="text-lg font-bold text-[#2D3748] mb-3">Education</h3>
          <ul className="space-y-3 text-sm text-[#2D3748]/80">
            {profile.education.map((edu) => (
              <li key={edu.school + edu.degree}>
                <p className="font-semibold text-[#2D3748]">{edu.degree}</p>
                <p>{edu.school}</p>
                <p className="text-xs text-[#2D3748]/60">Graduated {edu.year}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
