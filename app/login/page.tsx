'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { LogIn, Mail, Lock, ArrowLeft } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // For now, just redirect to dashboard on any login
      // In a real app, you'd validate credentials here
      if (email && password) {
        router.push('/dashboard');
      } else {
        setError('Please fill in all fields');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#FFFAF0] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-md animate-fadeIn">
        {/* Back to Home Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#2C7A7B] hover:text-[#2C7A7B]/80 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Home</span>
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
            Welcome back! Sign in to continue your career journey
          </p>
        </div>

        {/* Login Card */}
        <Card className="p-8 shadow-xl">
          <div className="mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-[#D4A574] to-[#2C7A7B] rounded-xl flex items-center justify-center mb-4 mx-auto">
              <LogIn className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#2D3748] text-center mb-2">
              Sign In
            </h2>
            <p className="text-center text-[#2D3748]/60 text-sm">
              Enter your credentials to access your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {error && (
              <div className="bg-[#F56565]/10 border border-[#F56565]/20 rounded-lg p-3 text-sm text-[#F56565]">
                {error}
              </div>
            )}

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#2D3748] mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-[#2D3748]/40" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-[#E2E8F0] rounded-lg text-[#2D3748] placeholder-[#2D3748]/40 focus:outline-none focus:ring-2 focus:ring-[#2C7A7B] focus:border-transparent transition-all"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#2D3748] mb-2"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-[#2D3748]/40" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-[#E2E8F0] rounded-lg text-[#2D3748] placeholder-[#2D3748]/40 focus:outline-none focus:ring-2 focus:ring-[#2C7A7B] focus:border-transparent transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-[#E2E8F0] text-[#2C7A7B] focus:ring-[#2C7A7B] focus:ring-offset-0"
                />
                <span className="ml-2 text-sm text-[#2D3748]/70">
                  Remember me
                </span>
              </label>
              <Link
                href="/forgot-password"
                className="text-sm font-medium text-[#2C7A7B] hover:text-[#2C7A7B]/80 transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="mr-2">Signing in...</span>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5 mr-2" />
                  Sign In
                </>
              )}
            </Button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-[#2D3748]/70">
              Don&apos;t have an account?{' '}
              <Link
                href="/register"
                className="font-medium text-[#2C7A7B] hover:text-[#2C7A7B]/80 transition-colors"
              >
                Sign up
              </Link>
            </p>
          </div>
        </Card>

        {/* Additional Info */}
        <p className="mt-8 text-center text-xs text-[#2D3748]/50">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}

