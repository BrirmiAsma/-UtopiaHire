'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowLeft, Send, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (email && email.includes('@')) {
        setIsSubmitted(true);
      } else {
        setError('Please enter a valid email address');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#FFFAF0] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-md animate-fadeIn">
        {/* Back to Login Link */}
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-[#2C7A7B] hover:text-[#2C7A7B]/80 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Login</span>
        </Link>

        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#D4A574] to-[#2C7A7B] rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">U</span>
            </div>
            <h1 className="text-3xl font-bold text-[#2D3748]">UtopiaHire</h1>
          </div>
          <p className="text-[#2D3748]/70">
            Reset your password securely
          </p>
        </div>

        {/* Forgot Password Card */}
        <Card className="p-8 shadow-xl">
          {!isSubmitted ? (
            <>
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#3182CE] to-[#805AD5] rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#2D3748] text-center mb-2">
                  Forgot Password?
                </h2>
                <p className="text-center text-[#2D3748]/60 text-sm">
                  No worries! Enter your email and we&apos;ll send you reset instructions.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Error Message */}
                {error && (
                  <div className="bg-[#F56565]/10 border border-[#F56565]/20 rounded-lg p-3 text-sm text-[#F56565]">
                    {error}
                  </div>
                )}

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#2D3748] mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-[#2D3748]/40" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7A7B] focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Reset Link
                    </>
                  )}
                </Button>
              </form>
            </>
          ) : (
            // Success State
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#38A169] to-[#48BB78] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#2D3748] mb-3">
                Check Your Email
              </h2>
              <p className="text-[#2D3748]/70 mb-6">
                We&apos;ve sent password reset instructions to:
              </p>
              <p className="text-[#2C7A7B] font-medium mb-6">
                {email}
              </p>
              <p className="text-sm text-[#2D3748]/60 mb-6">
                Didn&apos;t receive the email? Check your spam folder or{' '}
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-[#2C7A7B] hover:text-[#2C7A7B]/80 font-medium"
                >
                  try again
                </button>
              </p>
              <Link href="/login">
                <Button size="lg" variant="outline" className="w-full">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Login
                </Button>
              </Link>
            </div>
          )}

          {/* Back to Login Link */}
          {!isSubmitted && (
            <div className="mt-6 text-center">
              <p className="text-sm text-[#2D3748]/70">
                Remember your password?{' '}
                <Link
                  href="/login"
                  className="font-medium text-[#2C7A7B] hover:text-[#2C7A7B]/80 transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </div>
          )}
        </Card>

        {/* Help Text */}
        <div className="mt-6 text-center">
          <p className="text-sm text-[#2D3748]/60">
            Need help? Contact our{' '}
            <Link href="/feedback" className="text-[#2C7A7B] hover:text-[#2C7A7B]/80 font-medium">
              support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
