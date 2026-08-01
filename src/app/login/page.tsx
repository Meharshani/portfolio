"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, Loader2, Mail, Lock, User, AlertCircle } from "lucide-react";
import { useAuth } from "@/components/providers/AuthProvider";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const router = useRouter();
  const { user, signIn, signUp, error: authError, clearError, loading: authLoading } = useAuth();

  const redirectTo = "/teaching";

  useEffect(() => {
    if (!authLoading && user) {
      router.replace(redirectTo);
    }
  }, [authLoading, user, router]);

  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [localError, setLocalError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError("");
    clearError();

    if (!email || !password) {
      setLocalError("Please fill in all fields");
      return;
    }

    if (isSignUp && password !== confirmPassword) {
      setLocalError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setLocalError("Password must be at least 6 characters");
      return;
    }

    setIsSubmitting(true);

    try {
      let user;

      if (isSignUp) {
        user = await signUp(email, password);
      } else {
        user = await signIn(email, password);
      }

      if (!user) {
        return;
      }

      router.push(redirectTo);
      router.refresh();
    } catch {
      // Error handled by auth context
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setLocalError("Please enter your email first");
      return;
    }
    // TODO: Implement password reset
    alert("Password reset link sent to " + email);
  };

  const displayError = authError || localError;

  return (
    <div className="min-h-screen flex items-center justify-center bg-hero-gradient px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/" className="group flex items-center gap-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-2xl font-bold text-white shadow-lg shadow-brand-500/30 transition-transform group-hover:scale-105">
              M
            </div>
            <span className="text-2xl font-bold tracking-tight">
              MHR <span className="text-brand-400">Solution</span>
            </span>
          </Link>
        </div>

        {/* Auth Card */}
        <GlassCard className="w-full">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">
              {isSignUp ? "Create Account" : "Welcome Back"}
            </h1>
            <p className="text-muted">
              {isSignUp
                ? "Join MHR Teaching to manage your classes"
                : "Sign in to access your teaching dashboard"}
            </p>
          </div>

          {displayError && (
            <div
              className={cn(
                "mb-6 flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm animate-shake"
              )}
            >
              <AlertCircle size={18} className="flex-shrink-0" />
              <span>{displayError}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1.5 text-foreground"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted size-5" />
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting || authLoading}
                  className={cn(
                    "w-full pl-10 pr-4 py-3 rounded-xl border bg-background/50 backdrop-blur-sm",
                    "text-foreground placeholder:text-muted/50",
                    "border-white/10 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20",
                    "dark:border-white/10 dark:bg-white/5 dark:focus:border-brand-400",
                    "transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  )}
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1.5 text-foreground"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted size-5" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete={isSignUp ? "new-password" : "current-password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isSubmitting || authLoading}
                  className={cn(
                    "w-full pl-10 pr-12 py-3 rounded-xl border bg-background/50 backdrop-blur-sm",
                    "text-foreground placeholder:text-muted/50",
                    "border-white/10 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20",
                    "dark:border-white/10 dark:bg-white/5 dark:focus:border-brand-400",
                    "transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  )}
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {isSignUp && (
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium mb-1.5 text-foreground"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted size-5" />
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    disabled={isSubmitting || authLoading}
                    className={cn(
                      "w-full pl-10 pr-12 py-3 rounded-xl border bg-background/50 backdrop-blur-sm",
                      "text-foreground placeholder:text-muted/50",
                      "border-white/10 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20",
                      "dark:border-white/10 dark:bg-white/5 dark:focus:border-brand-400",
                      "transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    )}
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground transition-colors"
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            )}

            {!isSignUp && (
              <div className="text-right">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  disabled={isSubmitting || authLoading}
                  className="text-sm text-brand-400 hover:text-brand-300 transition-colors disabled:opacity-50"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <Button
              type="submit"
              className="w-full py-3"
              disabled={isSubmitting || authLoading}
              size="lg"
            >
              {isSubmitting || authLoading ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={20} />
                  {isSignUp ? "Creating Account..." : "Signing In..."}
                </>
              ) : isSignUp ? (
                "Create Account"
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          {/* <div className="mt-6 text-center">
            <p className="text-sm text-muted">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setLocalError("");
                  clearError();
                }}
                disabled={isSubmitting || authLoading}
                className="font-semibold text-brand-400 hover:text-brand-300 transition-colors disabled:opacity-50"
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </button>
            </p>
          </div> */}
        </GlassCard>

        {/* Footer note */}
        <p className="mt-6 text-center text-xs text-muted/60">
          By continuing, you agree to our{" "}
          <a href="/terms" className="text-brand-400 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-brand-400 hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
