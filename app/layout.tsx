import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UtopiaHire - Fair & Inclusive Employment with Ethical AI",
  description: "Empowering job seekers across Africa & MENA with AI-powered career tools. Enhance resumes, practice interviews, and connect with regional opportunities using ethical, contextualized AI.",
  keywords: ["jobs", "careers", "AI", "Africa", "MENA", "employment", "ethical AI", "resume", "interview", "job matching"],
  authors: [{ name: "UtopiaHire Team" }],
  creator: "UtopiaHire",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://utopiahire.com",
    siteName: "UtopiaHire",
    title: "UtopiaHire - Fair & Inclusive Employment with Ethical AI",
    description: "Empowering job seekers across Africa & MENA with ethical AI-powered career tools",
  },
  twitter: {
    card: "summary_large_image",
    title: "UtopiaHire - Fair & Inclusive Employment with Ethical AI",
    description: "Empowering job seekers across Africa & MENA with ethical AI-powered career tools",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
